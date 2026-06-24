import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { renderContent } from "../../lib/renderContent";
import { getAllJson } from "../../lib/getContent";
import Heading from "../../components/Heading";
import ContentImageMarkdown from "../../components/ContentImageMarkdown";
import ContentMarkdownImage from "../../components/ContentMarkdownImage";
import ContentMarkdown from "../../components/ContentMarkdown";
import SectionFlowerBackground from "../../components/SectionFlowerBackground";
import Button from "../../components/Button";
import ImageRounded from "../../components/ImageRounded";
import Image from "next/image";
import { formatDate } from "../../lib/date";
import ContentText from "../../components/ContentText";
import Section from "../../components/Section";
import ContentMarkdownTextCta from "../../components/ContentMarkdownTextCta";
import SectionFaq from "../../components/SectionFaq";

function Page({ seminarData }) {
  const seminar = seminarData;
  const sections = seminar.sections || [];

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
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {section.type === "seminarfocuslinks" && (
            <SectionFlowerBackground id={section.id}>
              <section className="py-10 sm:py-14">
                <div className="px-6 py-10 mx-auto text-center sm:px-10 sm:py-12">
                  <h2 className="text-4xl font-light leading-tight tracking-tight text-kg-brown sm:text-5xl">
                    {section.title}
                  </h2>
                  <div className="w-56 h-1 mx-auto mt-6 bg-kg-yellow"></div>
                  <p className="max-w-2xl mx-auto mt-8 text-lg leading-relaxed whitespace-pre-line text-kg-brown">
                    {section.text}
                  </p>
                  {section.ctas?.length > 0 && (
                    <div className="grid max-w-2xl grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2">
                      {section.ctas.map((cta, ctaIndex) => (
                        <Button
                          key={`${cta.href}-${ctaIndex}`}
                          href={cta.href}
                          className="inline-flex w-full justify-center border-3 border-kg-yellow bg-white px-5 py-3 text-center text-sm font-medium uppercase tracking-wide text-kg-brown transition hover:bg-[rgb(255,249,232)]"
                        >
                          {cta.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </SectionFlowerBackground>
          )}
          {section.type === "heading" && (
            <section id={section.id} className="pt-16">
              <Container layout="sm">
                <div className="flex justify-center">
                  <Heading element="h1" size="h1">
                    {section.title}
                  </Heading>
                </div>
              </Container>
            </section>
          )}
          {section.type === "imagetext" && (
            <div id={section.id} className="p-10">
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
          {section.type === "text" && (
            <div id={section.id} className="p-10">
              <Container layout="sm">
                <div className="">
                  <div className="">
                    <ContentMarkdown html={section.markdown.html} />
                  </div>
                </div>
              </Container>
            </div>
          )}
          {section.type === "textimage" && (
            <div id={section.id} className="p-10">
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
          {section.type === "events" && (
            <SectionFlowerBackground id={section.id}>
              <div className="grid justify-center my-10 ">
                <div className="flex flex-col gap-y-4">
                  <Heading element="h2" size="h2">
                    <div className="grid justify-center ">{section.title}</div>
                  </Heading>

                  <div className="grid grid-cols-2 place-items-center gap-x-4">
                    <div className="">
                      <div className="flex flex-col gap-y-4 ">
                        <table>
                          <tbody>
                            {section.events.map((event, index) => (
                              <tr key={index}>
                                <td className="">{event.month}</td>
                                <td className="">{formatDate(event.date)}</td>
                                <td>{event.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="flex flex-col mt-5 gap-y-1"
                        dangerouslySetInnerHTML={{
                          __html: section.markdown.html,
                        }}
                      ></div>
                    </div>

                    <div className="w-1/2">
                      <ImageRounded image={section.image} alt={section.alt}></ImageRounded>
                    </div>
                  </div>
                </div>
              </div>
            </SectionFlowerBackground>
          )}
          {section.type === "flowertitle" && (
            <SectionFlowerBackground id={section.id}>
              <div className="flex flex-col py-10 gap-y-1 ">
                <div className="">
                  <h2 className="text-4xl font-thin text-center">{section.title}</h2>
                </div>
                <div className="max-w-xs mx-auto mt-2">
                  <Image {...section.image} alt={section.title} />
                </div>
              </div>
            </SectionFlowerBackground>
          )}
          {section.type === "date" && (
            <SectionFlowerBackground id={section.id}>
              <div className="py-20">
                <div className="flex justify-center">
                  <Heading element="h2" size="h2">
                    <b>{section.pretitle}</b> | {section.title}
                  </Heading>
                </div>
                <div className="mt-10">
                  <table className="mx-auto">
                    <tbody>
                      {section.data.map((item) => (
                        <tr key={item.key}>
                          <td className="px-2 font-bold">{item.key}:</td>
                          <td className="px-2">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-8">
                  <Button href={section.cta.href}>{section.cta.text}</Button>
                </div>
              </div>
            </SectionFlowerBackground>
          )}
          {section.type === "yogadate" && (
            <SectionFlowerBackground id={section.id}>
              <div className="py-20">
                <div className="flex justify-center">
                  <Heading element="h2" size="h2">
                    {section.title}
                  </Heading>
                </div>
                <p className="mt-4 "> {section.text}</p>
                <div className="mt-10">
                  <table className="mx-auto">
                    <tbody>
                      {section.yogadata.map((item) => (
                        <tr key={item.key}>
                          <td className="px-2 font-bold tracking-wide align-top">{item.key}:</td>
                          <td className="px-2 whitespace-pre-line">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-8">
                  <Button href={section.cta.href}>{section.cta.text}</Button>
                </div>
              </div>
            </SectionFlowerBackground>
          )}
          {section.type === "review" && (
            <section id={section.id} className="py-8">
              <Container layout="sm">
                <div className="flex flex-col items-center justify-center px-8 md:flex-row bg-kg-green/20">
                  <div className="py-7">
                    <ImageRounded image={section.image} alt={section.string} />
                  </div>
                  <div className="md:max-w-[50%] md:pl-8 whitespace-pre-line pb-8 md:py-8">
                    <p>
                      <i>„{section.text}“</i> <br />
                      <b className="block pt-3">{section.string}</b>
                    </p>
                  </div>
                </div>
              </Container>
            </section>
          )}
          {section.type === "titletextimagetextbutton" && (
            <section id={section.id} className="p-12 ">
              <Container layout="sm">
                <div className="">
                  <div>
                    <div className="flex justify-center">
                      <Heading element="h2" size="h2">
                        {section.title}
                      </Heading>
                    </div>
                    <div className="mt-8">
                      <ContentText text={section.text} />
                    </div>
                    <div className="mt-8">
                      <ContentImageMarkdown
                        html={section.markdown.html}
                        image={section.image}
                        alt={section.alt}
                      />
                    </div>
                    <div className="flex justify-center mt-10">
                      <Button href={section.cta.href}>{section.cta.text}</Button>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          )}
          {section.type === "titletextimage" && (
            <section id={section.id} className="p-12 ">
              <Container layout="sm">
                <div className="">
                  <div>
                    <div className="flex justify-center">
                      <Heading element="h2" size="h2">
                        {section.title}
                      </Heading>
                    </div>
                    <div className="mt-8">
                      <ContentMarkdownImage
                        html={section.markdown.html}
                        image={section.image}
                        alt={section.alt}
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          )}
          {section.type === "banner" && (
            <SectionFlowerBackground id={section.id}>
              <section className="p-12">
                <Container layout="sm">
                  <div className="">
                    <div className="item-center">
                      <div className="flex ">
                        <Heading element="h2" size="h2">
                          {section.title}
                        </Heading>
                      </div>
                      <div className="mt-8 text-center ">
                        <ContentMarkdown html={section.markdown.html} />
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </SectionFlowerBackground>
          )}
          {section.type === "prebanner" && (
            <Section>
              <section id={section.id} className="p-8 bg-kg-green/20">
                <Container layout="sm">
                  <div className="">
                    <div>
                      <div className="flex justify-center pb-4">
                        <Heading element="h2" size="h2">
                          {section.title}
                        </Heading>
                      </div>

                      <div className="flex flex-col justify-center ">
                        <div className="flex justify-center text-xl">{section.pretitle}</div>
                        <div className="flex justify-center mt-2 text-center">
                          <ContentMarkdown html={section.markdown.html} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </Section>
          )}{" "}
          {section.type === "prebanner2" && (
            <Section>
              <section id={section.id} className="p-8 bg-kg-green/20">
                <Container layout="sm">
                  <div className="">
                    <div>
                      <div className="flex justify-center pb-4">
                        <Heading element="h2" size="h2">
                          {section.title}
                        </Heading>
                      </div>

                      <div className="flex flex-col justify-center ">
                        <div className="flex justify-center font-bold">
                          <Heading element="h3" size="h3">
                            {section.pretitle2}
                          </Heading>
                        </div>
                        <div className="flex justify-center mt-2">
                          <ContentMarkdown html={section.markdown.html} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </Section>
          )}
          {section.type === "yogadateoverview" && (
            <SectionFlowerBackground id={section.id}>
              <section className="pt-12 pb-20">
                <Container layout="sm">
                  <div className="flex justify-center">
                    <div>
                      <div className="flex justify-center">
                        <Heading element="h2" size="h2">
                          {section.title}
                        </Heading>
                      </div>
                      <div className="mt-8 text-2xl text-center">
                        <ContentMarkdownTextCta
                          html={section.markdown.html}
                          cta={section.cta}
                          text={section.text}
                        />
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </SectionFlowerBackground>
          )}
          {section.type === "faq" && (
            <SectionFaq
              id={section.id}
              title={section.title}
              items={section.items}
            />
          )}
        </React.Fragment>
      ))}
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const seminarData1 = getAllJson("seminar");
  const seminarData2 = seminarData1.find((i) => i.slug === params.slug);
  const seminarData = await renderContent(seminarData2);

  return {
    props: {
      seminarData,
    },
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
    fallback: false,
  };
}
