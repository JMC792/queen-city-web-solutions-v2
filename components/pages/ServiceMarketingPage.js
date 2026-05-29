import Link from 'next/link';
import Header from '@components/headers/Header1';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ServiceMarketingPage({
  hero,
  intro,
  highlights,
  coverage,
  process,
  outcomes,
  cta,
}) {
  return (
    <main className="bg-white">
      <Header title={hero.title} text={hero.text} image={hero.image} />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-blue-500">{intro.eyebrow}</p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            {intro.title}
          </h1>
          <p className="mt-6 text-lg/8 text-gray-600">{intro.text}</p>
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
            <p className="text-base/7 font-semibold text-blue-500">{coverage.eyebrow}</p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              {coverage.title}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">{coverage.text}</p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {coverage.items.map((service) => (
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
          <p className="text-base/7 font-semibold text-blue-500">{process.eyebrow}</p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            {process.title}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">{process.text}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {process.steps.map((step) => (
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
            <p className="text-base/7 font-semibold text-blue-400">{outcomes.eyebrow}</p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {outcomes.title}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">{outcomes.text}</p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {outcomes.items.map((outcome) => (
              <div key={outcome.name} className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
                <outcome.icon aria-hidden="true" className="size-8 text-blue-400" />
                <h3 className="mt-5 text-base/7 font-semibold text-white">{outcome.name}</h3>
                <p className="mt-2 text-sm/6 text-gray-300">{outcome.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">{cta.title}</h2>
              <p className="mt-3 max-w-2xl text-sm/6 text-gray-300">{cta.text}</p>
            </div>
            <Link
              href={cta.href}
              className="mt-6 inline-flex rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 lg:mt-0"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
