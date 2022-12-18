import Layout from "../components/Layout";
import Seo from "../components/Seo";
import blog from "../content/page/blog.json";
import React from "react";
import pageSource from "content/page/blog.json";
import Header from "components/Header";
import Container from "components/Container";
import { renderContent } from "lib/renderContent";
import Heading from "components/Heading";
import ContentMarkdownCtaImage from "components/ContentMarkdownCtaImage";
import BlogCard from "components/BlogCard";
import { getAllJson } from "lib/getContent";
import sortBy from "lodash/sortBy";
import AboutCard from "components/AboutMeCard";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section>
        <div className="flex justify-center">
          <Heading element="h1" size="h1">
            {page.content.title}
          </Heading>
        </div>
      </section>
      <section className="grid grid-cols-2 divide-x-2">
        <section className="pt-6 pb-20 divide-y-2">
          <Container layout="sm">
            <div className="p-4 border-b-2 ">
              <BlogCard blog={undefined} button={"test"}></BlogCard>
            </div>{" "}
            <div className="p-4 border-b-2">
              <BlogCard blog={undefined} button={"test"}></BlogCard>
            </div>
          </Container>
        </section>

        <section className="pt-6 pb-20">
          <Container layout="sm">
            <div>
              <AboutCard about={undefined} button={"test"}></AboutCard>
            </div>

            <div className="mt-4">
              <h1>Schlagwörter</h1>
              <ui>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ui>
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
        </section>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps() {
  // const footerData = await renderContent(footerSource[locale]);
  // const pageData = await renderContent(blog);
  const pageData = await renderContent(pageSource);
  // const blog = await renderContent(getAllJson("blog"));

  return {
    props: {
      pageData,
      blog,
      // footerData,
    }, // will be passed to the blog component as props
  };
}
