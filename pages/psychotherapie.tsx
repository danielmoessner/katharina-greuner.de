import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import { renderContent } from "lib/renderContent";
import SectionStart from "components/SectionStart";
import ContentMarkdownImage from "components/ContentMarkdownImage";
import psychotherapie from "content/page/psychotherapie.json";
import ContentMarkdown from "components/ContentMarkdown";
import Button from "components/Button";
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

          <div className="">
            <ContentImageMarkdown
              html={page.procedures.markdown.html}
              image={page.procedures.image}
              alt={page.procedures.text}
            />
          </div>
          <div className="flex justify-center mt-6 ">
            <Button href={page.cta.href}>{page.cta.text}</Button>
          </div>
        </div>
      </SectionStart>
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
