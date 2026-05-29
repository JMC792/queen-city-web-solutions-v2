import { Fragment } from 'react';
import Link from 'next/link';
import Header1 from '@components/headers/Header1';

const policySections = [
  {
    title: 'Internet-Based Advertising',
    content: [
      'On our websites, we may collect information about your online activities, such as the pages you access, through automated means such as cookies, web server logs, and web beacons. We use this data to tailor advertising about our products and services to your individual interests. We use third-party services to provide analytics regarding this data.',
      'You may refuse to accept cookies by clicking on “DECLINE” on our cookie banner. Doing so may affect your ability to use and interact with Queen City Web Solutions’ websites.',
      'You may see certain ads on other websites because we participate in advertising networks. Ad networks allow us to target our messaging to users through demographic, interest-based, and contextual means. These networks track your online activities over time by collecting information through automated means, including through the use of cookies, web server logs, and web beacons. The networks use this information to show you advertisements that may be tailored to your individual interests. The information our ad networks may collect includes data about your visits to websites that participate in the relevant advertising networks, such as the pages or advertisements you view and the actions you take on the websites. This data collection takes place both on our Sites and on third-party websites that participate in the ad networks. This process also helps us track the effectiveness of our marketing efforts.',
    ],
  },
  {
    title: 'How We Use Personal Information',
    content: [
      'Queen City Web Solutions may use the personal information we collect about you or that you provide to us for the following purposes:',
    ],
    list: [
      'Responding to requests for information, including requests made through forms found on our websites.',
      'Providing products and services, performing our contracts, and otherwise operating our business.',
      'Processing employment applications, evaluating candidate employment qualifications, and contacting individuals regarding employment opportunities where appropriate.',
      'Performing human resources functions for Queen City Web Solutions and its employees.',
      'Providing marketing, partner, or corporate communication notices.',
      'Preparing and submitting bids and proposals to customers, including government and private sector entities.',
      'Managing our relationship with you and the organization you represent.',
      'Protecting Queen City Web Solutions, its employees, and its business partners against cybersecurity and other security events, espionage, fraud, insider threats, and other unlawful activity, claims, and other liabilities.',
      'Exercising Queen City Web Solutions legal rights.',
      'Complying with and enforcing applicable legal requirements, industry standards, and Queen City Web Solutions policies.',
    ],
    after: [
      'Queen City Web Solutions’ Careers website may be managed by a third-party vendor, and data collected through that website may be stored for internal use by Queen City Web Solutions. If you apply for employment with Queen City Web Solutions, we will use this information to evaluate your employment application and for human resources processing.',
      'Except in rare circumstances where Queen City Web Solutions is required by law to disclose or otherwise process your personal information, we will only process your personal information as necessary for the purposes explained to you when the information is collected or as otherwise described in this notice.',
    ],
  },
  {
    title: 'How We Share Personal Information',
    content: [
      'Queen City Web Solutions does not sell, lease, rent, or license the personal information it collects to third parties. We may disclose personal information to third parties in the following circumstances:',
    ],
    list: [
      'To third-party service providers to facilitate the services they provide.',
      'To submit bids for proposals from government or commercial customers.',
      'To perform contractual services for customers.',
      'To protect Queen City Web Solutions’ rights, privacy, safety, or property, and that of its customers, employees, affiliates, users, and others.',
      'To support an investigation of cybersecurity and other security events, espionage, fraud, insider threats, and other illegal activity.',
      'In the event of a merger, sale, transfer, or other disposition of all or any portion of Queen City Web Solutions’ business assets or stock.',
      'When requested by law enforcement or other government authorities.',
      'When required by law, regulation, court order, or other legal process.',
      'For any other legal purpose.',
    ],
    after: [
      'Queen City Web Solutions routinely requires third-party business partners to protect and maintain personal information in confidence, and not to license, sell, or otherwise transfer such information except as directed by Queen City Web Solutions.',
    ],
  },
  {
    title: 'Your Rights and Choices',
    content: [
      'On Queen City Web Solutions’ website, you may sign up to receive certain types of information about us by email. By signing up, you are joining an opt-in list to receive these communications. If you no longer wish to receive these communications, we provide a link to unsubscribe in our communications.',
      'If you request via email, written correspondence, or phone, Queen City Web Solutions will disclose to you the personal information collected by us where required by applicable law. If you desire to update, modify, or delete personal information you have provided via the website, we will take commercially reasonable efforts to fulfill your requests. Please note that Queen City Web Solutions may be required to retain certain information for legal, dispute resolution, compliance, or backup purposes.',
    ],
  },
  {
    title: 'Transfers of Information',
    content: [
      'Queen City Web Solutions is headquartered in the United States in Charlotte, North Carolina, and its business information systems are primarily located in the United States. If you are not located in the United States, any personal information you provide through Queen City Web Solutions’ website and third-party online services may be transferred to the United States and other countries in which we operate in support of our customers.',
    ],
  },
  {
    title: 'Children Under the Age of 13',
    content: [
      'Queen City Web Solutions’ websites and online services are not directed to or intended for children under the age of 13. Queen City Web Solutions does not knowingly solicit, store, or use personal information of children under the age of 13, except as permitted by law. If Queen City Web Solutions becomes aware it has inadvertently collected personal information of children under the age of 13, we will promptly delete the information.',
    ],
  },
  {
    title: 'Securing Information',
    content: [
      'Queen City Web Solutions implements commercially reasonable and appropriate technical, physical, and administrative measures to help prevent the loss, misuse, disclosure, alteration, destruction, and unauthorized access to the personal information you provide. However, no Internet-based information system is completely secure, and Queen City Web Solutions cannot eliminate all security risks associated with electronic transfer and storage.',
    ],
  },
  {
    title: 'Third-Party Websites',
    content: [
      'Queen City Web Solutions’ website may contain links to websites operated by third parties, including social media services. Queen City Web Solutions does not control these third-party sites and services and is not responsible for their content, products, services, actions, or privacy practices. If you link to or from our website using other websites, review the privacy policy on those third-party sites to determine what rules may apply.',
    ],
  },
  {
    title: 'Changes to This Notice',
    content: [
      'Queen City Web Solutions reserves the right to amend this Privacy Notice at any time, for any reason, without notice other than posting the amended Privacy Notice on this website. Changes are effective on the date Queen City Web Solutions posts the revised Privacy Notice and supersede all previous versions.',
    ],
  },
];

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Queen City Web Solutions.',
};

