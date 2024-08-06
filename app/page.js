import {Fragment} from "react";
//Components
import Hero from "@components/hero/Hero";
import SimpleCentered from "@components/testimonials/SimpleCentered";
//Components
import OffsetList from "@components/features/OffsetList.js";
import Form3 from "@components/forms/Form3.js";
import Stat from "@components/stats/Stat.js";
import CTA from "@components/CTA/CTA1.js";
import FAQ1 from "@components/FAQ/FAQ1.js";

//Locales
import layout from "public/locales/english/layout.json";
import contact from "public/locales/english/contact.json";

//Locales
import service from "public/locales/english/services.json";

//Locales/Data
import language from "/public/locales/english/homepage.json";

// Icons

// Images
import image4 from "/public/images/homepage/photo1.jpeg";
import ProductScreenshot from "@components/features/ProductScreenshot";

export default function Page() {
  return (
        <Fragment>
            <Hero 
              subtitle={language.index.hero.subtitle} 
              title={language.index.hero.title} 
              button={language.index.hero.button.title} 
              buttonLink={language.index.hero.button.link} 
            />
            <Stat/>
            <OffsetList
              heading={service.section1.heading}
              title={service.section1.title}
              paragraph={service.section1.paragraph}
            />

            {/* About Us */}
            <ProductScreenshot
              heading={language.index.about.heading} 
              title={language.index.about.title} 
              paragraph={language.index.about.paragraph.one}
              image={image4}
            />

            {/* Testimonial */}
            <SimpleCentered
              name={language.index.testimonials.name}
              paragraph={language.index.testimonials.paragraph}
              position={language.index.testimonials.position}
            />
            <CTA/>
            <FAQ1/>
        </Fragment>
  );
}
