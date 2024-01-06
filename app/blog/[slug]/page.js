import { Fragment } from "react";
import Hero3 from "../../../components/hero/Hero3.js";
import blog from "/public/locales/english/blog.json"
import Article from "../../../components/content/Article.js";
import about4 from "public/images/portfolio/portfolio1.webp"
import { getBlogBySlug } from "lib/api";

export const metadata = {
    title: [blog.metadata.title],
    description: [blog.metadata.description],
}

export default function Page({params}){

    const blogPost = getBlogBySlug({params});

    if (!blogPost) {
    return <div>Blog post not found</div>;
    }

    return(
        <Fragment>
            <Hero3
                heroTitle={blog.post.hero.title}
                slug= {params.slug}
                heroSubtitle={blog.post.hero.subtitle}
            />
            <Article 
                blogData={blogPost}
                image={about4}
            />
        </Fragment>
    )
}