import { CMS } from "netlify-cms-core";
import dynamic from "next/dynamic";
import config from "../cms/config";
import React from "react";
// import { de } from "netlify-cms-locales";
import AnimalComponent from "../components/Animal";
import AnimalCard from "../components/AnimalCard";
import Container from "../components/Container";
import { Animal } from "../types/animal";

// previews
const AnimalPreview = ({ entry, widgetFor }) => {
  const animalData: Animal = {
    slug: "-",
    image: null,
    title: entry.getIn(["data", "title"]),
    category: entry.getIn(["data", "category"]),
    excerpt: entry.getIn(["data", "excerpt"]),
  };
  return (
    <Container layout="md">
      <div className="pt-5 pb-32">
        <AnimalComponent
          preview
          animal={animalData}
          image={widgetFor("image")}
          body={widgetFor("body")}
        />
        <hr className="my-10 bg-gray-600" />
        <div className="max-w-xs">
          <AnimalCard preview animal={animalData} image={widgetFor("image")} />
        </div>
      </div>
    </Container>
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

      // fix styles
      setTimeout(() => {
        // cms.registerLocale("de", de);
        const style: HTMLStyleElement | undefined =
          document.querySelector("style");
        const iframe: HTMLIFrameElement | undefined =
          document.querySelector("#preview-pane");
        const link: HTMLLinkElement | undefined = document.querySelector(
          "link[rel='stylesheet']"
        );
        if (iframe && style) iframe.contentDocument.head.after(style);
        if (iframe && link) iframe.contentDocument.head.after(link);
      }, 1000);

      cms.registerPreviewTemplate("animal", AnimalPreview);
    });
  },
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Page: React.FC = () => {
  return <Component />;
};

export default Page;
