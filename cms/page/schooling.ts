import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import header from "cms/symbols/header";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import cta from "cms/symbols/cta";
import markdown from "cms/symbols/markdown";
import string from "cms/symbols/string";
import questionsSection from "cms/symbols/questionsSection";

const schooling: CmsCollectionFile = {
  file: "content/page/schooling.json",
  label: "Ausbildung",
  name: "schooling",
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
      label: "Übersicht",
      name: "overview",
      widget: "object",
      fields: [
        title,
        {
          label: "Schritt",
          name: "step",
          widget: "list",
          fields: [image, title, string],
        },
      ],
    },
    {
      label: "Ausbildung",
      name: "schooling",
      widget: "object",
      fields: [
        title,
        {
          label: "Seminar",
          name: "seminar",
          widget: "list",
          fields: [
            image,
            title,
            string,
            markdown,
            { label: "Termin", name: "date", widget: "string" },
            { label: "Kosten", name: "costs", widget: "string" },
            { label: "Ort", name: "location", widget: "string" },
            { label: "Beschreibung", name: "markdown2", widget: "markdown" },
          ],
        },
        cta,
      ],
    },
    questionsSection,
  ],
};

export default schooling;
