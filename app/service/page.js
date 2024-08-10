import {Fragment} from "react";

//Components
import Hero2 from "@components/hero/Hero2.js";
import Header from "@components/headers/Header1.js";
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
            <Header
              image = {"https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"}
              title = {"Our Services"}
              text = {"Optimize your IT with Queen City IT Solutions. From managed services to cybersecurity and cloud integration, we’ve got you covered. Explore our offerings and see how we can boost your efficiency and security. Contact us today to get started"}
            />
            <OffsetList
              heading={service.section1.heading}
              title={service.section1.title}
              paragraph={service.section1.paragraph}
            />
        </Fragment>
  );
}
