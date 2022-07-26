import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import kala from "../content/page/kala.json";
import SectionStart from "../components/SectionStart";
import ContentImageText from "../components/ContentImageText";
import ContentTextCtaImage from "../components/ContentTextCtaImage";
import { renderContent } from "lib/renderContent";
import SectionContent from "../components/SectionContent";
import ContentTitleCtaImage from "../components/ContentTitleCtaImage";
import SectionFlowerBackground from "../components/SectionFlowerBackground";
import Prose from "../components/Prose";
import KalaFlower from "components/KalaFlower";
import Link from "next/link";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <SectionStart start={page.start}>
        <div className="">
          <ContentImageText
            image={page.start.image}
            text={page.start.text}
            alt={page.start.title}
          />
        </div>
        <div className="mt-12">
          <ContentTextCtaImage
            text={page.start.text2}
            image={page.start.image2}
            alt={page.start.cta.text}
            cta={page.start.cta}
          />
        </div>
      </SectionStart>
      <SectionFlowerBackground>
        <div className="py-10">
          <div className="relative max-w-lg mx-auto">
            <KalaFlower className="" />
            <Link href={page.flower.links[0]}>
              <a className="absolute right-0 z-10 block w-16 h-16 bg-gray-50/5 hover:bg-gray-50/20 rounded-full left-[44%] top-[11%]"></a>
            </Link>
            <Link href={page.flower.links[1]}>
              <a className="absolute right-0 z-10 block w-16 h-16 bg-gray-50/5 hover:bg-gray-50/20 rounded-full left-[69%] top-[25%]"></a>
            </Link>
            <Link href={page.flower.links[2]}>
              <a className="absolute right-0 z-10 block w-16 h-16 bg-gray-50/5 hover:bg-gray-50/20 rounded-full left-[75%] top-[53%]"></a>
            </Link>
            <Link href={page.flower.links[3]}>
              <a className="absolute right-0 z-10 block w-16 h-16 bg-gray-50/5 hover:bg-gray-50/20 rounded-full left-[58%] top-[77%]"></a>
            </Link>
            <Link href={page.flower.links[4]}>
              <a className="absolute right-0 z-10 block w-16 h-16 bg-gray-50/5 hover:bg-gray-50/20 rounded-full left-[30%] top-[77%]"></a>
            </Link>
            <Link href={page.flower.links[5]}>
              <a className="absolute right-0 z-10 block w-16 h-16 bg-gray-50/5 hover:bg-gray-50/20 rounded-full left-[12%] top-[54%]"></a>
            </Link>
            <Link href={page.flower.links[6]}>
              <a className="absolute right-0 z-10 block w-16 h-16 bg-gray-50/[15%] hover:bg-gray-50/30 rounded-full left-[18%] top-[25%]"></a>
            </Link>
          </div>
          <div className="flex justify-center mt-5 text-center">
            <Prose html={page.flower.markdown.html} />
          </div>
        </div>
      </SectionFlowerBackground>
      <SectionContent>
        <ContentTitleCtaImage
          title={page.questions.text}
          cta={page.questions.cta}
          image={page.questions.image}
          alt={page.questions.title}
        />
      </SectionContent>
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
