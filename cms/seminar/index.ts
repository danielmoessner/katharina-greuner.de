import alt from "cms/symbols/alt";
import cta from "cms/symbols/cta";
import description from "cms/symbols/description";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import slug from "cms/symbols/slug";
import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";

const seminar: CmsCollection = {
  name: "seminar",
  label: "Seminare",
  label_singular: "Seminar",
  extension: "json",
  editor: {
    preview: false,
  },
  folder: "content/seminar",
  slug: "{{slug}}",
  create: true,
  fields: [
    title,
    slug,
    description,
    image,
    {
      label: "Sektionen",
      name: "sections",
      widget: "list",
      types: [
        {
          label: "TextBild",
          name: "textimage",
          widget: "object",
          fields: [markdown, image, alt],
        },
        {
          label: "Text",
          name: "text",
          widget: "object",
          fields: [markdown],
        },
        {
          label: "BildText",
          name: "imagetext",
          widget: "object",
          fields: [image, alt, markdown],
        },
      ],
    },
    {
      label: "Termin",
      name: "date",
      widget: "object",
      fields: [
        { label: "Vortitel", name: "pretitle", widget: "string" },
        title,
        { label: "Termin", name: "date", widget: "string" },
        { label: "Kosten", name: "costs", widget: "string" },
        { label: "Ort", name: "location", widget: "string" },
        cta,
      ],
    },
  ],
};

export default seminar;
