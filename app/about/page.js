import { Fragment } from "react";
//locales
import about from "public/locales/english/about.json";
import language from "public/locales/english/homepage.json";

// Components
import Hero2 from "../../components/hero/Hero4.js";
import ProductScreenshot from "@components/features/ProductScreenshot.js";
import CTA from "@components/CTA/CTA1.js";

//Images
import image4 from "/public/images/homepage/photo1.jpeg";

//SVG


export const metadata = {
  title:"About Us"
}

export default function Page() {

  return (
    <Fragment>
      <Hero2 
        heroTitle={about.hero.title} 
        heroSubtitle={about.hero.subtitle}  
        background={"bg-back-about"}
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
