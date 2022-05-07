import React from "react";
import Layout from "../../components/Layout";
import AnimalComponent from "../../components/Animal";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import { findMarkdown, getAllMarkdown } from "../../lib/getMarkdown";
import { Animal } from "../../types/animal";
import { Markdown } from "../../types/shared";

interface Props {
  page: Markdown<Animal>;
}

function Page({ page }: Props) {
  const animal = page.frontmatter;

  const meta = {
    title: animal.title,
    description: animal.excerpt,
    image: animal.image,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <section className="pt-5">
        <Container layout="sm">
          <AnimalComponent animal={animal} body={page.html} />
        </Container>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const page = findMarkdown<Animal>(slug, "animal");

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const items = getAllMarkdown<Animal>("animal");

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
