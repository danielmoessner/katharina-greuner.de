import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Container from "../../components/Container";
import { renderContent } from "lib/renderContent";
import { getAllJson } from "lib/getContent";
import ImageBorder from "components/ImageBorder";
import Image from "next/image";

function Page({ article }) {
  const meta = {
    title: article.title,
    description: article.description,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Container layout="sm">
        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-8">
            <ImageBorder>
              <Image {...article.image} alt={article.title} />
            </ImageBorder>
            <h1>{article.title}</h1>
            <div
              className="prose max-w-none"
              // eslint-disable-next-line
              dangerouslySetInnerHTML={{ __html: article.markdown.html }}
            ></div>
          </section>
          <aside className="col-span-4"></aside>
        </div>
      </Container>
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const articles = getAllJson("article");
  const article1 = articles.find((i) => i.slug === params.slug);
  const article2 = await renderContent(article1);
  // const footerData = await renderContent(footerSource[locale]);
  // const pageData = await renderContent(pageSource);

  return {
    props: {
      article: article2,
      // pageData,
      // footerData,
    },
  };
}

export async function getStaticPaths() {
  const items = getAllJson("article");

  return {
    paths: items.map((i) => {
      return {
        params: {
          slug: i.slug,
        },
      };
    }),
    fallback: false,
  };
}
