import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";


export default function sbsLeft(props){


    return (
        <Fragment>
            {/* About */}
            <div className="container py-20" id="about">
                <div className="grid lg:grid-cols-2">

                    {/* ----------- Image ----------- */}
                    <div className="xl:pl-[10rem]">
                        <Image src={props.image} 
                        alt="2 people" 
                        width={800}
                        height={800}
                        className="rounded-xl" 
                        decoding="async"/>
                    </div>

                    {/* Text */}
                    <div className="lg:p-10 xl:p-20 tracking-tight"> {/* Padding */}
                        
                        {/* Subheading */}
                        <div className="text-orange-500">
                            <div className="text-lg font-medium">{props.heading}</div>
                        </div>
                        
                        {/* Text and button */}
                        <div className="pt-2">
                            <div className="grid gap-y-8">
                                
                                {/* Title */}
                                <div className="text-[3rem]">
                                    <div className="font-bold leading-tight">{props.title}</div>
                                </div>
                                
                                {/* Paragraph */}
                                <div className="text-md text-neutral-800">{props.paragraph}</div>
                                
                                {/* Button */}
                                <div className="">
                                    <Link href= {props.buttonLink}>
                                        <button className="border rounded-lg p-4 bg-orange-800 text-white">{props.button}</button>
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
