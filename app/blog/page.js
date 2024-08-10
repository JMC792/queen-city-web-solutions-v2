import Hero2 from "@components/hero/Hero2.js";
import { Fragment } from "react";
import blog from "/public/locales/english/blog.json"
import List from "../../components/blog/List1";
import about4 from "public/images/portfolio/portfolio1.webp"
import blogData from "public/data/articles.json"
import List2 from "@components/blog/List2";
import Header from "@components/headers/Header1";

export const metadata = {
    title: 'Blog',
    description: [blog.metadata.description],
}

export default function Page(){
    
    return(
        <Fragment>
            <Header
              image = {"https://images.unsplash.com/photo-1536246026435-0cbb2a92952a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"}
              title = {"Our Blog"}
              text = {"Stay informed with the latest in IT trends and insights. Our blog covers everything from cybersecurity tips to the newest tech innovations. Explore our articles and keep your business ahead of the curve. Visit our blog today to stay updated."}
            />
            <List2/>
            
        </Fragment>
    )
}