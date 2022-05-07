import { CMS } from "netlify-cms-core";
import dynamic from "next/dynamic";
import config from "../cms/config";
import AnimalComponent from "../components/Animal";
import AnimalCard from "../components/AnimalCard";
import Container from "../components/Container";
import { Animal } from "../types/animal";
import AdminPreview from "../components/AdminPreview";
import md from "markdown-it";
import Head from "next/head";

// previews
const AnimalPreview = ({ entry }) => {
  const animalData: Animal = {
    slug: entry.getIn(["data", "slug"]),
    image: entry.getIn(["data", "image"]),
    title: entry.getIn(["data", "title"]),
    category: entry.getIn(["data", "category"]),
    excerpt: entry.getIn(["data", "excerpt"]),
  };

  const html = md().render(entry.getIn(["data", "body"]));

  return (
    <AdminPreview>
      <Container layout="md">
        <div className="pt-5 pb-32">
          <AnimalComponent animal={animalData} body={html} />
          <hr className="my-10 bg-gray-600" />
          <div className="max-w-xs">
            <AnimalCard animal={animalData} />
          </div>
        </div>
      </Container>
    </AdminPreview>
  );
};

// cms
const Component = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return import("netlify-cms-app").then((cms: CMS) => {
      cms.init({ config });
      cms.registerPreviewTemplate("animal", AnimalPreview);
    });
  },
  { ssr: false, loading: () => <p>Einen Moment...</p> }
);

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <Component />
    </>
  );
};

export default Page;
