import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import kala from "../content/page/kala.json";
import { renderContent } from "lib/renderContent";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section>todo</section>
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
