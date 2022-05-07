import Layout from "../components/Layout";
import AnimalCard from "../components/AnimalCard";
import Seo from "../components/Seo";
import Animate from "../components/Animate";
import Container from "../components/Container";
import Header from "../components/Header";
import { attributes } from "../content/page/home.md";
import { getAllMarkdown } from "../lib/getMarkdown";
import { Animal } from "../types/animal";

interface Props {
  animals: Animal[];
}

function Page({ animals }: Props) {
  const page = attributes;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section>
        <Container layout="sm">
          <div className="pt-8 pb-20 sm:pt-4 lg:pt-6">
            <div className="">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-6">
                {animals.map((animal, index) => (
                  <Animate key={animal.slug} delay={index % 3}>
                    <AnimalCard animal={animal} />
                  </Animate>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const animalsList = getAllMarkdown<Animal>("animal");

  return {
    props: {
      animals: animalsList,
    },
  };
}

export default Page;
