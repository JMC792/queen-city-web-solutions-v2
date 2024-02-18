import {Fragment} from "react";

//Components
import Hero2 from "@components/hero/Hero2.js";
import OffsetList from "@components/features/OffsetList.js";

//Locales
import service from "public/locales/english/services.json";

//images



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
