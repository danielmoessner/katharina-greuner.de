import slug from "cms/symbols/slug";
import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";
import markdown from "cms/symbols/markdown";

const article: CmsCollection = {
  name: "article",
  label: "Artikel",
  label_singular: "Artikel",
  extension: "json",
  editor: {
    preview: false,
  },
  folder: "content/article",
  slug: "{{slug}}",
  create: true,
  fields: [
    title,
    slug,
    {
      label: "Datum",
      name: "date",
      widget: "datetime",
      date_format: "DD.MM.YYYY",
      time_format: false,
    },
    {
      label: "Bild",
      name: "image",
      widget: "image",
      required: false,
    },
    markdown,
    {
      label: "comments",
      name: "comments",
      widget: "list",
      fields: [
        { label: "Autor", name: "autor", widget: "string" },
        {
          label: "Datum",
          name: "date",
          widget: "datetime",
          date_format: "DD.MM.YYYY",
          time_format: false,
        },
        { label: "Text", name: "text", widget: "text" },
      ],
    },
    {
      label: "Beschreibung",
      name: "description",
      widget: "text",
    },
  ],
};

export default article;
