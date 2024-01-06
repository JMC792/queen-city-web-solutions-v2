import Image from "next/image";
import {Fragment} from "react";

export default function Stat2(props){
    return(
        <Fragment>
            <section className="bg-neutral-900 text-neutral-200" id="stats">
                <div className="container py-32">
                    <div className="flex justify-center">
                        <div className='text-center grid gap-y-8 lg:grid-cols-3 lg:gap-x-[5rem]'>
                            {props.service.map((service, index) => (
                                <div className="grid grid-cols-2 " key={index}>
                                    <div className="flex items-center justify-center">
                                        <Image src={service[3]} alt={service[4]} />
                                    </div>
                                    <div className="flex flex-col items-center justify-center ">
                                        <div className="font-bold">{service[0]}</div>
                                        <div className="text-md">{service[1]}</div>
                                        <div className="text-md">{service[2]}</div>
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
