import Layout from "../components/Layout";
import Seo from "../components/Seo";
import kala from "../content/page/kala.json";
import { renderContent } from "lib/renderContent";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
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
