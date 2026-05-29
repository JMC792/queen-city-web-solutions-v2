import Link from 'next/link';
import Header from '@components/headers/Header1';
import {
  ArrowPathIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  FingerPrintIcon,
  MapIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SignalIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const highlights = [
  {
    name: 'Stable Connectivity',
    description:
      'Design wired, wireless, VPN, and remote-site connections around how your team actually works.',
    icon: SignalIcon,
  },
  {
    name: 'Secure Infrastructure',
    description:
      'Harden firewalls, switches, servers, access points, and cloud connections against common business risks.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Operational Visibility',
    description:
      'Monitor the network foundation so performance issues, outages, and capacity problems are easier to spot.',
    icon: ServerStackIcon,
  },
];

const networkServices = [
  'Network Design',
  'Firewall Configuration',
  'VPN Setup',
  'Wi-Fi Optimization',
  'Server Management',
  'Switch Configuration',
  'Structured Cabling',
  'Infrastructure Monitoring',
  'Backup Systems',
  'Disaster Recovery',
  'Cloud Connectivity',
  'Performance Optimization',
  'Remote Site Connectivity',
  'Network Security Hardening',
];

const process = [
  {
    title: 'Map',
    description:
      'Document sites, circuits, hardware, cabling, wireless coverage, servers, cloud dependencies, and user needs.',
    icon: MapIcon,
  },
  {
    title: 'Secure',
    description:
      'Review firewall rules, VPN access, switch configuration, wireless settings, segmentation, and hardening gaps.',
    icon: FingerPrintIcon,
  },
  {
    title: 'Optimize',
    description:
      'Tune performance, coverage, routing, cloud connectivity, backups, and remote access for everyday reliability.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Monitor',
    description:
      'Keep watch over key infrastructure signals and use findings to improve uptime, capacity, and recovery planning.',
    icon: ArrowPathIcon,
  },
];

const outcomes = [
  {
    name: 'Clean topology',
    description: 'A clearer view of how offices, users, devices, servers, and cloud systems connect.',
    icon: CpuChipIcon,
  },
  {
    name: 'Safer access',
    description: 'Firewall, VPN, Wi-Fi, and remote connectivity settings aligned with business risk.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Better continuity',
    description: 'Backup and disaster recovery planning connected to the infrastructure it protects.',
    icon: CloudArrowUpIcon,
  },
];

export const metadata = {
  title: 'Network & Infrastructure',
  description:
    'Network design, firewall configuration, VPN setup, Wi-Fi optimization, server management, infrastructure monitoring, backup systems, and disaster recovery support.',
};

export default function NetworkInfrastructurePage() {
  return (
    <main className="bg-white">
      <Header
        title="Network & Infrastructure"
        text="Reliable networks, secure infrastructure, and practical connectivity planning for teams that need technology to work without constant friction."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-blue-500">Network & Infrastructure</p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            A stronger foundation for connected work
          </h1>
          <p className="mt-6 text-lg/8 text-gray-600">
            Your network is the path between people, devices, systems, data, and cloud tools. We help design, secure, monitor, and improve that foundation so daily work feels faster, steadier, and easier to support.
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
              Network and infrastructure services
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              From cabling and switching to firewall rules, VPN access, server operations, backups, and monitoring, these services keep the technical backbone of the business organized and resilient.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {networkServices.map((service) => (
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
            Practical infrastructure work without the guesswork
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            A reliable network starts with clarity. We identify what exists, tighten the riskiest areas, improve performance, and keep the system visible over time.
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
              Infrastructure that is easier to secure, support, and scale
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              The work is technical, but the result should be straightforward: fewer surprises, clearer ownership, and better continuity when something changes or fails.
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
                Need a cleaner network foundation?
              </h2>
              <p className="mt-3 max-w-2xl text-sm/6 text-gray-300">
                Start with a conversation about your sites, connectivity, security, and infrastructure priorities.
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
