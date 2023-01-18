import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Container from "../../components/Container";
import { renderContent } from "lib/renderContent";
import { getAllMarkdown } from "lib/getContent";

function Page({ legalData }) {
  const page = legalData;

  const meta = {
    title: page.title,
    description: "",
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <section className="pt-10 pb-20">
        <Container layout="sm">
          <article className="mx-auto prose">
            <h1>{page.title}</h1>
            <div // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: page.markdown.html }}
            ></div>
          </article>
        </Container>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const legalData1 = getAllMarkdown("legal");
  const legalData2 = legalData1.find((i) => i.slug === params.slug);
  const legalData = await renderContent(legalData2);
  // const footerData = await renderContent(footerSource[locale]);

  return {
    props: {
      legalData,
      // footerData,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const items = getAllMarkdown("legal");

  return {
    paths: items.map((i) => {
      return {
        params: {
          slug: i.slug,
        },
      };
    }),
    fallback: false, // false or 'blocking'
  };
}
