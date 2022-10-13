import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import kala from "../content/page/kala.json";
import { renderContent } from "lib/renderContent";
import Heading from "components/Heading";
import Container from "components/Container";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import ContentImageText from "components/ContentImageText";
import ContentMarkdownImage from "components/ContentMarkdownImage";
import ContentMarkdown from "components/ContentMarkdown";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section className="py-16">
        <Container layout="sm">
          <div className="flex justify-center">
            <Heading element="h1" size="h1">
              {page.header}
              {page.description}
            </Heading>
          </div>
          <div className="mt-20">
            <SectionFlowerBackground>
              <ContentMarkdownImage
                html={page.content.text1}
                image={page.content.image1}
                alt={page.start.title}
              />
            </SectionFlowerBackground>
          </div>

          <div className="mt-20">
            <ContentImageText
              text={page.content.text2}
              image={page.content.image2}
              alt={page.content.title}
            />
          </div>

          <div className="mt-20">
            <ContentMarkdownImage
              html={page.content.text3}
              image={page.content.image3}
              alt={page.content.title}
            />
          </div>

          <div className="mt-20">
            <ContentMarkdown html={page.text4} />
          </div>

          <div className="mt-20">
            <ContentImageText
              text={page.content.text5}
              image={page.content.image4}
              alt={page.content.title}
            />
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(kala);

  return {
    props: { pageData },
  };
}

export default Page;
