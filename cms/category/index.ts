import { CmsCollection } from "netlify-cms-core";

const category: CmsCollection = {
  name: "category",
  label: "Kategorien",
  label_singular: "Kategorie",
  extension: "json",
  editor: {
    preview: false,
  },
  folder: "content/category",
  slug: "{{slug}}",
  create: true,
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    {
      label: "Slug (Bitte nach Verwendung nicht mehr verändern)",
      name: "slug",
      widget: "string",
    },
  ],
};

export default category;
