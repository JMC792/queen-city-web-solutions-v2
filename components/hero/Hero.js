import Link from "next/link";
import {Fragment} from "react";

export default function Hero({title,subtitle,button}) {

    return(
        <Fragment>

            {/* Hero Background */}
            <div className="h-screen bg-back-2 bg-cover" id="header">
                {/* Hero Container */}
                <div className="">
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
                                    {title}
                                </h1>

                                {/* Subtitle */}
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    {subtitle}
                                </p>

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
