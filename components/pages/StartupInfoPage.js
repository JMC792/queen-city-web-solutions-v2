import Link from 'next/link';
import Header1 from '@components/headers/Header1';

export default function StartupInfoPage({
  eyebrow,
  title,
  subtitle,
  image,
  sections = [],
  bullets = [],
  ctaTitle = 'Ready to build something better?',
  ctaText = 'Tell us where you are now and where you want the business to go. We will help shape the next practical step.',
}) {
  return (
    <main className="bg-slate-50">
      <Header1 image={image} title={title} text={subtitle} />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              {title}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{subtitle}</p>

            {bullets.length ? (
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-700">
                {bullets.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </aside>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title} className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{section.text}</p>
              </section>
            ))}

            <section className="rounded-lg bg-slate-950 p-8 text-white">
              <h2 className="text-2xl font-semibold tracking-tight">{ctaTitle}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{ctaText}</p>
              <div className="mt-6 flex flex-col gap-3 text-sm font-semibold sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-md bg-blue-500 px-4 py-2.5 text-white transition hover:bg-blue-400"
                >
                  Start a Project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex justify-center rounded-md border border-white/20 px-4 py-2.5 text-white transition hover:bg-white/10"
                >
                  View Work
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
