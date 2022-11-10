import Layout from "../components/Layout";
import Seo from "../components/Seo";
import heal from "../content/page/heal.json";
import SectionStart from "../components/SectionStart";
import { renderContent } from "lib/renderContent";
import ImageRounded from "components/ImageRounded";
import Heading from "components/Heading";
import Prose from "components/Prose";
import Link from "next/link";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <SectionStart start={page.heal}>
        <div className="mt-20 space-y-20">
          {page.heal.items.map((i) => (
            <div
              key={i.title}
              id={i.slug}
              className="grid grid-cols-12 gap-x-8 gap-y-4 scroll-mt-10"
            >
              <div className="col-span-8 sm:col-span-6 md:col-span-4">
                <ImageRounded image={i.image} alt={i.title} />
              </div>
              <div className="col-span-12 md:col-span-8">
                <Heading element="h2" size="h3">
                  {i.title}
                </Heading>
                <div className="mt-6">
                  <Prose html={i.markdown.html} />
                </div>
                <div className="mt-4">
                  <Link href={i.cta.url}>
                    <a>{i.cta.text}</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionStart>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(heal);

  return {
    props: { pageData },
  };
}

export default Page;
