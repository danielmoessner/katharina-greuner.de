import React from "react";
import Layout from "../../components/Layout";
import AnimalComponent from "../../components/Animal";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import { allAnimals, Animal } from "contentlayer/generated";

interface Props {
  page: Animal;
}

function Page({ page }: Props) {
  const animal = page;

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
          <AnimalComponent animal={animal} body={animal.body.html} />
        </Container>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const page = allAnimals.find((i) => i.slug === slug);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const items = allAnimals;

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
