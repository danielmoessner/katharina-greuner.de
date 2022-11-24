import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import nepal from "../content/page/nepal.json";
import { renderContent } from "lib/renderContent";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import SectionStart from "components/SectionStart";
import SectionContent from "components/SectionContent";
import ContentMarkdownImage from "components/ContentMarkdownImage";
import ContentMarkdown from "components/ContentMarkdown";
import Link from "next/link";
import Heading from "components/Heading";
import Button from "components/Button";
import ImageBorder from "components/ImageBorder";
import Image from "next/image";
import ContentImageMarkdown from "components/ContentImageMarkdown";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <SectionStart start={page.start}>
        <div className="grid gap-y-12">
          <div className="grid items-center gap-x-12 ">
            <ContentImageMarkdown
              html={page.start.markdown.html}
              image={page.start.image}
              alt={page.start.text}
            />
          </div>

          <div className="grid items-centergap-x-12 ">
            <ContentMarkdownImage
              html={page.start.markdown2.html}
              image={page.start.image2}
              alt={page.start.text}
            />
          </div>
        </div>
      </SectionStart>

      <SectionFlowerBackground>
        <div className="grid items-center my-8 gap-x-12 gap-y-8">
          <div className="grid justify-center ">
            <Heading>{page.description.title}</Heading>
          </div>
          <div className="grid items-center text-left ">
            <ContentMarkdown html={page.description.markdown.html} />
          </div>
        </div>
      </SectionFlowerBackground>

      <SectionContent>
        <div className="grid md:grid-cols-2 place-content-center gap-x-12 gap-y-4">
          <div>
            <Heading>
              <div className=""> {page.activities.title}</div>
            </Heading>
            <div className="justify-center">
              <p className="my-4 ">
                Wenn Du mehr über unser Projekt erfahren möchtest, findest Du
                Berichte und Jahresrückblicke in meinem Blog.
              </p>
              <div className="flex flex-col justify-center gap-y-1">
                {page.activities.links.map((item) => (
                  <Link key={item.text} href={item.href}>
                    <a>{item.text}</a>
                  </Link>
                ))}
                <div className="flex self-stretch mt-6 ">
                  <Button href={page.activities.cta.href}>
                    {page.activities.cta.text}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
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
