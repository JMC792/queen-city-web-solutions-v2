import { Fragment } from "react";

export default function Trademark(props){

    return(
        <Fragment>
            <span className="flex justify-center text-sm text-neutral-200 sm:text-center dark:text-gray-400 py-4">
                <div>© {props.year}</div>
                <a href="https://queencitywebsolutions.com" className="hover:underline px-2">
                    {props.company}
                </a>
                <div>{props.rights}</div>
            </span>
        </Fragment>
    )
}