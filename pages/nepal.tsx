import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import nepal from "../content/page/nepal.json";
import { renderContent } from "lib/renderContent";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
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
