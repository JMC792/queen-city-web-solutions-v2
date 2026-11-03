'use client'

import Link from "next/link";
import Image from "next/image";
import Navbar from "@components/headers/Navbar.js";
import logo from "public/icons/logo.svg"
import { motion } from "motion/react";

export default function Hero() {

    const text = {
        title: "Building Brands, One Pixel at a Time",
        subtitle: "We're dedicated to shaping digital landscapes with awe-inspiring web design and development. Our mission is to bring your brand's story to life through visually captivating and functionally flawless websites.",
        button1: "Get started",
        button2: "Learn more"
    }

    return(
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
                    
                    {/* Navbar */}
                    <header className="relative">
                        <Navbar logo={logo} />
                    </header>
                    
                    {/* Horizontal Margin and Padding */}
                    <div className="pt-[13rem] md:pt-[15rem] lg:pt-[16rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="mx-auto max-w-2xl">

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
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                    {text.title}
                                </motion.h1>

                                {/* Subtitle */}
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="mt-6 text-lg leading-8 text-gray-300">
                                    {text.subtitle}
                                </motion.h2>

                                {/* Buttons */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link href="/contact" className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Get started
                                    </Link>

                                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-300">
                                        Learn more <span aria-hidden="true">→</span>
                                    </Link>
                                </motion.div>

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}
