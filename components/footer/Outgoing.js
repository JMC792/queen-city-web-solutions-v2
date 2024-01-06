import { Fragment } from "react";

export default function Outgoing(props) {
    return (
    <Fragment>
        <div className="flex flex-col items-center gap-y-8 lg:pt-20">
            {/* Social Media Title */}
            <div className="text-[1.5rem] font-bold">{props.title}</div>

            {/* Links */}
            {props.links.map((link, index) => (
                <div key={index} className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <a href={link[1]}>{link[0]}</a>
                </div>
            ))}

        </div>
        
    </Fragment>
    );
}
