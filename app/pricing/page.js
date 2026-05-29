import Link from 'next/link';
import Header from '@components/headers/Header1';
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Starter Website',
    id: 'starter',
    href: '/contact',
    price: '$150',
    period: '/mo',
    description:
      'For businesses that need a clean, credible web presence with the essential pages and launch details handled.',
    features: [
      'Up to 5 core pages',
      'Responsive website build',
      'Contact form setup',
      'Basic SEO foundations',
      'Hosting support',
      'Unlimited basic edits',
    ],
    featured: false,
  },
  {
    name: 'Growth Website',
    id: 'growth',
    href: '/contact',
    price: '$300',
    period: '/mo',
    description:
      'For businesses that want stronger service pages, better search foundations, and a clearer path from visitor to lead.',
    features: [
      'Everything in Starter',
      'Service page strategy',
      'Local SEO improvements',
      'Analytics setup',
      'Conversion-focused sections',
      'Monthly improvement planning',
    ],
    featured: true,
  },
  {
    name: 'Website Care',
    id: 'care',
    href: '/contact',
    price: '$150',
    period: '/mo',
    description:
      'For businesses that already have a site and need ongoing updates, fixes, performance checks, and support.',
    features: [
      'Content updates',
      'Bug fixes',
      'Form testing',
      'Performance review',
      'Broken link checks',
      'Improvement recommendations',
    ],
    featured: false,
  },
  {
    name: 'Custom Scope',
    id: 'custom',
    href: '/contact',
    price: 'Custom',
    period: '',
    description:
      'For deeper projects involving automation, IT services, cybersecurity, cloud work, integrations, or larger websites.',
    features: [
      'Custom discovery',
      'Technical planning',
      'Automation workflows',
      'IT and security services',
      'Custom integrations',
      'Phased project roadmap',
    ],
    featured: false,
  },
];

const comparison = [
  {
    feature: 'Website design and build',
    starter: true,
    growth: true,
    care: false,
    custom: true,
  },
  {
    feature: 'Hosting support',
    starter: true,
    growth: true,
    care: true,
    custom: true,
  },
  {
    feature: 'SEO foundations',
    starter: true,
    growth: true,
    care: false,
    custom: true,
  },
  {
    feature: 'Local SEO and content planning',
    starter: false,
    growth: true,
    care: false,
    custom: true,
  },
  {
    feature: 'Ongoing content updates',
    starter: true,
    growth: true,
    care: true,
    custom: true,
  },
  {
    feature: 'Monthly improvement planning',
    starter: false,
    growth: true,
    care: true,
    custom: true,
  },
  {
    feature: 'Automation or integration planning',
    starter: false,
    growth: false,
    care: false,
    custom: true,
  },
  {
    feature: 'IT, cloud, or cybersecurity scope',
    starter: false,
    growth: false,
    care: false,
    custom: true,
  },
];

const faqs = [
  {
    question: 'Are these fixed prices or starting points?',
    answer:
      'They are starting points. Final scope depends on the number of pages, content needs, integrations, support requirements, and timeline.',
  },
  {
    question: 'Can I start with one package and upgrade later?',
    answer:
      'Yes. Many businesses start with a focused website or care package, then add SEO, automation, or support work once priorities become clearer.',
  },
  {
    question: 'Do you offer one-time projects?',
    answer:
      'Yes. Monthly pricing is useful for ongoing work, but one-time builds, audits, migrations, and custom scopes can be quoted separately.',
  },
  {
    question: 'What is the best first step?',
    answer:
      'Start with a quick conversation about the current site, business goals, timeline, and what is creating the most friction right now.',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const metadata = {
  title: 'Pricing',
  description:
    'Website, SEO, maintenance, automation, IT, and custom project pricing options from Queen City Web Solutions.',
};

export default function PricingPage() {
  return (
    <main className="bg-white">
      <Header
        title="Pricing"
        text="Simple package direction for businesses that want a clearer website, stronger lead flow, and ongoing digital support."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base/7 font-semibold text-blue-500">Pricing</p>
          <h1 className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
            Choose the right starting point for your next website or support plan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg/8 text-gray-600">
            These packages are designed to make scoping easier. Start with the closest fit, then we can adjust the details around your goals, timeline, and current systems.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-stretch gap-y-6 sm:mt-20 lg:max-w-7xl lg:grid-cols-4 lg:gap-x-6">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.featured
                  ? 'relative bg-gray-950 text-white shadow-2xl ring-1 ring-gray-950'
                  : 'bg-white text-gray-950 ring-1 ring-gray-200',
                'flex flex-col rounded-lg p-8'
              )}
            >
              {tier.featured ? (
                <p className="absolute right-6 top-6 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </p>
              ) : null}
              <h2
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-950',
                  'text-lg font-semibold'
                )}
              >
                {tier.name}
              </h2>
              <p
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-4 text-sm/6'
                )}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-950',
                    'text-5xl font-semibold tracking-tight'
                  )}
                >
                  {tier.price}
                </span>
                {tier.period ? (
                  <span className={tier.featured ? 'text-sm/6 text-gray-300' : 'text-sm/6 text-gray-500'}>
                    {tier.period}
                  </span>
                ) : null}
              </p>
              <Link
                href={tier.href}
                className={classNames(
                  tier.featured
                    ? 'bg-blue-500 text-white hover:bg-blue-400'
                    : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:bg-blue-50',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold transition'
                )}
              >
                Discuss this plan
              </Link>
              <ul
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm/6'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? 'text-blue-400' : 'text-blue-500',
                        'h-6 w-5 flex-none'
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-blue-500">Compare Plans</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Match the package to the work you actually need
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Use this table as a quick guide. If your project touches multiple categories, a custom scope is usually the cleanest path.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-gray-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold">
                      Feature
                    </th>
                    {tiers.map((tier) => (
                      <th key={tier.id} scope="col" className="px-6 py-4 text-sm font-semibold">
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row" className="px-6 py-5 text-sm font-medium text-gray-950">
                        {row.feature}
                      </th>
                      {['starter', 'growth', 'care', 'custom'].map((key) => (
                        <td key={key} className="px-6 py-5">
                          {row[key] ? (
                            <CheckIcon aria-hidden="true" className="h-5 w-5 text-blue-500" />
                          ) : (
                            <MinusIcon aria-hidden="true" className="h-5 w-5 text-gray-300" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-base/7 font-semibold text-blue-500">FAQ</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Pricing questions, answered plainly
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Most projects need a little scope conversation before the price is final, but these answers should make the starting point clearer.
            </p>
          </div>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-gray-200 p-6">
                <dt className="text-base/7 font-semibold text-gray-950">{faq.question}</dt>
                <dd className="mt-2 text-sm/6 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 rounded-lg bg-gray-950 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Not sure which package fits?
            </h2>
            <p className="mt-3 max-w-2xl text-sm/6 text-gray-300">
              Start with the business goal, current site or systems, and timeline. We will help map the practical scope.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 lg:mt-0"
          >
            Get Pricing Guidance
          </Link>
        </div>
      </section>
    </main>
  );
}
