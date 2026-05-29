import Link from 'next/link';
import Header from '@components/headers/Header1';

const faqs = [
  {
    question: 'What kind of websites do you build?',
    answer:
      'We build modern business websites for service companies, local brands, startups, and growing teams that need a clearer online presence and stronger lead flow.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. We can refresh the visual design, improve the page structure, rewrite unclear sections, and tighten the user path so visitors understand what you offer faster.',
  },
  {
    question: 'How long does a typical website project take?',
    answer:
      'Most small business websites take a few weeks depending on the number of pages, content readiness, revisions, and any custom features needed for launch.',
  },
  {
    question: 'Do you help with SEO?',
    answer:
      'Yes. We focus on practical SEO foundations like service pages, metadata, local search structure, page speed, content clarity, and search-friendly site organization.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes. Maintenance can include updates, content changes, bug fixes, performance checks, security basics, and improvements after the site goes live.',
  },
  {
    question: 'Can you help automate parts of my business?',
    answer:
      'Yes. We can help connect forms, follow-up messages, lead capture, intake workflows, and other repeatable steps so your website supports the business instead of sitting still.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'A quick overview of your business, your goals, examples you like, existing brand assets, and any current website or content you already have is enough to begin the conversation.',
  },
  {
    question: 'Do I need to have all my copy ready?',
    answer:
      'No. If you have copy, we can improve it. If you do not, we can help shape page messaging around your services, audience, and goals.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Send a message through the contact page with a short description of what you want to build. We will review the scope and help recommend the best next step.',
  },
];

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Queen City Web Solutions projects, services, timelines, and support.',
};

export default function FAQPage() {
  return (
    <main className="bg-slate-50">
      <Header
        title="FAQ"
        text="Answers to common questions about websites, SEO, maintenance, automation, and what it is like to work with Queen City Web Solutions."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-pretty text-base/7 text-slate-600">
                Can&apos;t find the answer you&apos;re looking for? Reach out to our{' '}
                <Link href="/contact" className="font-semibold text-blue-500 hover:text-blue-400">
                  support team
                </Link>{' '}
                and we&apos;ll help you sort through the details.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-base/7 font-semibold text-slate-950">{faq.question}</dt>
                    <dd className="mt-2 text-base/7 text-slate-600">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
