import Link from "next/link";
import {Fragment} from "react";

export default function Hero2(props) {

    return(
        <Fragment>

            {/* Hero Background */}
            <div className={"h-1/5 bg-cover bg-center " + props.background} id="header">
                {/* Hero Container */}
                <div className="container flex justify-center">
                    {/* Horizontal Margin and Padding */}
                    <div className="py-[8rem] md:pt-[15rem] lg:pt-[10rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="lg:px-[10rem] 2xl:px-[12rem]">


                            <div className="text-center text-neutral-100">
                                {/* Text Wrapper */}
                                <div className="space-y-5">
                                    
                                    {/* Hero Title */}
                                    <div className="lg:px-12">
                                        <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                            <h1 className="font-bold leading-tight capitalize">
                                                {props.heroTitle}
                                            </h1>
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Hero Subtitle */}
                                    <div className="lg:px-24">
                                        <div className="text-lg">
                                            <Link href="/">
                                                <span className="font-bold cursor-pointer hover:text-teal-700 delay-100 duration-200">
                                                    Home
                                                </span>
                                            </Link>
                                            <span className="font-bold">
                                                &nbsp;/&nbsp;
                                            </span>
                                            <Link href={props.heroSubtitle}>
                                                <span className="font-bold cursor-pointer capitalize hover:text-teal-700 delay-100 duration-200">
                                                    {props.heroSubtitle}
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