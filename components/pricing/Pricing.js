import { Fragment } from "react";
import Image from "next/image";
import check from "/public/icons/check.svg";
import Link from "next/link";

export default function Pricing() {

    return(
        <Fragment>
            <div id="Services">
                <div className="container py-20">

                    {/* Services Heading Wrapper */}
                    <div className="grid gap-y-10 pb-8 text-center">
                        {/* Header */}
                        <div className="text-xl font-medium text-purple-900 capitalize">Our Prices</div>
                        {/* Title */}
                        <div className="text-5xl text-teal-800 capitalize lg:px-44 xl:px-64">Empowering Businesses with Low Cost Pricing</div>
                        {/* Subtitle */}
                        <div className="text-md lg:px-44 xl:px-64">Our tailored web design and development services ensure top-notch performance, attracting more customers to your site and boosting your business revenue. Each line of code is meticulously crafted by hand, guaranteeing exceptional results for your online success</div>
                    </div>

                    {/* Services Cards List */}
                    <div className="container grid lg:grid-cols-3 gap-8 justify-center pt-10">
                        
                        {/* Services 1 */}
                        <div className="flex flex-col bg-neutral-100 p-10 items-center">

                            {/* Pricing Headding */}
                            <div className="flex flex-col text-center gap-y-6">
                                {/* Title */}
                                <div className="text-2xl text-yellow-900 font-bold">5 Basic Pages</div>
                                {/* Price */}
                                <div className="text-5xl text-teal-800 font-bold">$150</div>
                                {/* Per Month */}
                                <div className="text-md text-purple-900">Per Month</div>
                            </div>

                            {/* Services Text Wrapper */}
                            <div className="flex flex-col gap-y-6 text-center pt-8">
                                {/*Services Card Title*/}
                                <div className="text-xl text-yellow-900 font-bold">5 Basic Pages</div>
                                
                                {/* Services Menu List */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">Unlimited Edits</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">Propegated Hosting</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">24/7 Customer Service</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">Lifetime Updates</div>
                                    </div>
                                    
                                </div>
                            </div>

                            
                        </div>

                        {/* Services 2 */}
                        <div className="flex flex-col bg-neutral-100 p-10 items-center">

                            {/* Pricing Headding */}
                            <div className="flex flex-col text-center gap-y-6">
                                {/* Title */}
                                <div className="text-2xl text-yellow-900 font-bold">Content  Package</div>
                                {/* Price */}
                                <div className="text-5xl text-teal-800 font-bold">$300</div>
                                {/* Per Month */}
                                <div className="text-md text-purple-900">Per Month</div>
                            </div>

                            {/* Services Text Wrapper */}
                            <div className="flex flex-col gap-y-6 text-center pt-8">
                                {/*Services Card Title*/}
                                <div className="text-xl text-yellow-900 font-bold">Blogging Integration</div>
                                
                                {/* Services Menu List */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">1000+ Word Post</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">Written By an SEO Specialist</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">1 Post Per Month</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">$50 Per Extra Post</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services 3 */}
                        <div className="flex flex-col bg-neutral-100 p-10 items-center">

                            {/* Pricing Headding */}
                            <div className="flex flex-col text-center gap-y-6">
                                {/* Title */}
                                <div className="text-2xl text-yellow-900 font-bold">Viral Package</div>
                                {/* Price */}
                                <div className="text-5xl text-teal-800 font-bold">$150</div>
                                {/* Per Month */}
                                <div className="text-md text-purple-900">Per Month</div>
                            </div>

                            {/* Services Text Wrapper */}
                            <div className="flex flex-col gap-y-6 text-center pt-8">
                                {/*Services Card Title*/}
                                <div className="text-xl text-yellow-900 font-bold">Social Media Pacakge</div>                                
                                {/* Services Menu List */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">Unlimited Edits</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">Propegated Hosting</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">24/7 Customer Service</div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 justify-center">
                                        <Image src={check} alt="check" height={20}/>
                                        <div className="text-md">Lifetime Updates</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us Button */}
                    <div className="flex justify-center pt-10">
                        <button className="bg-purple-900 text-white text-md font-bold py-4 px-6">
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </button>
                    </div>
                    

                </div>
            </div>
        </Fragment>
    )
}