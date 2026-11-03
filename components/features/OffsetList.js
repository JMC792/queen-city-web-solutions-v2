'use client';

import { CheckIcon } from '@heroicons/react/20/solid'
import { motion } from 'motion/react';
import { fadeUp, staggerContainer, revealViewport } from '@components/motion/variants';

const features = [
    {
        name: 'IT Staffing Solutions',
        description: 'Providing businesses with highly skilled IT professionals to meet short-term and long-term staffing needs.',
    },
    {
        name: 'IT Consultation',
        description: 'Expert advice and strategic planning to help businesses optimize their IT infrastructure and processes.',
    },
    {
        name: 'Project Management',
        description: 'Comprehensive project management services to ensure IT projects are completed on time and within budget.',
    },
    {
        name: 'Cybersecurity Services',
        description: 'Protecting businesses from cyber threats with advanced security solutions and risk management strategies.',
    },
    {
        name: 'Cloud Solutions',
        description: 'Assisting businesses in migrating to and managing cloud-based environments for improved scalability and efficiency.',
    },
    {
        name: 'Software Development',
        description: 'Custom software development services to meet the unique needs of businesses, from conception to deployment.',
    },
]

export default function OffsetList() {
    return (
    <motion.section
        // Start hidden, then animate when the section scrolls into view.
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ ...revealViewport, amount: 0.3 }}
        className="bg-white py-24 sm:py-32"
        >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
                <motion.h2
                    variants={fadeUp}
                    className="text-base font-semibold leading-7 text-indigo-600"
                >
                    Empowering Your IT Journey
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Expert IT Staffing and Consultation Services
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    className="mt-6 text-base leading-7 text-gray-600"
                >
                    We specialize in a comprehensive suite of IT services, designed to navigate the complexities of the technology landscape. From IT staffing solutions to cybersecurity services, we provide skilled guidance and support to businesses seeking to optimize their IT infrastructure. Trust us to deliver the expertise and resources you need to achieve your business goals.
                </motion.p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                <motion.div
                    key={feature.name}
                    // Each feature card fades up after the one before it.
                    variants={fadeUp}
                    // Hover gives a tiny lift so the list feels alive.
                
                    className="relative p-4 pl-12"
                >
                <dt className="font-semibold text-gray-900">
                    <CheckIcon className="absolute left-4 top-5 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
                </motion.div>
            ))}
            </dl>
        </div>
        </div>
    </motion.section>
    )
}
