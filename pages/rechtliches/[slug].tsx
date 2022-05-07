import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { findMarkdown, getAllMarkdown } from "../../lib/getMarkdown";
import { Legal } from "../../types/legal";
import { Markdown } from "../../types/shared";

interface Props {
  page: Markdown<Legal>;
}

function Page({ page }: Props) {
  const legal = page.frontmatter;

  const meta = {
    title: legal.title,
    description: "",
  };

  const header = {
    title: legal.title,
    text: "",
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Header header={header} />
      <section className="pt-5 pb-20">
        <Container layout="sm">
          <article
            className="prose"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </Container>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const page = findMarkdown<Legal>(slug, "legal");
  return {
    props: {
      page,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const items = getAllMarkdown<Legal>("legal");

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
