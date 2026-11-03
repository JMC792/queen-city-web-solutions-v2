'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerContainer, revealViewport } from '@components/motion/variants';

const logos = [
    {
        alt: 'Duke Energy',
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Duke_Energy_logo.svg',
        className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
    },
    {
        alt: 'Bank of America',
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg',
        className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
    },
    {
        alt: 'Wells Fargo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg',
        className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
    },
    {
        alt: 'Lowes',
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Lowes_Companies_Logo.svg',
        className: 'col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1',
    },
    {
        alt: 'Truist',
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Truist_Financial_logo.svg',
        className: 'col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1',
    },
];

export default function LogoCloud() {
    return (
        <motion.section
            // Start hidden, then animate once this section scrolls into view.
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{ ...revealViewport, amount: 0.35 }}
            className="bg-white py-24 sm:py-32"
        >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.h2
                variants={fadeUp}
                className="text-center text-lg font-semibold leading-8 text-gray-900"
            >
            Trusted by the world’s most innovative teams
            </motion.h2>
            <motion.div
                variants={staggerContainer}
                className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            >
            {logos.map((logo) => (
                <motion.img
                    key={logo.alt}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.03 }}
                    alt={logo.alt}
                    src={logo.src}
                    width={158}
                    height={48}
                    className={logo.className}
                />
            ))}
            </motion.div>
        </div>
        </motion.section>
    )
}
