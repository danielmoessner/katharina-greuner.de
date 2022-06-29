import Layout from "../components/Layout";
import AnimalCard from "../components/AnimalCard";
import Seo from "../components/Seo";
import Animate from "../components/Animate";
import Container from "../components/Container";
import Header from "../components/Header";
import Script from "next/script";
import { allAnimals, Animal } from "contentlayer/generated";
import home from "../content/page/home.json";
import { getPlaiceholder } from "plaiceholder";
import { BlurImage } from "types/shared";
import SectionHomeAbout from "../components/SectionHomeAbout";
import SectionHomeTravel from "../components/SectionHomeTravel";

interface Props {
  animals: (Animal & BlurImage)[];
}

function Page() {
  const page = home;

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Seo meta={page.meta} />
      <Header header={page.header} image="/img/kala_home_ausschnitt.jpeg" />
      <SectionHomeAbout about={page.about} />
      <SectionHomeTravel travel={page.travel} />
    </Layout>
  );
}

export async function getStaticProps() {
  const animalsPromiseList = allAnimals.map(async (a) => {
    const { base64, img } = await getPlaiceholder(a.image);
    return { ...a, imageProps: { ...img, blurDataURL: base64 } };
  });
  const animalsList = await Promise.all(animalsPromiseList);

  return {
    props: {
      animals: animalsList,
    },
  };
}

export default Page;
