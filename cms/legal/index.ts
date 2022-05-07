import { CmsCollection } from "netlify-cms-core";
import collection from "../symbols/collection";

const legal: CmsCollection = {
  name: "legal",
  label: "Rechtliches",
  label_singular: "Rechtliches",
  extension: "md",
  editor: {
    preview: false,
  },
  folder: "content/legal",
  slug: "{{fields.slug}}",
  create: true,
  fields: [
    collection("legal"),
    { label: "Titel", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Inhalt", name: "body", widget: "markdown" },
  ],
};

export default legal;
