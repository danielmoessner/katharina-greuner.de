import Layout from "../components/Layout";
import Seo from "../components/Seo";
import heal from "../content/page/schooling.json";
import SectionStart from "../components/SectionStart";
import { renderContent } from "lib/renderContent";
import Header from "../components/Header";
import ContentImageMarkdown from "../components/ContentImageMarkdown";
import ContentMarkdownImage from "../components/ContentMarkdownImage";
import SectionFlowerBackground from "../components/SectionFlowerBackground";
import Heading from "../components/Heading";
import ContentTitleCtaImage from "../components/ContentTitleCtaImage";
import SectionContent from "../components/SectionContent";
import Section from "components/Section";
import Container from "components/Container";
import Image from "next/image";
import Prose from "../components/Prose";
import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <SectionStart start={page.start}>
        <div className="">
          <ContentImageMarkdown
            image={page.start.image}
            html={page.start.markdown.html}
            alt={page.start.title}
          />
        </div>
        <div className="mt-12">
          <ContentMarkdownImage
            html={page.start.markdown2.html}
            image={page.start.image2}
            alt={page.start.title}
          />
        </div>
      </SectionStart>
      <SectionFlowerBackground>
        <div className="py-10">
          <div className="flex justify-center ">
            <Heading element="h2" size="h2">
              {page.overview.title}
            </Heading>
          </div>
          <div className="mt-10">
            <div className="flex flex-wrap lg:flex-nowrap">
              {page.overview.step.map((item) => (
                <div key={item.title} className="w-full mb-8 lg:w-1/5">
                  <div className="flex items-center justify-center">
                    <div className="w-20">
                      <Image {...item.image} alt={item.title} />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="w-48 mx-auto font-bold tracking-wide uppercase">
                      {item.title}
                    </h3>
                    <p>{item.string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionFlowerBackground>
      <Section>
        <Container layout="sm">
          <div className="py-16">
            <div className="flex justify-center">
              <Heading element="h2" size="h2">
                {page.schooling.title}
              </Heading>
            </div>
            <div className="mt-6 space-y-8">
              {page.schooling.seminar.map((item) => (
                <div key={item.title}>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <div className="relative px-5 pt-6 pb-16 lg:pb-6 bg-kg-green/20">
                          <div className="grid-cols-12 gap-8 md:grid">
                            <div className="flex items-center justify-center col-span-4">
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="w-24">
                                  <Image {...item.image} alt={item.title} />
                                </div>
                                <div className="mt-4">
                                  <Heading element="h3" size="h3">
                                    {item.title}
                                  </Heading>
                                </div>
                                <p className="mt-3 text-lg">{item.string}</p>
                              </div>
                            </div>
                            <div className="col-span-8 mt-10 md:mt-0">
                              <Prose html={item.markdown.html} />
                              <div className="mt-8">
                                <div>
                                  <div className="inline-block w-24">
                                    {page.schooling.date}
                                  </div>
                                  <div className="inline-block">
                                    {item.date}
                                  </div>
                                </div>
                                <div>
                                  <div className="inline-block w-24">
                                    {page.schooling.costs}
                                  </div>
                                  <div className="inline-block">
                                    {item.costs}
                                  </div>
                                </div>
                                <div>
                                  <div className="inline-block w-24">
                                    {page.schooling.location}
                                  </div>
                                  <div className="inline-block">
                                    {item.location}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Disclosure.Button className="absolute flex items-center space-x-1 bottom-5 right-5">
                            <span className="">Erfahre mehr</span>
                            <PlusIcon
                              className={`${
                                open ? "rotate-45" : ""
                              } h-9 w-9 text-kg-yellow transform transition`}
                            />
                          </Disclosure.Button>
                        </div>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-kg-green/10">
                          <div className="grid-cols-12 gap-8 md:grid">
                            <div className="col-span-4"></div>
                            <div className="col-span-8">
                              <Prose html={item.markdown2.html} />
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <SectionContent>
        <ContentTitleCtaImage
          title={page.questions.text}
          cta={page.questions.cta}
          image={page.questions.image}
          alt={page.questions.title}
        />
      </SectionContent>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(heal);

  return {
    props: { pageData },
  };
}

export default Page;
