import Link from 'next/link';
import Header from '@components/headers/Header1';

const caseStudies = [
  {
    title: 'Service Business Website Refresh',
    category: 'Web Design & Hosting',
    result: 'Clearer service pages and a stronger path from visitor interest to contact.',
    description:
      'A local service business needed a cleaner website structure, stronger first impression, and easier ways for visitors to understand services and request help.',
    href: '/contact',
  },
  {
    title: 'IT Support Readiness Plan',
    category: 'Managed IT Services',
    result: 'A more organized support model for devices, users, vendors, and recurring issues.',
    description:
      'A growing team needed a practical way to understand their technology needs, reduce repeated issues, and plan support before problems slowed down operations.',
    href: '/contact',
  },
  {
    title: 'Security Foundations Review',
    category: 'Cybersecurity Services',
    result: 'A prioritized roadmap for account security, access controls, and risk reduction.',
    description:
      'A small business wanted to improve security without getting buried in technical noise, so the focus became practical changes with clear business value.',
    href: '/contact',
  },
];

const metrics = [
  { label: 'Project Types', value: 'Web, IT, Security' },
  { label: 'Focus', value: 'Clarity + Reliability' },
  { label: 'Next Step', value: 'Discovery Call' },
];

export const metadata = {
  title: 'Case Studies',
  description: 'Case studies and project examples from Queen City Web Solutions.',
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-slate-50">
      <Header
        title="Case Studies"
        text="Project examples showing how better websites, IT support, and security planning can make a business easier to trust, manage, and grow."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
              Work Examples
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Practical improvements, clear outcomes
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              These examples are written as starting points while the portfolio grows. Each one shows the kind of business problem Queen City Web Solutions can help organize and improve.
            </p>
            <dl className="mt-8 grid gap-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-md bg-slate-50 p-4">
                  <dt className="text-sm font-medium text-slate-500">{item.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-950">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-500">{study.category}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      {study.title}
                    </h2>
                  </div>
                  <Link
                    href={study.href}
                    className="inline-flex justify-center rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Discuss a Project
                  </Link>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {study.description}
                </p>
                <div className="mt-6 rounded-md bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-slate-950">Outcome</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{study.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
