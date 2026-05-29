import Link from 'next/link';
import Header from '@components/headers/Header1';
import {
  ArrowPathIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  FingerPrintIcon,
  KeyIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserPlusIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const highlights = [
  {
    name: 'Cleaner Access',
    description:
      'Organize users, groups, roles, and permissions so people have the access they need without unnecessary exposure.',
    icon: UserGroupIcon,
  },
  {
    name: 'Stronger Sign-Ins',
    description:
      'Improve account protection with practical SSO, MFA, password, and authentication controls.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Better Oversight',
    description:
      'Create repeatable reviews for onboarding, offboarding, privilege changes, and account cleanup.',
    icon: ClipboardDocumentCheckIcon,
  },
];

const iamServices = [
  'User Access Planning',
  'Single Sign-On Setup',
  'Multi-Factor Authentication',
  'Role-Based Access Control',
  'Account Provisioning',
  'Account Deprovisioning',
  'Permission Reviews',
  'Password Policy Guidance',
  'Privileged Access Management',
  'Conditional Access Policies',
  'Identity Provider Configuration',
  'Directory Cleanup',
  'Security Group Management',
  'Access Documentation',
];

const process = [
  {
    title: 'Review',
    description:
      'Map users, applications, groups, permissions, identity providers, MFA coverage, and access risks.',
    icon: UsersIcon,
  },
  {
    title: 'Standardize',
    description:
      'Create practical role, group, onboarding, offboarding, and access request patterns for daily operations.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Protect',
    description:
      'Apply authentication controls such as MFA, SSO, conditional access, and stronger password policies.',
    icon: LockClosedIcon,
  },
  {
    title: 'Maintain',
    description:
      'Keep access current with reviews, documentation, cleanup, and adjustments as your team changes.',
    icon: ArrowPathIcon,
  },
];

const outcomes = [
  {
    name: 'Faster onboarding',
    description: 'New users get the right access with fewer one-off decisions and less manual confusion.',
    icon: UserPlusIcon,
  },
  {
    name: 'Reduced access risk',
    description: 'Accounts, privileges, and sign-in controls are easier to audit and keep aligned.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Simpler sign-ins',
    description: 'SSO and MFA planning helps users work securely without juggling unnecessary friction.',
    icon: KeyIcon,
  },
];

export const metadata = {
  title: 'Identity & Access Management',
  description:
    'Identity and access management support for user access planning, SSO, MFA, account controls, role-based access, and access reviews.',
};

export default function IAMPage() {
  return (
    <main className="bg-white">
      <Header
        title="Identity & Access Management"
        text="Secure user access, simplify sign-ins, and keep account permissions aligned with how your business actually works."
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-blue-500">Identity & Access Management</p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            The right access for the right people
          </h1>
          <p className="mt-6 text-lg/8 text-gray-600">
            IAM gives your business a more reliable way to manage users, permissions, authentication, and account lifecycle changes. The goal is simple: fewer risky accounts, smoother sign-ins, and cleaner access decisions.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-950">
                  <item.icon aria-hidden="true" className="size-5 flex-none text-blue-500" />
                  {item.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{item.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-blue-500">What We Cover</p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Identity and access services
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              From SSO and MFA to account provisioning, permission reviews, directory cleanup, and privileged access, these services help keep access organized as the business changes.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {iamServices.map((service) => (
              <div
                key={service}
                className="flex items-start gap-x-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-blue-500" />
                <p className="text-sm/6 font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-blue-500">How It Works</p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Access management with a repeatable rhythm
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Better identity work starts by understanding who has access, where they sign in, and which permissions matter most. Then the system can be standardized, protected, and maintained over time.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {process.map((step) => (
            <div key={step.title} className="rounded-lg border border-gray-200 p-6">
              <step.icon aria-hidden="true" className="size-8 text-blue-500" />
              <h3 className="mt-5 text-base/7 font-semibold text-gray-950">{step.title}</h3>
              <p className="mt-2 text-sm/6 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-blue-400">Business Outcomes</p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Access controls that are easier to run and audit
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Identity work should make security stronger while making daily administration less messy. The result is a clearer access model that supports people, tools, and compliance needs.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome.name} className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
                <outcome.icon aria-hidden="true" className="size-8 text-blue-400" />
                <h3 className="mt-5 text-base/7 font-semibold text-white">{outcome.name}</h3>
                <p className="mt-2 text-sm/6 text-gray-300">{outcome.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Need cleaner access controls?
              </h2>
              <p className="mt-3 max-w-2xl text-sm/6 text-gray-300">
                Start with a conversation about your users, apps, sign-ins, and permission risks.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 lg:mt-0"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
