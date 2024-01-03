import Link from "next/link";
import {Fragment} from "react";

export default function Hero({title,subtitle,button}) {

    return(
        <Fragment>

            {/* Hero Background */}
            <div className="h-screen bg-back-2 bg-cover" id="header">
                {/* Hero Container */}
                <div className="container justify-centerß">
                    {/* Horizontal Margin and Padding */}
                    <div className="pt-[13rem] md:pt-[15rem] lg:pt-[16rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="px-20">


                            <div className="text-center text-neutral-100">
                                {/* Text Wrapper */}
                                <div className="space-y-10">
                                    
                                    {/* Hero Title */}
                                    <div className="animate-slide-from-opacity">
                                        <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                            <div className="font-bold leading-tight">
                                                {title}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Hero Subtitle */}
                                    <div className="animate-slide-from-opacity-2">
                                        <div className="text-lg">
                                            {subtitle}
                                        </div>
                                    </div>
                                    
                                    {/* Hero Button */}
                                    <div className="animate-slide-from-opacity-3">
                                        <Link href="/contact" >
                                            <button type="button" className="bg-orange-800 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 mt-4 w-[14rem] uppercase">
                                                {button}
                                            </button>
                                        </Link>
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
