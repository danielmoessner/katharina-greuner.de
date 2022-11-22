import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Script from "next/script";
import home from "../content/page/home.json";
import SectionHomeAbout from "../components/SectionHomeAbout";
import SectionHomeTravel from "../components/SectionHomeTravel";
import Container from "components/Container";
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
        <h2 className="flex p-2 text-3xl place-content-center ">
          Aktuelle Reisen
        </h2>
        <section className="flex flex-col pb-4">
          <Container layout="sm">
            <div className="flex flex-row gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {seminars
                .filter((i) => i.showOnHome)
                .map((seminar) => (
                  <React.Fragment key={seminar.title}>
                    <div className="">
                      <CurrentEvents
                        seminar={seminar}
                        button={seminar.button}
                      />
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </Container>
        </section>
      </SectionFlowerBackground>
      <SectionHomeContent offeroverview={page.offeroverview} />
      <SectionHomeAbout about={page.about} />
      <SectionHomeTravel travel={page.travel} />
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(home);
  const seminars = await renderContent(getAllJson("seminar"));
  return {
    props: { pageData, seminars },
  };
}

export default Page;
