import title from "../symbols/title";
import { CmsCollectionFile } from "decap-cms-core";
import image from "../symbols/image";
import markdown from "../symbols/markdown";
import meta from "../symbols/meta";
import header from "../symbols/header";
import cta from "../symbols/cta";

const therapie: CmsCollectionFile = {
  file: "content/page/psychotherapie.json",
  label: "Psychotherapie",
  name: "therapie",
  fields: [
    meta,
    header,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title,
        markdown,
        image,
        { label: "Markdown", name: "markdown2", widget: "markdown" },
      ],
    },
    {
      label: "Verfahren",
      name: "procedures",
      widget: "object",
      fields: [image, markdown],
    },
    cta,
  ],
};

export default therapie;
