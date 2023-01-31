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
      label: "Kategorien",
      name: "categories",
      widget: "relation",
      multiple: true,
      collection: "category",
      search_fields: ["title"],
      value_field: "slug",
      display_fields: ["title"],
    },
    {
      label: "Datum",
      name: "date",
      widget: "datetime",
      date_format: "DD.MM.YYYY",
      time_format: false,
      format: "YYYY-MM-DD",
    },
    {
      label: "Bild",
      name: "image",
      widget: "image",
      required: false,
    },
    {
      label: "Beschreibung",
      name: "description",
      widget: "text",
    },
    markdown,
    {
      label: "comments",
      name: "comments",
      widget: "list",
      fields: [
        { label: "Autor", name: "author", widget: "string" },
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
  ],
};

export default article;
