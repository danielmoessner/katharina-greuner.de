import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import about from "../content/page/about.json";
import SectionAboutStart from "../components/SectionAboutStart";
import SectionAboutKeywords from "../components/SectionAboutKeywords";
import SectionAboutCareer from "../components/SectionAboutCareer";
import SectionAboutBlocks from "../components/SectionAboutBlocks";
import { renderContent } from "lib/renderContent";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <SectionAboutStart start={page.about} />
      <SectionAboutKeywords keywords={page.keywords} />
      <SectionAboutCareer career={page.career} />
      <SectionAboutBlocks blocks={page.blocks} />
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(about);

  return {
    props: { pageData },
  };
}

export default Page;
