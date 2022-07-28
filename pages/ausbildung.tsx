import Layout from "../components/Layout";
import Seo from "../components/Seo";
import heal from "../content/page/schooling.json";
// import SectionStart from "../components/SectionStart";
import { renderContent } from "lib/renderContent";
// import ImageRounded from "components/ImageRounded";
// import Heading from "components/Heading";
// import Prose from "components/Prose";
// import Link from "next/link";
import Header from "../components/Header";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      {/* <SectionStart start={page.heal}> */}

      {/* </SectionStart> */}
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
