import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import React from "react";
import pageSource from "content/page/blog.json";
import Container from "components/Container";
import { renderContent } from "lib/renderContent";
import Heading from "components/Heading";
import BlogCard from "components/BlogCard";
import { getAllJson } from "lib/getContent";
import BlogAside from "components/BlogAside";
import { useRouter } from "next/router";

function Page({ pageData, allArticles, categories }) {
  const page = pageData;
  const router = useRouter();
  const selectedCategory = router.query.kategorie as string;
  let articles = allArticles;
  if (selectedCategory)
    articles = allArticles.filter((article) =>
      article.categories.includes(selectedCategory)
    );

  return (
    <Layout>
      <Seo meta={page.meta} />
      <section className="pb-10 lg:pb-0">
        <div className="flex justify-center pt-10">
          <Heading element="h1" size="h1">
            {page.content.title}
          </Heading>
        </div>
      </section>
      <section>
        <Container layout="sm">
          <div className="grid grid-cols-12 pb-20 md:divide-x-2">
            <div className="col-span-12 md:col-span-8 md:pr-8">
              <div className="divide-y-2 divide-gray-200">
                {articles.map((article) => (
                  <div
                    key={article.title}
                    className="py-8 first:pt-0 last:pb-0"
                  >
                    <BlogCard article={article} button=" > Weiterlesen" />
                  </div>
                ))}
              </div>
            </div>
            <aside className="col-span-12 pt-20 md:col-span-4 md:pl-8 md:pt-0">
              <BlogAside
                articles={articles}
                aside={page.aside}
                categories={categories}
                selectedCategory={selectedCategory}
              />
            </aside>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps() {
  const pageData = await renderContent(pageSource);
  const allArticles1 = await renderContent(getAllJson("article"));
  const allArticles2 = allArticles1.sort(
    (a1, a2) => new Date(a2.date).getTime() - new Date(a1.date).getTime()
  );
  const categories = await getAllJson("category");

  return {
    props: {
      pageData,
      allArticles: allArticles2,
      categories,
    },
  };
}
