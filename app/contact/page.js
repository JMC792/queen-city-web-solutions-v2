import { Fragment } from "react";

//Components
import Contact3 from "@components/contact/Form1.js";
import Hero2 from "@components/hero/Hero2.js";
import Stat from "@components/stats/Stat2.js";
import Form3 from "@components/forms/Form3.js";
import Form1 from "@components/contact/Form1.js";

//Locales
import layout from "public/locales/english/layout.json";
import contact from "public/locales/english/contact.json";

//SVG
import phone from "public/icons/phone2.svg"
import customer from "public/icons/customer.svg"
import tick from "public/icons/tick.svg"


// Images
import image1 from "public/images/homepage/sbs2.1.webp";

export const metadata = {
  title: "Contact Us",
  description: [contact.metadata.description],
}


export default async function Page() {

  return (
    <Fragment>
      <Hero2 
        heroTitle={contact.hero.title} 
        heroSubtitle={contact.hero.subtitle}
        background={"bg-back-about"}
      />
      <Form3
        title = {contact.form.title}
        paragraph = {contact.form.paragraph}
        phone = {layout.number}
        email = {layout.email}
        image = {image1}
      />
      {/* <Stat
          service = {[
              // Phone Number
              [
                contact.stat.one.title,
                contact.stat.one.phone1,
                contact.stat.one.phone2,
                phone,
                contact.stat.one.alt
              ],
              // Address
              [
                contact.stat.two.title,
                contact.stat.two.address1,
                contact.stat.two.address2,
                customer,
                contact.stat.two.alt
              ],
              //Open Hours
              [
                contact.stat.three.title,
                contact.stat.three.date,
                contact.stat.three.time,
                tick,
                contact.stat.three.alt
              ],
          ]}
      /> */}
    </Fragment>
  );
}
