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
      <Header
        image = {"https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"}
        title = {"Get in Touch"}
        text = {"Ready to enhance your IT infrastructure? Reach out to Queen City IT Solutions today. Whether you have questions, need support, or want to schedule a consultation, our team is here to assist you. Contact us to get started on your path to seamless IT solutions."}
      />
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
