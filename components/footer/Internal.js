import { Fragment } from "react";
import Link from "next/link";

export default function Internal(props) {
  return (
    <Fragment>
        <div className="flex flex-col items-center gap-y-8 lg:pt-20">
            {/* Links Title */}
            <div className="text-[1.5rem] font-bold text-center">
                SiteMap
            </div>

            <div className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href={"/"} className="capitalize">
                        {props.links[0]}
                    </Link>
                </div>

            {/* Links */}
            {props.links.slice(1).map((link, index) => (
                <div key={index} className="hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                    <Link href={link} className="capitalize">{link}</Link>
                </div>
            ))}
        </div>
            
    </Fragment>
  );
}
