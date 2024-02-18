import React, {Fragment} from "react";
import Image from 'next/image'

function Contact({
    heading,
    title,
    paragraph,
    button,
    buttonLink,
    image
}){

    return(
        <Fragment>
            {/* Giving */}
            <section className='bg-white' id="donation">
                <div className='container py-20'>
                    <div className='grid lg:grid-cols-2 gap-y-10'>

                        {/* Image */}
                        <div className="lg:order-2">
                            <Image src={image}  alt="Qr Code" className="rounded-xl"/>
                        </div>

                        {/* Text */}
                        <div className="lg:order-1">
                            <div className=" md:px-28 ">
                            <div className="grid gap-y-4">
                                
                                {/* Title and Heading */}
                                <div>
                                    <div className="text-2xl text-yellow-600 font-bold">{heading}</div>
                                    <div className="text-[2.5rem] font-bold">{title}</div>
                                </div>
                                
                                {/* Paragraph */}
                                <div className="grid gap-y-4">
                                    <div className="text-md">{paragraph}</div>
                                </div>

                                {/* Form */}
                                <div className="bg-gray-100">
                                        <form className="p-8" data-netlify="true" data-netlify-recaptcha="true">
                                            <div className="grid gap-y-4">

                                                <p className="hidden">
                                                    <label>
                                                        Hiidden Field: <input name="bot-field" />
                                                    </label>
                                                </p>

                                                <div className="grid gap-y-2">
                                                    <label htmlFor="name" className="block text-black font-bold">Name</label>
                                                    <input type="text" id="name" name="name" required/>
                                                </div>
                                            
                                                <div className="grid gap-y-2">
                                                    <label htmlFor="contact-email" className="block text-black font-bold">Email:</label>
                                                    <input type="email" id="contact-email" name="email" required/>
                                                </div>
                                                
                                                <div className="grid gap-y-2">
                                                    <label htmlFor="phone" className="block text-black font-bold">Phone:</label>
                                                    <input type="tel" id="phone" name="phone" required/>
                                                </div>
                                                
                                                <div className="grid gap-y-2">
                                                    <label htmlFor="message" className="block text-black font-bold">Message:</label>
                                                    <textarea id="message" name="message" rows="4" required></textarea>
                                                </div>

                                                <div className="">
                                                    <button type="submit" className="border rounded-lg bg-amber-900 p-4 text-white">{button}</button>
                                                </div>

                                                <div data-netlify-recaptcha="true"></div>

                                            </div>
                                            
                                        </form>
                                </div>

                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact
