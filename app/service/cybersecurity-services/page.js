import Link from 'next/link';
import Header from '@components/headers/Header1';
import {
  ArrowPathIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const securityOutcomes = [
  {
    name: 'Reduce avoidable risk',
    description:
      'Find weak points across accounts, endpoints, email, firewalls, and everyday workflows before they become expensive incidents.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Protect users and devices',
    description:
      'Strengthen the systems employees use every day with endpoint protection, MFA, email security, access policies, and practical training.',
    icon: UserGroupIcon,
  },
  {
    name: 'Respond with confidence',
    description:
      'Build a clearer plan for suspicious alerts, ransomware concerns, access issues, and security events that need quick action.',
    icon: ExclamationTriangleIcon,
  },
];

const serviceGroups = [
  {
    title: 'Protection',
    description: 'Core controls that make accounts, endpoints, and email harder to abuse.',
    items: ['Endpoint Protection', 'Email Security', 'Ransomware Protection', 'Firewall Management'],
  },
  {
    title: 'Identity',
    description: 'Access controls that help the right people reach the right systems.',
    items: [
      'Multi-Factor Authentication (MFA)',
      'Identity & Access Management',
      'Access Control Policies',
      'Zero Trust Security',
    ],
  },
  {
    title: 'Monitoring',
    description: 'Visibility into activity that could point to compromise or misuse.',
    items: ['SIEM Monitoring', 'Threat Detection', 'Dark Web Monitoring', 'Vulnerability Scanning'],
  },
  {
    title: 'Readiness',
    description: 'Planning and support for the moments when security questions get urgent.',
    items: ['Incident Response', 'Compliance Assistance', 'Security Awareness Training'],
  },
];

const capabilities = [
  { name: 'Endpoint Protection', icon: ServerStackIcon },
  { name: 'Multi-Factor Authentication (MFA)', icon: FingerPrintIcon },
  { name: 'Identity & Access Management', icon: FingerPrintIcon },
  { name: 'SIEM Monitoring', icon: EyeIcon },
  { name: 'Firewall Management', icon: ShieldCheckIcon },
  { name: 'Vulnerability Scanning', icon: EyeIcon },
  { name: 'Threat Detection', icon: ExclamationTriangleIcon },
  { name: 'Email Security', icon: EnvelopeIcon },
  { name: 'Security Awareness Training', icon: UserGroupIcon },
  { name: 'Zero Trust Security', icon: LockClosedIcon },
  { name: 'Access Control Policies', icon: LockClosedIcon },
  { name: 'Incident Response', icon: ArrowPathIcon },
  { name: 'Compliance Assistance', icon: CheckCircleIcon },
  { name: 'Ransomware Protection', icon: ShieldCheckIcon },
  { name: 'Dark Web Monitoring', icon: EyeIcon },
];

const stats = [
  { name: 'Capability areas', value: '15' },
  { name: 'Primary focus', value: 'Risk reduction' },
  { name: 'Best first step', value: 'Security review' },
];

export const metadata = {
  title: 'Cybersecurity Services',
  description: 'Cybersecurity planning, endpoint protection, MFA, monitoring, and incident response support.',
};

export default function CybersecurityServicesPage() {
  return (
    <main className="bg-white">
      <Header
        title="Cybersecurity Services"
        text="Practical cybersecurity support for protecting users, systems, customer trust, and the data your business depends on."
        image="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-blue-500">Security built for real operations</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-950 sm:text-5xl">
              Security that helps your business stay trusted, resilient, and ready
            </h1>
            <p className="mt-6 text-lg/8 text-slate-600">
              Cybersecurity should not feel like a pile of disconnected tools. We help organize the controls, monitoring, and response planning that protect the way your team actually works.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-slate-600 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {securityOutcomes.map((item) => (
              <div key={item.name} className="rounded-lg border border-slate-200 p-6">
                <dt className="font-semibold text-slate-950">
                  <item.icon aria-hidden="true" className="mb-5 h-8 w-8 text-blue-500" />
                  {item.name}
                </dt>
                <dd className="mt-2">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base/7 font-semibold text-blue-500">What we cover</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A practical security stack for small business systems
            </h2>
            <p className="mt-6 text-lg/8 text-slate-600">
              Start with the areas that create the most risk, then build a stronger security foundation over time.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {serviceGroups.map((group) => (
              <section key={group.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/10">
                <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                <p className="mt-3 text-sm/6 text-slate-600">{group.description}</p>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-x-3 text-sm/6 text-slate-700">
                      <CheckCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-base/7 font-semibold text-blue-500">Capabilities</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                The cybersecurity services your team can grow into
              </h2>
              <p className="mt-6 text-base/7 text-slate-600">
                You do not have to implement every control at once. This page gives you a clear menu of security areas that can be prioritized around your current risk, budget, and tools.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400"
                >
                  Request a Security Review
                </Link>
                <Link
                  href="/resources/security"
                  className="inline-flex justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  View Security Tips
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item.name} className="flex gap-x-4 rounded-lg border border-slate-200 p-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                    <item.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-6 text-slate-950">{item.name}</h3>
                    <p className="mt-1 text-xs/5 text-slate-500">
                      Scoped around your current systems, users, and business risk.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
                <dt className="text-sm/6 text-slate-300">{stat.name}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
