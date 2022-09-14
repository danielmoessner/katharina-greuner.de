import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { renderContent } from "lib/renderContent";
import { getAllJson } from "lib/getContent";
import pageSource from "content/page/seminar.json";
import Heading from "components/Heading";
import ContentImageMarkdown from "components/ContentImageMarkdown";
import ContentMarkdownImage from "components/ContentMarkdownImage";
import ContentMarkdown from "components/ContentMarkdown";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import Button from "components/Button";

function Page({ seminarData }) {
  const seminar = seminarData;
  // const page = pageData;

  const meta = {
    title: seminar.title,
    description: seminar.description,
  };

  const header = {
    image: seminar.image,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Header header={header} />
      <section className="pt-12 pb-20">
        <Container layout="sm">
          <div className="flex justify-center">
            <Heading element="h1" size="h1">
              {seminar.title}
            </Heading>
          </div>
          <div className="mt-16 space-y-10">
            {seminar.sections.map((section, index) => (
              <div key={index}>
                {section.type === "textimage" && (
                  <ContentMarkdownImage
                    html={section.markdown.html}
                    image={section.image}
                    alt={section.alt}
                  />
                )}
                {section.type === "text" && (
                  <ContentMarkdown html={section.markdown.html} />
                )}
                {section.type === "imagetext" && (
                  <ContentImageMarkdown
                    html={section.markdown.html}
                    image={section.image}
                    alt={section.alt}
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <SectionFlowerBackground>
        <div className="py-20">
          <div className="flex justify-center">
            <Heading element="h2" size="h2">
              <b>{seminar.date.pretitle}</b> | {seminar.date.title}
            </Heading>
          </div>
          <div className="mt-10">
            <table className="mx-auto">
              <tbody>
                {seminar.date.data.map((item) => (
                  <tr key={item.key}>
                    <td className="px-2 font-bold">{item.key}:</td>
                    <td className="px-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-8">
            <Button href={seminar.date.cta.url}>{seminar.date.cta.text}</Button>
          </div>
        </div>
      </SectionFlowerBackground>
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const seminarData1 = getAllJson("seminar");
  const seminarData2 = seminarData1.find((i) => i.slug === params.slug);
  const seminarData = await renderContent(seminarData2);
  // const footerData = await renderContent(footerSource[locale]);

  const pageData = await renderContent(pageSource);

  return {
    props: {
      seminarData,
      pageData,
      // footerData,
    }, // will be passed to the seminar component as props
  };
}

export async function getStaticPaths() {
  const items = getAllJson("seminar");

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
