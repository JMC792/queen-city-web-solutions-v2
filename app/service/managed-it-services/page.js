import Link from 'next/link';
import Header from '@components/headers/Header1';
import {
  ArrowPathIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const highlights = [
  {
    name: 'Proactive Support',
    description: 'Keep systems watched, maintained, and tuned before small issues slow the business down.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Responsive Help',
    description: 'Give users a clear path for everyday technical problems, troubleshooting, and support requests.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Cleaner Operations',
    description: 'Organize assets, documentation, vendors, accounts, and recurring IT work in one dependable process.',
    icon: ClipboardDocumentListIcon,
  },
];

const managedItServices = [
  '24/7 Monitoring',
  'Remote Help Desk',
  'Device Management',
  'Patch Management',
  'Software Installation',
  'User Account Management',
  'Vendor Management',
  'IT Documentation',
  'Asset Tracking',
  'Preventative Maintenance',
  'System Optimization',
  'Remote Troubleshooting',
  'Endpoint Management',
  'Business IT Support',
];

const process = [
  {
    title: 'Assess',
    description: 'Review your devices, accounts, vendors, tools, support needs, and current pain points.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Stabilize',
    description: 'Handle the high-priority fixes, missing documentation, patch gaps, and recurring support problems.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Maintain',
    description: 'Create a steady support rhythm for monitoring, updates, issue response, and ongoing improvement.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Improve',
    description: 'Use what we learn from support activity to optimize systems and plan better technology decisions.',
    icon: Cog6ToothIcon,
  },
];

export const metadata = {
  title: 'Managed IT Services',
  description: 'Managed IT support, 24/7 monitoring, remote help desk, device management, patching, and business IT support.',
};

export default function ManagedITServicesPage() {
  return (
    <main className="bg-white">
      <Header
        title="Managed IT Services"
        text="Ongoing IT support, monitoring, maintenance, and troubleshooting for businesses that need dependable technology without the daily chaos."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-blue-500">Managed IT</p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Technology support that keeps the business moving
          </h1>
          <p className="mt-6 text-lg/8 text-gray-600">
            Managed IT Services give your team a practical support layer for devices, users, systems, vendors, and recurring maintenance. The goal is simple: fewer interruptions, clearer ownership, and better day-to-day reliability.
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
              Managed IT service coverage
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              This page can grow into separate detail pages later. For now, each item shows the support areas included under Managed IT Services.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {managedItServices.map((service) => (
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
            A simple operating rhythm for IT support
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            The best IT support is organized, visible, and repeatable. This structure keeps support from becoming random firefighting.
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

        <div className="mt-16 rounded-lg bg-gray-950 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Need a steadier IT support process?
            </h2>
            <p className="mt-3 max-w-2xl text-sm/6 text-gray-300">
              Start with a quick conversation about your devices, users, tools, and recurring problems.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 lg:mt-0"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}