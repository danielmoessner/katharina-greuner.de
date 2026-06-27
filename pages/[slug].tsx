export { default } from "./seminar/[slug]";

import { renderContent } from "../lib/renderContent";
import { getAllJson } from "../lib/getContent";

export async function getStaticProps({ params }) {
  const dynamicData = getAllJson("dynamic");
  const pageData = dynamicData.find((item) => item.slug === params.slug);
  const seminarData = await renderContent(pageData);

  return {
    props: {
      seminarData,
    },
  };
}

export async function getStaticPaths() {
  const items = getAllJson("dynamic");

  return {
    paths: items.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
}
