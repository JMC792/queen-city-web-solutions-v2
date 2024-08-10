import { Fragment } from "react";

//Components
import List from "@components/blog/List1.js";
import Hero from "@components/hero/Hero2.js";

// JSON Data
import data from "public/data/portfolio.json"
import portfolio from "/public/locales/english/portfolio.json"

// Images
import image2 from "public/images/portfolio/portfolio1.JPEG"
import image1 from "public/images/portfolio/portfolio2.JPEG"
import image3 from "public/images/portfolio/portfolio3.JPEG"
import image4 from "public/images/portfolio/portfolio4.JPEG"
import image5 from "public/images/portfolio/portfolio5.JPEG"
import image6 from "public/images/portfolio/portfolio6.JPEG"
import image7 from "public/images/portfolio/portfolio7.JPEG"
import image8 from "public/images/portfolio/portfolio8.JPEG"
import image9 from "public/images/portfolio/portfolio9.JPEG"
import image10 from "public/images/portfolio/portfolio10.JPEG"
import image11 from "public/images/portfolio/portfolio11.JPEG"
import image12 from "public/images/portfolio/portfolio12.JPEG"
import image13 from "public/images/portfolio/portfolio13.JPEG"
import image14 from "public/images/portfolio/portfolio14.JPEG"
import image15 from "public/images/portfolio/portfolio15.JPEG"
import image16 from "public/images/portfolio/portfolio16.JPEG"

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
            {/* <List
                images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16]}
                blogData={data}
            /> */}
        </Fragment>
    )
}