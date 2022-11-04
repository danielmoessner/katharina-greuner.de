import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import nepal from "../content/page/nepal.json";
import { renderContent } from "lib/renderContent";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import SectionStart from "components/SectionStart";
import ContentImageText from "components/ContentImageText";
import SectionContent from "components/SectionContent";
import ContentMarkdownImage from "components/ContentMarkdownImage";
import ContentImageMarkdown from "components/ContentImageMarkdown";
import ContentMarkdown from "components/ContentMarkdown";
import Link from "next/link";
import Heading from "components/Heading";
import Button from "components/Button";
import ImageBorder from "components/ImageBorder";
import Multiline from "components/Multiline";
import Image from "next/image";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <SectionStart start={page.start}>
        <ContentImageText
          text={page.start.markdown.html}
          image={page.start.image}
          alt={page.start.text}
        />
        <ContentMarkdownImage
          html={page.start.markdown2.html}
          image={page.start.image2}
          alt={page.start.text}
        />
      </SectionStart>

      <SectionFlowerBackground>
        <Heading>{page.description.title}</Heading>
        <ContentMarkdown html={page.description.markdown.html} />
      </SectionFlowerBackground>

      <SectionContent>
        <Heading>{page.activities.title}</Heading>
        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          <div>
            {/* missing links */}
            <p>
              Wenn Du mehr über unser Projekt erfahren möchtest, findest Du
              Berichte und Jahresrückblicke in meinem Blog.
            </p>
            <div>
              {page.activities.links.map((item) => (
                <Link key={item.text} href={item.url}>
                  <a>{item.text}</a>
                </Link>
              ))}
            </div>
            {/* button content missing */}
            <Button href={page.activities.cta.url}>
              {page.activities.cta.text}
            </Button>
          </div>
          <div>
            <ImageBorder>
              <Image {...page.activities.image} alt={page.activities.alt} />
            </ImageBorder>
          </div>
        </div>
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
