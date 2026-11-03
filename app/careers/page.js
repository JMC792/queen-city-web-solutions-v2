import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  LifebuoyIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// Components
import Hero from "@components/hero/Hero5";

export const metadata = {
  title: "Careers",
  description:
    "Explore future career opportunities with Queen City Web Solutions in web design, IT support, automation, cybersecurity, and client success.",
};

const values = [
  {
    name: "Own the outcome",
    description:
      "We care about clean handoffs, clear communication, and work that solves the real business problem.",
    icon: CheckCircleIcon,
  },
  {
    name: "Learn in public",
    description:
      "Technology moves fast, so we make room for questions, documentation, experiments, and thoughtful improvement.",
    icon: AcademicCapIcon,
  },
  {
    name: "Protect the client",
    description:
      "Whether we are touching a website, inbox, device, or cloud account, trust and care come first.",
    icon: ShieldCheckIcon,
  },
];

const benefits = [
  "Remote-friendly collaboration",
  "Flexible project-based work",
  "Real client problems to solve",
  "Mentorship and skill growth",
  "Room to shape internal systems",
  "Work across web, IT, and automation",
];

const roleTracks = [
  {
    name: "Web Design & Development",
    description:
      "Build fast, polished websites, service pages, landing pages, and client-facing digital experiences.",
    icon: CodeBracketIcon,
    skills: ["Next.js", "Tailwind CSS", "SEO basics", "Content structure"],
  },
  {
    name: "IT & Help Desk Support",
    description:
      "Help businesses keep devices, accounts, software, and day-to-day technology running smoothly.",
    icon: LifebuoyIcon,
    skills: ["Microsoft 365", "User support", "Troubleshooting", "Documentation"],
  },
  {
    name: "Automation & Operations",
    description:
      "Create workflows that reduce repetitive work and connect the tools businesses already use.",
    icon: SparklesIcon,
    skills: ["Zapier", "APIs", "CRM workflows", "Process mapping"],
  },
  {
    name: "Cybersecurity & Cloud",
    description:
      "Support safer sign-ins, access controls, backups, endpoint protection, and cloud administration.",
    icon: ComputerDesktopIcon,
    skills: ["MFA", "Cloud admin", "Backups", "Security basics"],
  },
];

const hiringSteps = [
  {
    name: "Introduce yourself",
    description:
      "Tell us what you like building, supporting, or learning. A portfolio, GitHub, resume, or project notes all help.",
  },
  {
    name: "Quick conversation",
    description:
      "We talk through your interests, availability, strengths, and the kind of work that gives you energy.",
  },
  {
    name: "Practical sample",
    description:
      "For some roles, we may ask for a small, realistic task so we can understand how you think and communicate.",
  },
  {
    name: "Match with work",
    description:
      "When there is a fit, we match you with client work, internal projects, or future openings.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Hero />

      <section className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-blue-500">Careers</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Build useful technology for real businesses
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Queen City Web Solutions works across websites, managed IT, cloud, cybersecurity, and automation. We are building a team of practical problem-solvers who like turning messy technical needs into clear next steps.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500 text-white">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-950">{value.name}</h3>
                <p className="mt-3 text-sm/6 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-24 text-white sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <p className="text-base/7 font-semibold text-blue-300">How We Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Small team, high ownership, practical pace
            </h2>
            <p className="mt-6 text-base/7 text-gray-300">
              We value people who can ask good questions, write things down, follow through, and keep learning. You do not need to know everything. You do need to care about doing the work well.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-blue-300" aria-hidden="true" />
                  <p className="text-sm/6 text-gray-100">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base/7 font-semibold text-blue-500">Role Tracks</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Places you could grow with us
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We may not always have every role open, but these are the kinds of people we want to keep meeting as the company grows.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {roleTracks.map((role) => (
              <article key={role.name} className="rounded-lg border border-gray-200 p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-950 text-white">
                    <role.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-950">{role.name}</h3>
                    <p className="mt-3 text-sm/6 text-gray-600">{role.description}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div>
              <p className="text-base/7 font-semibold text-blue-500">Hiring Process</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                Clear, respectful, and practical
              </h2>
              <p className="mt-6 text-base/7 text-gray-600">
                We want the process to feel like the work: thoughtful, direct, and useful for both sides.
              </p>
            </div>

            <div className="lg:col-span-2">
              <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {hiringSteps.map((step, index) => (
                  <li key={step.name} className="rounded-lg bg-white p-6 ring-1 ring-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-gray-950">{step.name}</h3>
                    </div>
                    <p className="mt-4 text-sm/6 text-gray-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg bg-gray-950 px-8 py-12 text-white sm:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-4 text-sm/6 text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  Charlotte, NC / Remote-friendly
                </span>
                <span className="inline-flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  Future and project-based roles
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Want to be on our radar?
              </h2>
              <p className="mt-4 text-base/7 text-gray-300">
                Send us your information, examples of work, or a short note about what you want to learn next. We review future-fit candidates as the team grows.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="https://app.dover.com/jobs/queen-city-web-solutions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400"
              >
                View opportunities
                <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100"
              >
                Contact us
                <BriefcaseIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
