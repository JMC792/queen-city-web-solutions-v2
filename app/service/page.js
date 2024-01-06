import {Fragment} from "react";
//Components
import Hero2 from "@components/hero/Hero2.js";
import Service1 from "@components/side-by-side/SBSNoButton.js";
import Services from "@components/features/Services";
import Centered2x2 from "@components/features/Centered2x2.js";
import OffsetList from "@components/features/OffsetList.js";

//Locales
import service from "public/locales/english/services.json";
import language from "public/locales/english/homepage.json";
//images
import image1 from "public/icons/Homepage/svg1.svg";
import image2 from "public/icons/Homepage/svg2.svg";


export const metadata = {
  title: 'Service',
  description: '...',
}


export default function Page() {
  return (
        <Fragment>
            <Hero2 
              heroTitle={service.hero.title} 
              heroSubtitle={service.hero.subtitle}
              background={"bg-back-about"}
            />
            <OffsetList
              heading={service.section1.heading}
              title={service.section1.title}
              paragraph={service.section1.paragraph}
            />
        </Fragment>
  );
}
