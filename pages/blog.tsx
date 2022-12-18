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

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section className="py-16">
        <Container layout="sm">
          <div className="flex justify-center">
            <Heading element="h1" size="h1">
              {page.content.title}
            </Heading>
          </div>
          <div className="mt-20">
            <ContentMarkdownCtaImage
              html={page.content.markdown.html}
              cta={page.content.cta}
              image={page.content.image}
              alt={page.content.alt}
            />
          </div>
        </Container>
      </section>
      <section className="pt-6 pb-20">
        <Container layout="sm">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps() {
  // const footerData = await renderContent(footerSource[locale]);
  // const pageData = await renderContent(blog);
  const pageData = await renderContent(pageSource);
  const blog = await renderContent(getAllJson("blog"));

  return {
    props: {
      pageData,
      blog,
      // footerData,
    }, // will be passed to the blog component as props
  };
}
