// A small email check. It does not try to prove the inbox exists;
// it only catches obvious typos before we save or forward the signup.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Keep API responses shaped the same way everywhere in this file.
function jsonResponse(body, status = 200) {
  return Response.json(body, { status });
}

async function getRequestBody(request) {
  const contentType = request.headers.get('content-type') || '';

  // Most JavaScript forms will send JSON.
  if (contentType.includes('application/json')) {
    return request.json();
  }

  // Normal browser forms may send form data instead.
  if (
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('multipart/form-data')
  ) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  return {};
}

// Turn unknown values into safe, trimmed strings.
function cleanString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request) {
  let body;

  // Read the submitted form body. If the body is broken, stop early.
  try {
    body = await getRequestBody(request);
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: 'Invalid request body.',
      },
      400
    );
  }

  const email = cleanString(body.email).toLowerCase();
  const name = cleanString(body.name);
  const source = cleanString(body.source) || 'website';
  const company = cleanString(body.company);

  // Honeypot field: real users should never fill this out,
  // but many spam bots will. Return success so bots do not learn anything.
  if (company) {
    return jsonResponse({ ok: true });
  }

  // Email is the only required field for newsletter signup.
  if (!email) {
    return jsonResponse(
      {
        ok: false,
        error: 'Email is required.',
      },
      400
    );
  }

  // Catch malformed emails before forwarding the signup.
  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse(
      {
        ok: false,
        error: 'Please enter a valid email address.',
      },
      400
    );
  }

  // This is the clean payload we will send to the newsletter provider.
  const subscriber = {
    email,
    name,
    source,
    subscribedAt: new Date().toISOString(),
  };

  // If no provider webhook is configured yet, still return success.
  // This lets the frontend be built and tested before choosing a provider.
  if (!process.env.NEWSLETTER_WEBHOOK_URL) {
    return jsonResponse({
      ok: true,
      configured: false,
      message: 'Newsletter signup received. Add NEWSLETTER_WEBHOOK_URL to forward signups.',
      subscriber,
    });
  }

  try {
    // Forward the signup to whatever newsletter tool owns this webhook.
    const response = await fetch(process.env.NEWSLETTER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(subscriber),
    });

    // A non-2xx response means the provider saw the request but rejected it.
    if (!response.ok) {
      return jsonResponse(
        {
          ok: false,
          error: 'Newsletter provider rejected the signup.',
        },
        502
      );
    }

    // Everything worked.
    return jsonResponse({
      ok: true,
      configured: true,
      message: 'Newsletter signup successful.',
    });
  } catch {
    // Network errors land here, like DNS problems or a provider outage.
    return jsonResponse(
      {
        ok: false,
        error: 'Unable to reach newsletter provider.',
      },
      502
    );
  }
}

// This endpoint is only for form submissions.
export async function GET() {
  return jsonResponse(
    {
      ok: false,
      error: 'Method not allowed. Use POST.',
    },
    405
  );
}
