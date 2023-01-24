import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Script from "next/script";
import home from "../content/page/home.json";
import SectionHomeAbout from "../components/SectionHomeAbout";
import SectionHomeTravel from "../components/SectionHomeTravel";
import { renderContent } from "lib/renderContent";
import { getAllJson } from "lib/getContent";
import React from "react";
import CurrentEvents from "components/CurrentEvents";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import SectionHomeContent from "components/SectionHomeContent";

function Page({ pageData, seminars }) {
  const page = pageData;

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <SectionFlowerBackground>
        <div className="py-1">
          <h2 className="mx-auto text-lg tracking-wide text-center uppercase">
            {page.events.title}
          </h2>
          <div className="grid gap-5 mt-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4">
            {seminars
              .filter((i) => i.showOnHome)
              .map((seminar) => (
                <div className="" key={seminar.title}>
                  <CurrentEvents
                    seminar={seminar}
                    button={page.events.button}
                  />
                </div>
              ))}
          </div>
        </div>
      </SectionFlowerBackground>
      <SectionHomeContent offeroverview={page.offeroverview} />
      <SectionHomeAbout about={page.about} />
      <SectionHomeTravel travel={page.travel} />
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(home);
  const seminars1 = await renderContent(getAllJson("seminar"));
  const seminars2 = seminars1.sort((a, b) => a.order - b.order);

  return {
    props: { pageData, seminars: seminars2 },
  };
}

export default Page;
