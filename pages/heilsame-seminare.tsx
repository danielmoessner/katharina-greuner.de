import React from "react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import Header from "components/Header";
import Container from "components/Container";
import { renderContent } from "lib/renderContent";
import pageSource from "content/page/seminars.json";
import Heading from "components/Heading";
import ContentMarkdownCtaImage from "components/ContentMarkdownCtaImage";
import SeminarCard from "components/SeminarCard";
import { getAllJson } from "lib/getContent";
import seminar from "cms/page/seminar";
import ImageBorder from "components/ImageBorder";
import Link from "next/link";
import ImageRounded from "components/ImageRounded";
import Button from "components/Button";

function Page({ pageData, seminars }) {
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
            {page.content.seminars.map((seminar, index) => (
              <div key={index}>
                <SeminarCard seminar={seminar} />
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* seminar cards */}
      <section className="pt-6 pb-20">
        <Container layout="sm">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {seminars.map((seminar) => (
              <>
                <div key={seminar} className="">
                  <div key={seminar}>{seminar.image}</div>
                  <div key={seminar}>{seminar.boldtext}</div>
                  <div key={seminar}>{seminar.shortdescription}</div>
                  <div key={seminar}> {seminar.bold}</div>
                  <Button href={seminar.url}>{seminar.text}</Button>
                </div>
              </>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps() {
  // const footerData = await renderContent(footerSource[locale]);

  const pageData = await renderContent(pageSource);
  const seminars = getAllJson("seminar");

  return {
    props: {
      pageData,
      seminars,
      // footerData,
    }, // will be passed to the seminar component as props
  };
}
