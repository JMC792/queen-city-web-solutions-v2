import { Fragment } from "react";
//locales
import about from "public/locales/english/about.json";
import language from "public/locales/english/homepage.json";

// Components
import Hero2 from "../../components/hero/Hero4.js";
import ProductScreenshot from "@components/features/ProductScreenshot.js";
import CTA from "@components/CTA/CTA1.js";
import Header from "@components/headers/Header1.js";

//Images
import image4 from "/public/images/homepage/photo1.jpeg";

//SVG


export const metadata = {
  title:"About Us"
}

export default function Page() {

  return (
    <Fragment>
      <Header
        title={"About Us"}
        text={"At Queen City IT Solutions, we are committed to delivering high-quality IT services tailored to your business needs. Our team prides itself on offering reliable, efficient, and customized solutions. With a focus on precision and care, we handle every project with the expertise required to ensure your success. Trust us to be your dedicated IT partner, guiding you through every challenge with professionalism and attention to detail."}
        image={"https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"}
      />
      <ProductScreenshot
        heading={language.index.about.heading} 
        title={language.index.about.title} 
        paragraph={language.index.about.paragraph.one}
        image={image4}
      />
      <CTA/>
    </Fragment>
  );
}
