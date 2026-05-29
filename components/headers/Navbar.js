'use client'

import {useState, Fragment} from 'react';
import Link from 'next/link' 
import Image from "next/image";

//Components
import SideNav from './SideNav';

//Images/SVG
import { Bars3Icon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
    BriefcaseIcon,
    CodeBracketIcon,
    ComputerDesktopIcon,
    EnvelopeIcon,
    InformationCircleIcon,
    ServerStackIcon,
    CloudIcon,
    CircleStackIcon,
    LifebuoyIcon,
    FingerPrintIcon,
    NewspaperIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    ClipboardDocumentCheckIcon,
    PresentationChartLineIcon,
    QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

// Main navbar data. Items with "children" automatically become dropdown menus.
const navItems = [
    {
        name: 'Services',
        href: '/service',
        children: [
            {
                name: 'Managed IT Services',
                href: '/service/managed-it-services',
                description: 'Day-to-day technology support for growing teams.',
                icon: ComputerDesktopIcon
            },
            {
                name: 'Cybersecurity Services',
                href: '/service/cybersecurity-services',
                description: 'Practical protection for users, systems, and data.',
                icon: ShieldCheckIcon
            },
            {
                name: 'Identity & Access Management',
                href: '/service/iam',
                description: 'Secure user access, sign-ins, and account controls.',
                icon: FingerPrintIcon
            },
            {
                name: 'Network & Infrastructure',
                href: '/service/network-infrastructure',
                description: 'Reliable networks, devices, and office technology.',
                icon: ServerStackIcon
            },
            {
                name: 'Cloud Services',
                href: '/service/cloud-services',
                description: 'Cloud setup, migrations, and everyday administration.',
                icon: CloudIcon
            },
            {
                name: 'Backup & Disaster Recovery',
                href: '/service/backup-disaster-recovery',
                description: 'Data protection and recovery planning before problems hit.',
                icon: CircleStackIcon
            },
            {
                name: 'Help Desk Support',
                href: '/service/help-desk-support',
                description: 'Responsive support for common technology issues.',
                icon: LifebuoyIcon
            },
            {
                name: 'Web Design & Hosting',
                href: '/service/web-design',
                description: 'Modern websites with hosting and launch support.',
                icon: CodeBracketIcon
            }
        ],
    },

    { name: 'Pricing', href: '/pricing' },

    {
        name: 'Resources',
        href: '/resources',
        children: [
            {
                name: 'Blog',
                href: '/blog',
                description: 'Insights on web design, SEO, and business growth.',
                icon: NewspaperIcon
            },
            {
                name: 'SEO Guides',
                href: '/resources/seo-guides',
                description: 'Actionable strategies to improve search rankings.',
                icon: ChartBarIcon
            },
            {
                name: 'Security Tips',
                href: '/resources/security',
                description: 'Cybersecurity advice for small businesses.',
                icon: ShieldCheckIcon
            },
            {
                name: 'Free Audit',
                href: '/resources/free-audit',
                description: 'Request a free website performance and SEO audit.',
                icon: ClipboardDocumentCheckIcon
            },
            {
                name: 'Case Studies',
                href: '/resources/case-studies',
                description: 'See how we help businesses grow online.',
                icon: PresentationChartLineIcon
            },
            {
                name: 'FAQ',
                href: '/faq',
                description: 'Answers to common questions about our services.',
                icon: QuestionMarkCircleIcon
            },
        ],
    },

    {
        name: 'Company',
        href: '/about',
        children: [
            {
                name: 'About',
                href: '/about',
                description: 'Learn what Queen City Web Solutions is building and why.',
                icon: InformationCircleIcon
            },
            {
                name: 'Careers',
                href: '/careers',
                description: 'Explore future opportunities to work with the team.',
                icon: BriefcaseIcon
            },
            {
                name: 'Contact',
                href: '/contact',
                description: 'Get in touch with our team to start your next project.',
                icon: EnvelopeIcon
            },
        ],
    },
];

function Navbar(props) {


    // Controls whether the mobile slide-out menu is open.
    const [offcanvas, setOffcanvas] = useState(false);

    // The careers page uses a light background, so this switches text/logo colors.
    const isLight = props.variant === 'light';
    const navTextClass = isLight
        ? "text-slate-900 transition-colors hover:text-blue-500"
        : "text-white transition-colors hover:text-blue-300";
    const menuButtonClass = isLight
        ? "rounded-md p-2 text-slate-900 transition hover:bg-slate-100"
        : "rounded-md p-2 text-white transition hover:bg-white/10";
    const logoClass = isLight
        ? "cursor-pointer brightness-0"
        : "cursor-pointer";

    return(
        <Fragment>
            <nav className={
                isLight
                    ? "absolute left-0 top-0 z-40 w-full text-slate-900"
                    : "absolute left-0 top-0 z-40 w-full text-white"
            }>
                <div className="py-4">
                    <div className="container mx-auto">

                        {/* List Wrapper */}
                        <div className="flex flex-nowrap items-center justify-between">

                            {/* Logo */}
                            <Link href={"/"} >
                                <Image src={props.logo} height={60} width={80} alt={"logo"} className={logoClass}/>
                            </Link>

                            {/* List */}
                            <div className="hidden lg:flex items-center gap-x-6">
                                {navItems.map((item) => {
                                    // If an item has children, render it as a dropdown. Otherwise render a normal link.
                                    const hasChildren = Boolean(item.children?.length);

                                    if (!hasChildren) {
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={`text-sm font-medium ${navTextClass}`}
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <div key={item.name} className="group relative">
                                            <Link
                                                href={item.href}
                                                className={`inline-flex items-center gap-x-1 text-sm font-medium outline-none ${navTextClass}`}
                                            >
                                                {item.name}
                                                <ChevronDownIcon
                                                    // Rotates the arrow when the user hovers or tabs into the dropdown.
                                                    className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                                                    aria-hidden="true"
                                                />
                                            </Link>

                                            {/* Dropdown panel. Tailwind group classes show it on hover/focus. */}
                                            <div className="invisible absolute left-1/2 top-full z-50 w-screen max-w-2xl -translate-x-1/2 translate-y-1 pt-5 opacity-0 transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                                <div className="overflow-hidden rounded-lg bg-white text-slate-950 shadow-xl ring-1 ring-slate-900/10">
                                                    <div className={
                                                        // Wider dropdowns use two columns so the links do not feel cramped.
                                                        item.children.length > 2
                                                            ? "grid grid-cols-2 gap-x-6 p-6"
                                                            : "grid grid-cols-1 gap-y-2 p-6"
                                                    }>
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                className="group/item relative rounded-lg p-4 transition hover:bg-slate-50"
                                                            >
                                                                <div className="flex gap-x-4">
                                                                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-50 text-blue-500 ring-1 ring-slate-900/10 transition group-hover/item:bg-blue-500 group-hover/item:text-white">
                                                                        <child.icon className="h-5 w-5" aria-hidden="true" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-sm font-semibold text-slate-950">
                                                                            {child.name}
                                                                        </p>
                                                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                                                            {child.description}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    {/* Bottom actions inside every dropdown. */}
                                                    <div className="grid grid-cols-2 divide-x divide-slate-900/5 bg-slate-50">
                                                        <Link
                                                            href={item.href}
                                                            className="flex items-center justify-center gap-x-2.5 p-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                                                        >
                                                            View {item.name.toLowerCase()}
                                                        </Link>
                                                        <Link
                                                            href="/contact"
                                                            className="flex items-center justify-center gap-x-2.5 p-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                                                        >
                                                            Start a project
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Contact Us */}
                            <div className="hidden lg:grid">
                                {/* <div className='hover:text-yellow-600 transition-colors delay-100'>
                                    <a href={"tel: " + [props.phoneNumber]}>
                                        <div className='flex flex-col items-center'>
                                            <p>{navbar.call.title}</p>
                                            <p>{props.phoneNumber}</p>
                                        </div>
                                        
                                    </a>
                                </div> */}
                                    
                            </div>

                            {/* Off-canvas Menu */}
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    onClick={() => setOffcanvas(true)}
                                    id="toggle-button"
                                    className={menuButtonClass}
                                    aria-label="Open navigation menu"
                                >
                                    <Bars3Icon className="h-6 w-6" />
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>

            <SideNav 
                items={navItems}
                showOffcanvas={() => setOffcanvas(false)} 
                offcanvas={offcanvas} 
                logo={props.logo}
            />

        </Fragment>
    )
}

export default Navbar
