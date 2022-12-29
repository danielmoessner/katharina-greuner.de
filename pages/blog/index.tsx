import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import React from "react";
import pageSource from "content/page/blog.json";
import Header from "components/Header";
import Container from "components/Container";
import { renderContent } from "lib/renderContent";
import Heading from "components/Heading";
import BlogCard from "components/BlogCard";
import AboutCard from "components/AboutMeCard";
import { getAllJson } from "lib/getContent";

function Page({ pageData, articles }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <section>
        <div className="flex justify-center pt-10">
          <Heading element="h1" size="h1">
            {page.content.title}
          </Heading>
        </div>
      </section>
      <section className="grid grid-cols-12 pb-20 divide-x-2">
        <div className="col-span-8">
          <Container layout="sm">
            <div className="divide-y-2 divide-gray-200">
              {articles.map((article) => (
                <div key={article.title} className="py-8 first:pt-0 last:pb-0">
                  <BlogCard article={article} button="Weiterlesen (todo)" />
                </div>
              ))}
            </div>
          </Container>
        </div>

        <aside className="col-span-4">
          <Container layout="sm">
            <div>
              <AboutCard></AboutCard>
            </div>

            <div className="mt-4">
              <h1>Schlagwörter</h1>
              <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>

            {/* Newsletter Card über CMS */}
            <div className="mt-4">
              <h1>Melde dich hier zum Newsletter an</h1>
              <div>
                <p>input</p>
                <p>input</p>
                <p>CTA</p>
                <p>text</p>
              </div>
            </div>
            {/* {sortBy(blog, "order").map((blog) => {
              if (blog === true) {
                return (
                  <>
                  <React.Fragment key={blog.title}>
                  <BlogCard blog={undefined} button={""} />
                  </React.Fragment>
                  <React.Fragment key={blog.title}>
                  <BlogCard blog={blog} button={page.content.BlogButton} />
                  </React.Fragment>
                  </>
                  );
                }
              })} */}
          </Container>
        </aside>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps() {
  // const footerData = await renderContent(footerSource[locale]);
  // const pageData = await renderContent(blog);
  const pageData = await renderContent(pageSource);
  const articles = await renderContent(getAllJson("article"));

  return {
    props: {
      pageData,
      articles,
      // footerData,
    }, // will be passed to the blog component as props
  };
}
