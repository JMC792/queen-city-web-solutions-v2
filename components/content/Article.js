import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Article(props){

    return(
        <Fragment>
            {/* About */}
            <div className="container py-20">
                <div className="grid">

                    <div className="flex flex-col items-center gap-y-4 py-10">
                        
                        {/* Subheading */}
                        <div className=" text-purple-700">
                            <div className="text-lg font-medium uppercase">
                                {props.blogData.type}
                            </div>
                        </div>

                        {/* Title */}
                        <div className="text-[3rem]">
                            <div className="font-bold leading-tight capitalize">
                                {props.blogData.name}
                            </div>
                        </div>

                        {/* Date & Author */}
                        <div className="flex justify-center gap-x-4 text-gray-500">
                            {/* Date */}
                            <div className="flex items-center gap-x-1">
                                <div className="">
                                    {props.blogData.date}
                                </div>
                            </div>

                            <p>
                                |
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-x-1">
                                <div>
                                    {props.blogData.author}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Image */}
                    <div className="flex justify-center">
                        <Image 
                            src={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                            alt="2 people" 
                            width={1000}
                            height={500} 
                            className="rounded-xl" 
                            decoding="async"
                        />
                    </div>

                    {/* Paragraphs Wrapper */}
                    <div className="container">
                        {/* Vertical Padding */}
                        <div className="py-10 tracking-tight">
                            {/* Horizontal Padding */}
                            <div className="lg:px-10">
                                {/* Layout */}
                                <div className="grid gap-y-8">
                                    {/* Paragraph */}
                                    {Object.keys(props.blogData.content).map((key) => {
                                        return (
                                            <div key={key} className="text-md text-neutral-800 indent-5">
                                                {props.blogData.content[key]}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center hover:scale-125 hover:duration-300">
                        <Link href="/blog" className="flex items-center">
                            <div className="text-purple-700">View All Posts</div>
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}