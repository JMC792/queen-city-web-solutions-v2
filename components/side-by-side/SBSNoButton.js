import {Fragment} from "react";
import Image from "next/image";

export default function SBSLeftNoButton(props){
    return(
        <Fragment>
            {/* Background*/}
            <section className='' id="sermon">
                {/* Container */}
                <div className='container py-20'>
                    {/* Layout */}
                    <div className="grid lg:grid-cols-2">
                        
                        {/* Image */}
                        <div className={props.order}>
                            <Image src={props.svg} alt="Watching laptop" className="rounded-xl"/>
                        </div>
                        
                        {/* Text */}
                        <div className="py-8 lg:p-12">
                            {/* Layout */}
                            <div className="grid gap-y-4">
                            
                                {/* Heading */}
                                <div className="text-lg text-orange-500 font-medium uppercase">
                                    {props.heading}
                                </div>

                                {/* Title */}
                                <div className="text-[2.5rem] font-bold leading-tight capitalize">
                                    {props.title}
                                </div>

                                {/* Text */}
                                <div className="text-md">
                                    {props.paragraph}
                                </div>

                            </div>
                        </div>

                        

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
