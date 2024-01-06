import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Overview(props) {
  return (
    <Fragment>
        <div className="basis-1/4 grid gap-y-8">
            
            {/* Overview Title */}
            <div className="text-[1.5rem] text-neutral-200 hover:text-yellow-600 transition-colors delay-50 cursor-pointer">
                <Link href="/">
                    <Image src={props.image} width={200} alt={"logo"} className={"cursor-pointer"}/>
                </Link>
            </div>

            {/* Overview Paragraph*/}
            <div className="text-white">
                {props.description}
            </div>
            
        </div>
    </Fragment>
  );
}
