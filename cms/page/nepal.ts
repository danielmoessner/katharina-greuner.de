import meta from "../symbols/meta";
import { CmsCollectionFile } from "decap-cms-core";
import internalLink, { linkFields } from "../symbols/internalLink";
import header from "../symbols/header";
import title from "../symbols/title";
import text from "../symbols/text";
import image from "../symbols/image";
import cta from "../symbols/cta";
import markdown from "../symbols/markdown";

const nepal: CmsCollectionFile = {
  file: "content/page/nepal.json",
  label: "Nepal Projekt",
  name: "nepal",
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
        markdown,
        { label: "Markdown", name: "markdown2", widget: "markdown" },
        { label: "Bild", name: "image2", widget: "image" },
      ],
    },
    {
      label: "Beschreibung",
      name: "description",
      widget: "object",
      fields: [title, markdown],
    },
    {
      label: "Aktivitäten",
      name: "activities",
      widget: "object",
      fields: [
        title,
        text,
        {
          label: "Links",
          name: "links",
          widget: "list",
          fields: linkFields(true),
        },
        cta,
        image,
      ],
    },
  ],
};

export default nepal;
