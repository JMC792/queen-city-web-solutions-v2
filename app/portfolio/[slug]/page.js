import { Fragment } from "react";
import Hero3 from "./Hero3.js";
import slug from "public/locales/english/slug.json"
import Article from "./Article.js";
import about4 from "public/images/portfolio/portfolio1.jpg"
import { getBlogBySlug } from "lib/api";

const blogPost = getBlogBySlug({params});

export const metadata = {
    title: "Portfolio",
    description: '...',
}

export default function Page({params}){


    if (!blogPost) {
    return <div>Blog post not found</div>;
    }

    return(
        <Fragment>
            <Hero3
                heroTitle={slug.hero.title}
                heroSubtitl={slug.hero.subtitle}
            />
            <Article 
                blogData={blogPost}
                image={about4}
            />
        </Fragment>
    )
}