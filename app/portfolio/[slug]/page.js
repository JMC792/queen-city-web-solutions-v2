import { Fragment } from "react";

// Locales
import slug from "public/locales/english/slug.json"

// Components
import Hero3 from "@components/hero/Hero3.js";
import Article from "@components/content/Article.js";

// Images
import about4 from "public/images/portfolio/portfolio1.webp"

//API
import { getBlogBySlug } from "lib/api";


export const metadata = {
    title: "Portfolio",
    description: '...',
}

export default function Page({params}){
    
    const blogPost = getBlogBySlug({params});

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