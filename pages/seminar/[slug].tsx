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
import ContentEvents from "components/ContentEvents";
import ContentMarkdown from "components/ContentMarkdown";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import Button from "components/Button";
import { event } from "lib/analytics";
import ImageRounded from "components/ImageRounded";
import Image from "next/image";

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
      <section className="pt-16">
        <Container layout="sm">
          <div className="flex justify-center">
            <Heading element="h1" size="h1">
              {seminar.title}
            </Heading>
          </div>
        </Container>
      </section>
      {seminar.sections.map((section, index) => (
        <>
          {/* Hände  */}
          {section.type === "imagetext" && (
            <div key={index} className="pt-12 pb-20">
              <Container layout="sm">
                <div className="">
                  <div>
                    <ContentImageMarkdown
                      html={section.markdown.html}
                      image={section.image}
                      alt={section.alt}
                    />
                  </div>
                </div>
              </Container>
            </div>
          )}
          {/* woraus besteh unser gewebe ? */}
          {section.type === "text" && (
            <div key={index} className="pt-12 pb-20">
              <Container layout="sm">
                <div className="">
                  <div className="">
                    <ContentMarkdown html={section.markdown.html} />
                  </div>
                </div>
              </Container>
            </div>
          )}
          {/* Steinskulptur  */}
          {section.type === "textimage" && (
            <div key={index} className="pt-12 pb-20">
              <Container layout="sm">
                <div className="">
                  <div>
                    <ContentMarkdownImage
                      html={section.markdown.html}
                      image={section.image}
                      alt={section.alt}
                    />
                  </div>
                </div>
              </Container>
            </div>
          )}
          {/* Termine */}
          {section.type === "events" && (
            <div className="">
              <SectionFlowerBackground>
                <div className="grid justify-center my-10 ">
                  <div className="flex flex-col gap-y-4">
                    <Heading element="h2" size="h2">
                      <div className="grid justify-center ">
                        {section.title}
                      </div>
                    </Heading>

                    <div className="grid grid-cols-2 place-items-center gap-x-4">
                      {/* termindate */}
                      <div className="">
                        <div className="flex flex-col gap-y-4 ">
                          {section.events.map((event) => (
                            <div className="flex flex-row " key={event.month}>
                              <div>{event.month}</div>
                              <div>{event.date}</div>
                              <div>{event.time}</div>
                            </div>
                          ))}
                        </div>
                        <div
                          className="flex flex-col mt-5 gap-y-1"
                          dangerouslySetInnerHTML={{
                            __html: section.markdown.html,
                          }}
                        ></div>
                      </div>

                      {/* kirschen */}
                      <div className="w-1/2">
                        <ImageRounded
                          image={section.image}
                          alt={section.alt}
                        ></ImageRounded>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionFlowerBackground>
            </div>
          )}
          {/* flowertitle */}
          {section.type === "flowertitle" && (
            <SectionFlowerBackground>
              <div className="flex flex-col py-10 gap-y-1 ">
                <div className="">
                  {/*resize size of header and Image  */}
                  <Heading element="h2" size="h1">
                    <div className=""> {section.title}</div>
                  </Heading>
                </div>
                <div className="">
                  <Image {...section.image} alt={section.title} />
                </div>
              </div>
            </SectionFlowerBackground>
          )}
          {/* Termin */}
          {section.type === "date" && (
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
                  <Button href={seminar.date.cta.url}>
                    {seminar.date.cta.text}
                  </Button>
                </div>
              </div>
            </SectionFlowerBackground>
          )}
          {/* yoga class */}
          {section.type === "yogaclass" && (
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
                  <Button href={seminar.date.cta.url}>
                    {seminar.date.cta.text}
                  </Button>
                </div>
              </div>
            </SectionFlowerBackground>
          )}
        </>
      ))}
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
