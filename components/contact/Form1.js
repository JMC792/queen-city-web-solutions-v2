import React, {Fragment} from "react";
import Image from 'next/image'

export default function Contact2(props){

    return(
        <Fragment>
            {/* Giving */}
            <section className='' id="contact">
                <div className='container py-20'>
                    <div className='grid lg:grid-cols-2 gap-y-10'>

                        {/* Image */}
                        <div className="lg:order-2 relative">
                            <Image 
                                src={props.image}
                                alt="Brazilian Jiu-Jitsu Dogfight" 
                                className="rounded-xl"
                            />
                        </div>

                        {/* Text */}
                        <div className="lg:order-1">
                            <div className=" lg:px-28">
                            <div className="grid gap-y-4">
                                
                                {/* Title and Heading */}
                                <div className="text-neutral-900 flex flex-col items-center lg:items-start">
                                    <div className="text-2xl">{props.heading}</div>
                                    <div className="text-[2.5rem] font-bold">{props.title}</div>
                                </div>

                                {/* Form */}
                                    <form 
                                        className="p-8 bg-neutral-100 rounded-xl" 
                                        data-netlify="true" 
                                        method="POST" 
                                        name="contact" 
                                        netlify-honeypot="bot-field"
                                    >
                                        <div className="grid gap-y-4">

                                            <input type="hidden" name="form-name" value="contact" />

                                            <p class="hidden">
                                                <label>
                                                Dont fill this out if youre human: <input name="bot-field" />
                                                </label>
                                            </p>
                                            
                                            <p className="grid gap-y-2 ">
                                                <label name="name" className="block text-neutral-900 font-bold">Name</label>
                                                <input type="text" id="name" name="name" placeholder="Name" className=" text-neutral-900 rounded-lg p-2" required/>
                                            </p>
                                        
                                            <p className="grid gap-y-2">
                                                <label name="email" className="block text-neutral-900 font-bold">Email:</label>
                                                <input type="email" id="email" name="email" placeholder="Email"  className=" text-neutral-900 rounded-lg p-2" required/>
                                            </p>
                                            
                                            <p className="grid gap-y-2">
                                                <label name="phone" className="block text-neutral-900 font-bold">Phone:</label>
                                                <input type="tel" id="phone" name="phone" placeholder="Phone" className=" text-neutral-900 rounded-lg p-2" required/>
                                            </p>
                                            
                                            <p className="grid gap-y-2">
                                                <label name="message" className="block text-neutral-900 font-bold">Message:</label>
                                                <textarea id="message" name="message" rows="4" placeholder="Message" className=" text-neutral-900 rounded-lg p-2" required></textarea>
                                            </p>

                                            <p>
                                                <button type="submit" className="border rounded-lg bg-blue-700 py-4 px-12 text-white">Submit</button>
                                            </p>

                                        </div>
                                        
                                    </form>


                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
