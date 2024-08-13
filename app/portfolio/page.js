import { Fragment } from "react";

//Components
import Hero from "@components/hero/Hero2.js";

// JSON Data
import portfolio from "/public/locales/english/portfolio.json"



export const metadata = {
    title: "Portfolio",
    description: [portfolio.metadata.description],
}

export default function Page(){
    return(
        <Fragment>
            <Hero
                heroTitle={portfolio.hero.title}
                heroSubtitle={portfolio.hero.subtitle}
                background={"bg-back-about"}
            />
            
        </Fragment>
    )
}