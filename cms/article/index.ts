import slug from "cms/symbols/slug";
import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";
import image from "cms/symbols/image";
import alt from "cms/symbols/alt";
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
    image,
    markdown,
    {
      label: "comments",
      name: "comments",
      widget: "list",
      fields: [title],
    },
  ],
};

export default article;
