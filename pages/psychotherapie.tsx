import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import { renderContent } from "lib/renderContent";
import { therapie } from "../content/page/therapie.json";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import SectionStart from "components/SectionStart";
import ContentImageText from "components/ContentImageText";
import SectionContent from "components/SectionContent";
import ContentMarkdownImage from "components/ContentMarkdownImage";
import ContentMarkdown from "components/ContentMarkdown";
import Link from "next/link";
import Heading from "components/Heading";
import Button from "components/Button";
import ImageBorder from "components/ImageBorder";
import Image from "next/image";
import psychotherapie from "cms/page/psychotherapie";
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
            <ContentMarkdownImage
              html={page.start.markdown.html}
              image={page.start.image}
              alt={page.start.text}
            />
          </div>

          <div className="grid items-center text-left ">
            <ContentMarkdown html={page.start.markdown2.html} />
          </div>
        </div>
      </SectionStart>

      <SectionContent>
        <div className="grid grid-cols-2 place-content-center gap-x-12 gap-y-4">
          <div className="justify-center">
            <ContentImageMarkdown
              html={page.procedures.markdown}
              image={page.procedures.image}
              alt={page.procedures.text}
            />
          </div>
          <div className="flex self-stretch mt-6 ">
            <Button href={page.cta.url}>{page.cta.text}</Button>
          </div>
        </div>
      </SectionContent>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(psychotherapie);

  return {
    props: { pageData },
  };
}

export default Page;
