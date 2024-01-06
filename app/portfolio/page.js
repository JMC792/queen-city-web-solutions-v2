import Hero from "@components/hero/Hero2.js";
import { Fragment } from "react";
import List from "@components/blog/List1.js";

import portfolio from "/public/locales/english/portfolio.json"
import image2 from "public/images/portfolio/portfolio1.webp"
import data from "public/data/portfolio.json"
import image1 from "public/images/portfolio/portfolio2.webp"
import image3 from "public/images/portfolio/portfolio3.webp"
import image4 from "public/images/portfolio/portfolio4.webp"
import image5 from "public/images/portfolio/portfolio5.webp"
import image6 from "public/images/portfolio/portfolio6.webp"

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
            <List
                images={[image1,image2,image3,image4,image5,image6]}
                blogData={data}
            />
        </Fragment>
    )
}