import { Fragment } from "react";
import Image from "next/image";

export default function Contact(props) {
    return (
    <Fragment>
        <div className="flex flex-col items-center gap-y-8 lg:pt-20">
            {/* Social Media Title */}
            <div className="text-[1.5rem] font-bold">{props.title}</div>

            {/* Links */}
            {props.links.map((link, index) => (
                <div key={index} className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <a href={link[1]}>
                        <div className="flex gap-x-2">
                            <div>
                                <Image src={link[2]}  alt={link[3]}/>
                            </div>
                            <div>
                                {link[0]}
                            </div>
                        </div>
                    </a>
                </div>
            ))}

        </div>
        
    </Fragment>
    );
}
