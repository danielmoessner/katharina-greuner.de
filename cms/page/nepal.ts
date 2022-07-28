import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import internalLink from "cms/symbols/internalLink";
import header from "cms/symbols/header";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import image from "cms/symbols/image";
import cta from "cms/symbols/cta";
import markdown from "cms/symbols/markdown";

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
          field: internalLink(true),
        },
        cta,
      ],
    },
  ],
};

export default nepal;
