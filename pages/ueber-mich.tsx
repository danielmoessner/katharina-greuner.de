import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import about from "../content/page/about.json";
import SectionAboutStart from "../components/SectionAboutStart";
import SectionAboutKeywords from "../components/SectionAboutKeywords";
import SectionAboutCareer from "../components/SectionAboutCareer";
import SectionAboutBlocks from "../components/SectionAboutBlocks";

function Page() {
  const page = about;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header image="/img/kala_home_ausschnitt.jpeg" />
      <SectionAboutStart start={page.about} />
      <SectionAboutKeywords keywords={page.keywords} />
      <SectionAboutCareer career={page.career} />
      <SectionAboutBlocks blocks={page.blocks} />
    </Layout>
  );
}

export default Page;
