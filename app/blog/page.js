import Hero2 from "@components/hero/Hero2.js";
import { Fragment } from "react";
import blog from "/public/locales/english/blog.json"
import List from "../../components/blog/List1";
import about4 from "public/images/portfolio/portfolio1.webp"
import blogData from "public/data/articles.json"

export const metadata = {
    title: [blog.metadata.title],
    description: [blog.metadata.description],
}

export default function Page(){
    
    return(
        <Fragment>
            <Hero2
                heroTitle={blog.hero.title}
                heroSubtitle={blog.hero.subtitle}
                background={"bg-back-about"}
            />
            <List
                image={about4}
                blogData={blogData}
            />
        </Fragment>
    )
}