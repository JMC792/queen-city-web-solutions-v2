import { Fragment } from "react";

//Components
import Header from "@components/headers/Header1.js";
import Form3 from "@components/forms/Form3.js";
import FAQ from "@components/FAQ/FAQ1";

//Locales
import layout from "public/locales/english/layout.json";
import contact from "public/locales/english/contact.json";
import Header1 from "@components/headers/Header1";

export const metadata = {
  title: "Contact Us",
  description: [contact.metadata.description],
}


export default async function Page() {

  return (
    <Fragment>
      <Header/>
      <FAQ/>
      <Form3
        title = {contact.form.title}
        paragraph = {contact.form.paragraph}
        phone = {layout.number}
        email = {layout.email}
      />
    </Fragment>
  );
}
