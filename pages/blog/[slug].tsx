import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Container from "../../components/Container";
import { renderContent } from "lib/renderContent";
import { getAllJson } from "lib/getContent";
import ImageBorder from "components/ImageBorder";
import Image from "next/image";
import Heading from "components/Heading";
import { formatDate, formatDateTime } from "lib/date";
import BlogAside from "components/BlogAside";
import pageSource from "content/page/blog.json";
import { useRouter } from "next/router";
import Prose from "components/Prose";
import DynamicForm from "components/DynamicForm";

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
      <section>
        <Container layout="sm">
          <div className="grid grid-cols-12 py-8 divide-x-2">
            <div className="col-span-8">
              <div className="pr-8">
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
              </div>
              {article.comments && (
                <div className="relative mt-8">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src="/img/blumen_hintergrund_soft_tuerkis.jpeg"
                    alt="Hintergrundbild"
                  />
                  <div className="relative px-8 py-5">
                    <ul className="divide-y-2 divide-kg-brown/40">
                      {article.comments.map((comment) => (
                        <li
                          key={comment.author}
                          className="pt-6 pb-6 first:pt-0 last:pb-0"
                        >
                          <div className="">
                            <h3 className="font-bold text-kg-green">
                              {comment.author}
                            </h3>
                            <span>{formatDateTime(comment.date)}</span>
                            <p className="mt-2 text-sm">{comment.text}</p>
                          </div>
                        </li>
                      ))}
                      <li className="">
                        <div className="pt-5">
                          <h2 className="text-2xl font-medium">
                            {page.comments.title}
                          </h2>
                          <p className="mt-1 text-sm">{page.comments.text}</p>
                          <div className="mt-4">
                            <DynamicForm
                              name="kommentarformular"
                              gapY="gap-y-2"
                              buttonDivClass="mt-4"
                              fields={page.comments.fields}
                              showPrivacy={false}
                              submitText={page.comments.button}
                              successHeading=""
                              successText={page.comments.success}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <aside className="col-span-4 pl-8">
              <BlogAside
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
