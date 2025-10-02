import { Fragment } from "react"

//Components
import Hero from "@components/hero/Hero5";

//Locales
import language from "/public/locales/english/homepage.json";

export default function Page() {
    return ( 
        <Fragment>
            <Hero />
        </Fragment>
    )
}