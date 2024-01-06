import {Fragment} from "react";
import Image from "next/image";

export default function Services(props){   
    
    console.log(props.service)
    return(
        <Fragment>
            <section id="Services">
                <div className="container py-20">

                    {/* Header */}
                    <h4 className="pb-4">
                        <div className="text-xl font-medium text-orange-500 capitalize">{props.heading}</div>
                    </h4>

                    {/* Title Wrapper */}
                    <div className="grid gap-y-8 lg:grid-cols-2">
                        
                        {/* Title */}
                        <div className="">
                            <h1 className="text-5xl font-bold text-neutral-900 capitalize">{props.title}</h1>
                        </div>
                        
                        {/* Subtitle */}
                        <div className="lg:pl-10"> 
                            <h2 className="text-sm">{props.paragraph}</h2>
                        </div>

                    </div>

                    {/* Services Cards List */}
                    <div className="pt-10 lg:pt-32">
                        <div className="grid lg:grid-cols-4 justify-center lg:shadow-2xl divide-y lg:divide-x divide-slate-100">
                            
                            {props.service.map((service, index) => (
                                <div key={index} className="p-6">
                                    <div className="flex flex-col gap-y-2">
                                        
                                        {/* Service Image */}
                                        <Image src={service[0]} alt={service[1]} height={60} width={60} />
                                        
                                        <h3 className="text-xl text-yellow-900 font-bold">{service[1]}</h3>
                                        
                                        <p className="text-sm">{service[2]}</p>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
