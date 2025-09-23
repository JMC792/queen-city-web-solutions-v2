import Link from "next/link";
import {Fragment} from "react";
import Image from "next/image";
import Navbar from "@components/headers/Navbar.js";
import layout from "public/locales/english/layout.json";
import logo from "public/icons/logo.svg"
import { XMarkIcon } from '@heroicons/react/20/solid'  


export default function Hero({title,subtitle,button}) {

    const text = {
        title: "Building Brands, One Pixel at a Time",
        subtitle: "We're dedicated to shaping digital landscapes with awe-inspiring web design and development. Our mission is to bring your brand's story to life through visually captivating and functionally flawless websites.",
        button1: "Get started",
        button2: "Learn more"
    }

    return(
        <Fragment>
            
            {/* Hero Background */}
            <div className="bg-gray-900" id="header">
                {/* Hero Container */}
                <div className="relative isolate overflow-hidden h-screen">
                    
                    <Image
                        src={'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&&exp=-35&q=100&w=2070&auto=format&fit=crop'}
                        alt="Background"
                        fill
                        priority={true}
                        quality={90}
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    
                    {/* Announcement Bar */}
                    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                        <div
                            aria-hidden="true"
                            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        >
                            <div
                            style={{
                                clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                            />
                        </div>
                        <div
                            aria-hidden="true"
                            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        >
                            <div
                            style={{
                                clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                            />
                        </div>

                        {/* Text and button */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <p className="text-sm/6 text-gray-900">
                                {/* <strong className="font-semibold">GeneriCon 2023</strong> */}
                                {/* <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                                    <circle r={1} cx={1} cy={1} />
                                </svg> */}
                                Rated 5★ by employers & candidates alike
                            </p>
                            <a
                            href="/contact"
                            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                            >
                            Get Started <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        
                        {/* close button */}
                        <div className="flex flex-1 justify-end">
                            <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
                            </button>
                        </div>
                    </div>

                    {/* Navbar */}
                    <header className="relative">
                        <Navbar
                        link2 = {layout.sitemap.about} //About
                        link3 = {layout.sitemap.link3} //Portfolio
                        link4 = {layout.sitemap.contact} //Contact
                        link5 = {layout.sitemap.service} //Service
                        link6 = {layout.sitemap.blog} //Blog
                        phoneNumber = {layout.number}
                        logo = {logo}
                        />
                    </header>
                    
                    {/* Horizontal Margin and Padding */}
                    <div className="pt-[13rem] md:pt-[15rem] lg:pt-[16rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="mx-auto max-w-2xl animate-slide-from-opacity">

                            {/* Announcement */}
                            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Announcing our next round of funding.{' '}
                                    <a href="#" className="font-semibold text-blue-400">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div> */}

                            {/* Text */}
                            <div className="text-center">
                                
                                {/* Paragraph */}
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                    {text.title}
                                </h1>

                                {/* Subtitle */}
                                <h2 className="mt-6 text-lg leading-8 text-gray-300">
                                    {text.subtitle}
                                </h2>

                                {/* Buttons */}
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link href="/contact" className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Get started
                                    </Link>

                                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-300">
                                        Learn more <span aria-hidden="true">→</span>
                                    </Link>
                                </div>

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
