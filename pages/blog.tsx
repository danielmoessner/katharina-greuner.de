import Layout from "../components/Layout";
import Seo from "../components/Seo";
import blog from "../content/page/blog.json";
import React from "react";
import Header from "components/Header";
import Container from "components/Container";
import { renderContent } from "lib/renderContent";
import pageSource from "content/page/blog.json";
import Heading from "components/Heading";
import ContentMarkdownCtaImage from "components/ContentMarkdownCtaImage";
import SeminarCard from "components/SeminarCard";
import { getAllJson } from "lib/getContent";
import sortBy from "lodash/sortBy";

function Page({ pageData, blog }) {
  const page = blog;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <section>todo</section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps() {
  // const footerData = await renderContent(footerSource[locale]);
  const pageData = await renderContent(blog);
  const seminars = await renderContent(getAllJson("blog"));

  return {
    props: {
      pageData,
      blog,
      // footerData,
    }, // will be passed to the seminar component as props
  };
}
