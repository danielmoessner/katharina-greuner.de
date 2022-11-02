import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import nepal from "../content/page/nepal.json";
import { renderContent } from "lib/renderContent";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import SectionStart from "components/SectionStart";
import ContentImageText from "components/ContentImageText";
import ContentTextCtaImage from "components/ContentTextCtaImage";
import SectionContent from "components/SectionContent";
import ContentMarkdown from "components/ContentMarkdown";
import NavigationLink from "components/NavigationLink";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <SectionStart start={page.start}>
        {/* <ContentImageText
          text={page.start.markdown}
          image={page.start.image}
          alt={page.start.text}
        /> */}
        {/* <ContentTextCtaImage
          text={page.start.markdown2}
          image={page.start.image2}
          alt={page.start.text}
          cta={page.start.cta}
        /> */}
      </SectionStart>
      {/* 
      <SectionFlowerBackground>
        <ContentMarkdown html={page.description.markdown} />
      </SectionFlowerBackground>

      <SectionContent>
        <ContentImageText
          text={page.activities.text}
          image={page.activities.image}
          alt={page.activities.text}
        />
      </SectionContent> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(nepal);

  return {
    props: { pageData },
  };
}

export default Page;
