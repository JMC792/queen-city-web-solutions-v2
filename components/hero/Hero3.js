import {Fragment} from "react";
import Link from "next/link";

export default function Hero3({heroSubtitle, slug}) {

    return(
        <Fragment>

            {/* Hero Background */}
            <div className="h-1/5 bg-neutral-700 bg-cover" id="header">
                {/* Hero Container */}
                <div className="container flex justify-center lg:justify-start">
                    {/* Horizontal Margin and Padding */}
                    <div className="py-[8rem] md:pt-[15rem] lg:pt-[10rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="lg:px-16">
                            <div className="text-center text-neutral-100 ">
                                {/* Text Wrapper */}
                                <div className="space-y-5">
                                    
                                    {/* Hero Title */}
                                    <div className="lg:px-12">
                                        <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                            <div className="font-bold leading-tight capitalize">
                                                Blog Post
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Hero Subtitle */}
                                    <div className="lg:px-24">
                                        <div className="text-lg">
                                            <Link href="/">
                                                <span className="font-bold cursor-pointer hover:text-teal-700 delay-100 duration-200 capitalize">
                                                    Home
                                                </span>
                                            </Link>
                                            <span className="font-bold">
                                                &nbsp;/&nbsp;
                                            </span>
                                            <Link href="/blog">
                                                <span className="font-bold cursor-pointer hover:text-teal-700 delay-100 duration-200 capitalize">
                                                    Blog
                                                </span>
                                            </Link>

                                            <span className="font-bold">
                                                &nbsp;/&nbsp;
                                            </span>
                                            <Link href={slug}>
                                                <span className="font-bold cursor-pointer capitalize hover:text-teal-700 delay-100 duration-200">
                                                    {slug}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}