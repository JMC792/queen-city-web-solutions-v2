import {Fragment} from "react";
import Link from "next/link";

import Header from "@components/headers/Header1.js";
import OffsetList from "@components/features/OffsetList.js";

//Locales
import service from "public/locales/english/services.json";

//images

const serviceLinks = [
  {
    title: "Managed IT Services",
    href: "/service/managed-it-services",
    description: "Ongoing IT support, system care, and practical technology guidance for growing teams.",
  },
  {
    title: "Cybersecurity Services",
    href: "/service/cybersecurity-services",
    description: "Security planning, risk reduction, and protections for users, systems, and business data.",
  },
  {
    title: "Identity & Access Management",
    href: "/service/iam",
    description: "User access, authentication, SSO, MFA, and account control support for safer operations.",
  },
  {
    title: "Network & Infrastructure",
    href: "/service/network-infrastructure",
    description: "Reliable network foundations, device support, and infrastructure planning for daily operations.",
  },
  {
    title: "Cloud Services",
    href: "/service/cloud-services",
    description: "Cloud setup, migration support, administration, and tools that help teams work securely.",
  },
  {
    title: "Backup & Disaster Recovery",
    href: "/service/backup-disaster-recovery",
    description: "Backup strategy and recovery planning that helps protect the business from data loss.",
  },
  {
    title: "Help Desk Support",
    href: "/service/help-desk-support",
    description: "Responsive help for common technology issues, user questions, and day-to-day support needs.",
  },
  {
    title: "Web Design & Hosting",
    href: "/service/web-design",
    description: "Modern websites, hosting support, and launch help for businesses that need a stronger web presence.",
  },
];



export const metadata = {
  title: 'Service',
  description: '...',
}


export default function Page() {
  return (
        <Fragment>
            <Header
              image = {"https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"}
              title = {"Our Services"}
              text = {"Managed IT, cybersecurity, IAM, cloud, network support, backup planning, help desk, and web design services for businesses that need dependable technology."}
            />
            <OffsetList
              heading={service.section1.heading}
              title={service.section1.title}
              paragraph={service.section1.paragraph}
            />
            <section className="bg-slate-50 px-6 py-20 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
                    Core Services
                  </p>
                  <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                    Technology services built around reliability
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600">
                    Start with the support your business needs most, then build toward a cleaner, safer, and more dependable technology foundation.
                  </p>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                      <p className="mt-6 text-sm font-semibold text-blue-500">Learn more</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
        </Fragment>
  );
}
