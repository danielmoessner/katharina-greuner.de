import title from "cms/symbols/title";
import { CmsCollectionFile } from "netlify-cms-core";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import meta from "cms/symbols/meta";
import header from "cms/symbols/header";
import cta from "cms/symbols/cta";

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
