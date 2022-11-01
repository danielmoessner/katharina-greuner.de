import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import nepal from "../content/page/nepal.json";
import { renderContent } from "lib/renderContent";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import SectionStart from "components/SectionStart";
import ContentImageText from "components/ContentImageText";
import ContentTextCtaImage from "components/ContentTextCtaImage";
import Prose from "components/Prose";
import SectionContent from "components/SectionContent";
import ContentMarkdown from "components/ContentMarkdown";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <SectionStart start={page.start}>
        <ContentImageText text={undefined} image={undefined} alt={undefined} />
        <ContentTextCtaImage
          text={undefined}
          image={undefined}
          alt={undefined}
          cta={undefined}
        />
      </SectionStart>

      <SectionFlowerBackground>
        <ContentMarkdown html={undefined} />
      </SectionFlowerBackground>

      <SectionContent>
        <ContentImageText text={undefined} image={undefined} alt={undefined} />
      </SectionContent>
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
