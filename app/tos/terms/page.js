import Link from 'next/link';
import Header1 from '@components/headers/Header1';

const quickNotes = [
  'Use of the website means you agree to these terms.',
  'Queen City Web Solutions owns or licenses the site content.',
  'Third-party links are provided for convenience and have their own policies.',
  'Questions about these terms can be sent to our team.',
];

const termsSections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'Thank you for visiting www.queencitywebsolutions.com (the “Site”), provided to you by Queen City Web Solutions (“Queen City Web Solutions”). Use of the Site is governed by these terms of use (the “Terms”), which include the Site Privacy Policy (the “Policy”). By accessing and interacting with the Site, you agree to be bound by these Terms and, as applicable, the Policy.',
      'You should read these Terms and the Policy carefully prior to using the Site. Queen City Web Solutions may modify these Terms and/or the Policy at any time, and any such modification will become effective immediately upon Queen City Web Solutions posting the modified Terms or Policy to the Site. Queen City Web Solutions encourages you to visit the Terms and Policy pages periodically to check for updates.',
    ],
  },
  {
    title: 'Ownership',
    content: [
      'The Site and all material contained on or downloadable through the Site, including text, images, documents, graphics, photos, video, audio, and other multimedia content (the “Site Content”), and all intellectual property rights embodied in the Site Content, are the exclusive property of Queen City Web Solutions or its licensors.',
      'Queen City Web Solutions grants you a license to print out single copies of materials and documents available through the Site for your own personal or non-commercial use. You may not modify, excerpt from, edit, reproduce, publish, or distribute Site Content without the prior written permission of Queen City Web Solutions, except for the limited personal or non-commercial use described above.',
      'The posting of Site Content to the Site by Queen City Web Solutions does not waive any rights of Queen City Web Solutions or its licensors in the Site Content, or transfer to you or anyone else any rights in or to the Site Content. No right or license is granted to use any trademarks or service marks of Queen City Web Solutions.',
    ],
  },
  {
    title: 'Links to Third-Party Websites',
    content: [
      'The Site may contain links to third-party websites. These links are provided solely for your information and convenience. Queen City Web Solutions does not control the content or operation of third-party sites and makes no representation, warranty, or endorsement with respect to the products or services depicted or offered on such sites.',
      'Your use of third-party sites will be subject to the terms of use, privacy policy, and other policies established by those operators. Queen City Web Solutions is not responsible for third-party websites or their content or security.',
    ],
  },
  {
    title: 'Disclaimer',
    content: [
      'THE SITE AND THE SITE CONTENT ARE PROVIDED AS-IS AND WITH ALL FAULTS. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, QUEEN CITY WEB SOLUTIONS DISCLAIMS ALL EXPRESS OR IMPLIED WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR IMPLIED WARRANTIES ARISING FROM A COURSE OF DEALING, USAGE, OR TRADE PRACTICE.',
      'QUEEN CITY WEB SOLUTIONS MAKES NO WARRANTY THAT THE SITE IS SECURE, WILL OPERATE WITHOUT ERROR, OR BE AVAILABLE FOR YOUR USE, NOR THAT THE SITE CONTENT IS COMPLETE, ACCURATE, UP-TO-DATE, OR FREE FROM ERRORS. BY ACCESSING THE SITE, YOU ASSUME ALL RISK OF YOUR USE OF THE SITE AND ANY RELIANCE ON SITE CONTENT.',
      'IF APPLICABLE LAW DOES NOT ALLOW THE EXCLUSION OF IMPLIED OR STATUTORY WARRANTIES TO APPLY TO YOU, THE ABOVE EXCLUSIONS WILL APPLY TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'IN NO EVENT SHALL QUEEN CITY WEB SOLUTIONS, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR ANY OTHER PARTY PURPORTING TO CLAIM THROUGH ANY OF THE FOREGOING, BE LIABLE TO YOU OR ANY OTHER PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES OF ANY TYPE WHATSOEVER ARISING OR ALLEGED TO HAVE ARISEN FROM THE USE OF THE SITE OR SITE CONTENT.',
      'This includes, without limitation, loss of business, revenue, profits, use, data, goodwill, or other economic advantage, however such damages arise, whether for breach of contract or in tort, including negligence, even if Queen City Web Solutions is expressly advised of the possibility of such damages.',
    ],
  },
  {
    title: 'Indemnification',
    content: [
      'You agree to indemnify, defend, and hold harmless Queen City Web Solutions, its subsidiaries, affiliates, joint ventures, business partners, licensors, officers, directors, employees, agents, and successors in interest from and against any claims, losses, liabilities, and expenses, including attorneys’ fees, arising from your use of the Site or Site Content, breach of these Terms or the Policy, and/or any representations or warranties made by you with respect to Submissions made by you or on your behalf through the Site.',
    ],
  },
  {
    title: 'Your Conduct on the Site',
    content: [
      'You agree that you shall not submit, post, introduce, distribute, upload, or transmit to or through the Site material that is illegal, indecent, obscene, libelous, defamatory, disparaging, false, misleading, unsolicited advertising, infringing, malicious, or impersonating another person or source.',
      'You further agree not to engage in any activity on or in connection with the Site meant to compromise or circumvent Site security, derive passwords of third parties, introduce scraping or monitoring code, or unduly stress the Site, including mass downloading of Site Content or facilitating denial of service attacks.',
      'Any breach of these provisions, or any other unauthorized or prohibited use of the Site or Site Content, may subject you to civil liability or criminal prosecution under applicable laws.',
    ],
  },
  {
    title: 'Site Submissions',
    content: [
      'The Site may provide opportunities for you to submit information, inquiries, feedback, or other materials to Queen City Web Solutions (each, a “Submission”). All Submissions, whether submitted via email, web form, or otherwise, shall be deemed non-confidential by Queen City Web Solutions.',
      'By delivering a Submission to the Site, you grant Queen City Web Solutions a fully paid-up, non-exclusive, perpetual, worldwide, and royalty-free license to use such Submission as Queen City Web Solutions deems appropriate, subject to any limits on use set forth in the Policy.',
      'Queen City Web Solutions reserves the right at any time and without notice to reject, refuse to accept, post, delete, or remove any Submission. You represent and warrant that you have all necessary rights in and to all Submissions and postings made by you or on your behalf.',
      'If you are under the age of 13, you may not register with or otherwise make Submissions to the Site. If you are over the age of 13 but under 18, Submissions may be submitted on your behalf only with the prior permission of your parent or legal guardian.',
    ],
  },
  {
    title: 'Choice of Law',
    content: [
      'These Terms are subject to and shall be interpreted in accordance with the laws of the State of Delaware, without regard to its conflicts of laws provisions. By using the Site, you waive any claims that may arise under the laws of other states, countries, territories, or jurisdictions.',
      'You agree that any dispute, legal action, or proceeding between you and Queen City Web Solutions that concerns or relates to your access and use of the Site, Site Content, Submissions, postings, or other material or information available via the Site shall be brought exclusively in federal or state court, as applicable, in the State of Delaware.',
      'Any proceedings to resolve or litigate any dispute in any forum will be conducted solely on an individual basis. Neither you nor Queen City Web Solutions will seek to have any dispute heard as a class action or in any other proceeding in which either party acts or proposes to act in a representative capacity.',
    ],
  },
];

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Queen City Web Solutions.',
};

export default async function Page() {
  return (
    <main className="bg-slate-50">
      <Header1
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
        title="Terms of Use"
        text="The terms that govern your use of the Queen City Web Solutions website."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
              Legal
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Terms of Use
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              These terms explain how visitors may use the Queen City Web Solutions website, how our content is protected, and what responsibilities apply when interacting with the site.
            </p>
            <p className="mt-4 text-sm text-slate-500">Last updated: May 2026</p>
          </div>

          <section className="mt-10 rounded-lg bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-950">At a Glance</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              {quickNotes.map((note) => (
                <li key={note} className="flex gap-x-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 space-y-12">
            {termsSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-lg bg-slate-950 p-8 text-white">
              <h2 className="text-2xl font-semibold tracking-tight">
                Contacting Queen City Web Solutions
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Any questions, claims, or issues related to the Site, Site Content, Submissions, or your use of the foregoing should be sent to Queen City Web Solutions.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm font-semibold sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-md bg-blue-500 px-4 py-2.5 text-white transition hover:bg-blue-400"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:contact@queencitywebsolutions.com"
                  className="inline-flex justify-center rounded-md border border-white/20 px-4 py-2.5 text-white transition hover:bg-white/10"
                >
                  contact@queencitywebsolutions.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
