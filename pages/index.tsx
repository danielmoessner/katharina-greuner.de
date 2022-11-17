import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Script from "next/script";
import home from "../content/page/home.json";
import SectionHomeAbout from "../components/SectionHomeAbout";
import SectionHomeTravel from "../components/SectionHomeTravel";
import SectionHomeEvents from "../components/SectionHomeEvents";
import { renderContent } from "lib/renderContent";
import SectionContent from "components/SectionContent";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <SectionHomeEvents currentevents={page.currentevents} />
      <div>{page.offeroverview} </div>
      <SectionHomeAbout about={page.about} />
      <SectionHomeTravel travel={page.travel} />
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(home);

  return {
    props: { pageData },
  };
}

export default Page;
