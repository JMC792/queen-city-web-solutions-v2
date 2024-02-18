import React, {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";

export default function sbsRight(props){
    return(
        <Fragment>
            {/* Background*/}
            <section className='bg-gray-50' id="sermon">
                {/* Container */}
                <div className='container py-20'>
                    {/* Layout */}
                    <div className="grid lg:grid-cols-2">
                        
                        {/* Image */}
                        <div className="lg:order-2"><Image src={props.image} alt="Watching laptop" className="rounded-xl"/></div>
                        
                        {/* Text */}
                        <div className="py-8 lg:p-12">
                            {/* Layout */}
                            <div className="grid gap-y-4">
                            
                            {/* Heading */}
                            <div className="text-lg text-orange-500 font-medium">
                                {props.heading}
                            </div>

                            {/* Title */}
                            <div className="text-[2.5rem] font-bold leading-tight">
                                {props.title}
                            </div>

                            {/* Text */}
                            <div className="text-md">
                                {props.paragraph}
                            </div>

                            {/* Button */}
                            <div className="text-white">
                                <Link href= {props.buttonLink}>
                                    <button type="button" className="border rounded-lg bg-orange-800 p-4">{props.button}</button>
                                </Link>
                            </div>
                            
                            </div>
                        </div>

                        

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
