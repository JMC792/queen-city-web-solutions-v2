import Link from 'next/link';
import Header1 from '@components/headers/Header1';

const commitments = [
  {
    title: 'Fair Consideration',
    description:
      'We evaluate applicants and team members based on qualifications, experience, potential, and business needs.',
  },
  {
    title: 'Respectful Workplace',
    description:
      'We aim to maintain a workplace and hiring process where people are treated with respect, dignity, and professionalism.',
  },
  {
    title: 'Accessible Process',
    description:
      'We review accommodation requests and work to provide reasonable support where required by applicable law.',
  },
];

const protectedStatuses = [
  'Race',
  'Color',
  'Religion',
  'Age',
  'National origin',
  'Ancestry',
  'Ethnicity',
  'Gender',
  'Gender identity',
  'Gender expression',
  'Sexual orientation',
  'Marital status',
  'Veteran status',
  'Disability',
  'Genetic information',
  'Citizenship status',
  'Membership in any other group protected by federal, state, or local law',
];

export const metadata = {
  title: 'Equal Employment Opportunity',
  description: 'Equal employment opportunity statement for Queen City Web Solutions.',
};

export default function EqualEmploymentOpportunity() {
  return (
    <main className="bg-slate-50">
      <Header1
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80"
        title="Equal Employment Opportunity"
        text="Our commitment to fair, respectful, and inclusive employment practices."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
              Employment
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Equal Employment Opportunity
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Queen City Web Solutions is an Equal Opportunity Employer. We consider applicants and employment decisions without unlawful discrimination and in accordance with applicable federal, state, and local laws.
            </p>
            <p className="mt-4 text-sm text-slate-500">Last updated: May 2026</p>
          </div>

          <div className="mt-10 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Our Statement
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We consider applicants without regard to race, color, religion, age, national origin, ancestry, ethnicity, gender, gender identity, gender expression, sexual orientation, marital status, veteran status, disability, genetic information, citizenship status, or membership in any other group protected by federal, state, or local law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                What This Means
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {commitments.map((item) => (
                  <article key={item.title} className="rounded-lg bg-slate-50 p-6">
                    <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Protected Categories
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our equal employment commitment applies to legally protected categories, including:
              </p>
              <ul className="mt-6 grid gap-3 rounded-lg bg-slate-50 p-6 text-sm text-slate-700 sm:grid-cols-2">
                {protectedStatuses.map((status) => (
                  <li key={status} className="flex gap-x-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                    <span>{status}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg bg-slate-950 p-8 text-white">
              <h2 className="text-2xl font-semibold tracking-tight">
                Questions or Accommodation Requests
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                If you have questions about this statement or need assistance during the hiring process, contact Queen City Web Solutions and we will review your request.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm font-semibold sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-md bg-blue-500 px-4 py-2.5 text-white transition hover:bg-blue-400"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:info@queencitywebsolutions.com"
                  className="inline-flex justify-center rounded-md border border-white/20 px-4 py-2.5 text-white transition hover:bg-white/10"
                >
                  info@queencitywebsolutions.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
