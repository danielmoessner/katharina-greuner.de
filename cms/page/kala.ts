import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import header from "cms/symbols/header";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import image from "cms/symbols/image";
import cta from "cms/symbols/cta";
import markdown from "cms/symbols/markdown";

const kala: CmsCollectionFile = {
  file: "content/page/kala.json",
  label: "Kala Heilarbeit",
  name: "kala",
  fields: [
    meta,
    header,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title,
        image,
        text,
        { label: "Text", name: "text2", widget: "text" },
        cta,
        { label: "Bild", name: "image2", widget: "image" },
      ],
    },
    {
      label: "Blume",
      name: "flower",
      widget: "object",
      fields: [
        {
          label: "Links",
          name: "links",
          widget: "list",
          field: {
            label: "href",
            name: "href",
            widget: "string",
            hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt",
          },
        },
        markdown,
      ],
    },
    {
      label: "Fragen",
      name: "questions",
      widget: "object",
      fields: [text, cta, image],
    },
  ],
};

export default kala;