export default async function Page() {
  return (
    <Fragment>
      <Header1
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
        title="Privacy Policy"
        text="How Queen City Web Solutions handles personal information."
      />

      <main className="bg-slate-50">
        <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="border-b border-slate-200 pb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
                Legal
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Queen City Web Solutions respects your privacy. This notice explains how we collect, use, share, and protect personal information obtained through our website, forms, communications, and business operations.
              </p>
              <p className="mt-4 text-sm text-slate-500">Last updated: May 2026</p>
            </div>

            <div className="mt-10 space-y-12">
              <section>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Overview
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Queen City Web Solutions, including its wholly-owned subsidiaries where applicable, provides web design, digital strategy, and cybersecurity consultation services. We apply respect and accountability to the protection of personal information obtained from individuals through our websites and in the course of doing business.
                </p>
              </section>

              {policySections.map((section) => (
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

                  {section.list ? (
                    <ul className="mt-5 space-y-3 rounded-lg bg-slate-50 p-6 text-base leading-7 text-slate-700">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-x-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.after ? (
                    <div className="mt-5 space-y-4">
                      {section.after.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-slate-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}

              <section className="rounded-lg bg-slate-950 p-8 text-white">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Contacting Queen City Web Solutions
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  If you have questions about this Privacy Notice or wish to update, modify, or delete personal information provided to Queen City Web Solutions, contact us and we will review your request.
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
    </Fragment>
  );
}
