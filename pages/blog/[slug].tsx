import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Container from "../../components/Container";
import { renderContent } from "lib/renderContent";
import { getAllJson } from "lib/getContent";
import ImageBorder from "components/ImageBorder";
import Image from "next/image";
import Heading from "components/Heading";
import { formatDate } from "lib/date";
import BlogAside from "components/BlogAside";
import pageSource from "content/page/blog.json";
import { useRouter } from "next/router";
import Prose from "components/Prose";

function Page({ pageData, article, categories }) {
  const page = pageData;
  const router = useRouter();
  const selectedCategory = router.query.kategorie as string;
  const meta = {
    title: article.title,
    description: article.description,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Container layout="sm">
        <div className="grid grid-cols-12 gap-6 py-8 divide-x-2">
          <section className="col-span-8 pr-8">
            <ImageBorder>
              <Image {...article.image} alt={article.title} />
            </ImageBorder>

            <div className="mt-3">
              <Heading element="h1" size="h2">
                {article.title}
              </Heading>
            </div>
            <div className="mt-2">{formatDate(article.date)}</div>
            <div className="mt-6">
              <Prose html={article.markdown.html} />
            </div>
          </section>
          <aside className="col-span-4 pl-8">
            <BlogAside
              aside={page.aside}
              categories={categories}
              selectedCategory={selectedCategory}
            />
          </aside>
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
  const pageData = await renderContent(pageSource);
  const categories = await getAllJson("category");

  return {
    props: {
      article: article2,
      pageData,
      categories,
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
