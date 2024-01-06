import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Post(props){
    
    const blog = props.blog

    return(
        <Fragment>
            <div key={props.key}>
                <Link href={`/blog/${blog.slug}`}>
                <div className="cursor-pointer">
                <Image src={props.image} alt="Ariane Macias" height={3000} className="rounded-xl hover:duration-300 hover:scale-105"/>
                    <div className="pt-4 grid gap-y-1 text-neutral-900">
                        <div className="text-md font-medium uppercase">{blog.type}</div>
                            <div className="text-xl font-bold capitalize">{blog.name}</div>
                                {/* <div className="">{blog.sentence}</div> */}
                                    <div className="">{blog.date}</div>
                    </div>
                </div>
            </Link>
            </div>
            
        </Fragment>
    )
}