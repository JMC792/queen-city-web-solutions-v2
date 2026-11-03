'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { fadeUp, staggerContainer, revealViewport } from '@components/motion/variants';

const features = [
  {
    name: 'Website launch',
    detail: 'Design, copy structure, hosting, and performance checks',
    icon: CodeBracketIcon,
    status: 'Ready',
  },
  {
    name: 'IT workflow',
    detail: 'Device setup, user access, help desk routing, and documentation',
    icon: CpuChipIcon,
    status: 'Automated',
  },
  {
    name: 'Security review',
    detail: 'MFA, backups, DNS, email protection, and account hardening',
    icon: ShieldCheckIcon,
    status: 'Protected',
  },
];

const codeLines = [
  'const project = await launch({',
  '  website: "responsive",',
  '  automation: "client-ready",',
  '  support: "documented",',
  '  security: "reviewed"',
  '})',
];

export default function MotionShowcase() {
  return (
    <section className="overflow-hidden bg-gray-950 px-6 py-24 text-white sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ ...revealViewport, amount: 0.35 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-base/7 font-semibold text-blue-300">
            Motion example
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            A Column-inspired interface animation for your homepage
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg/8 text-gray-300">
            Column uses polished product UI cards to make technical infrastructure feel tangible. This section does the same for Queen City Web Solutions: layered panels, staged reveals, and a gentle floating motion.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Start a project
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center rounded-md px-4 py-3 text-sm font-semibold text-gray-200 ring-1 ring-white/15 transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={staggerContainer}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.div
            aria-hidden="true"
            variants={fadeUp}
            className="absolute -left-8 top-12 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            variants={fadeUp}
            className="absolute -right-10 bottom-8 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl"
          />

          <motion.div
            variants={fadeUp}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="relative rounded-lg bg-white p-4 text-gray-950 shadow-2xl ring-1 ring-white/20"
          >
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm font-semibold text-gray-950">Project command center</p>
                <p className="mt-1 text-xs text-gray-500">Live delivery snapshot</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Online
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  variants={fadeUp}
                  custom={index}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-950 text-white">
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-gray-950">{feature.name}</p>
                        <span className="text-xs font-medium text-blue-600">{feature.status}</span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{feature.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-4 overflow-hidden rounded-lg bg-gray-950 p-4 font-mono text-xs leading-6 text-gray-100"
            >
              {codeLines.map((line) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + codeLines.indexOf(line) * 0.08 }}
                  className="flex gap-3"
                >
                  <span className="select-none text-gray-500">
                    {String(codeLines.indexOf(line) + 1).padStart(2, '0')}
                  </span>
                  <span>{line}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, x: 18 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 right-4 hidden rounded-lg bg-white p-4 text-gray-950 shadow-xl ring-1 ring-gray-200 sm:block"
          >
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="h-8 w-8 text-emerald-500" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">Client handoff ready</p>
                <p className="text-xs text-gray-500">Docs, access, and next steps packaged</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
