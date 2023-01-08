import cta from "cms/symbols/cta";
import image from "cms/symbols/image";
import meta from "cms/symbols/meta";
import text from "cms/symbols/text";
import title from "cms/symbols/title";
import { CmsCollectionFile } from "netlify-cms-core";

const blog: CmsCollectionFile = {
  file: "content/page/blog.json",
  label: "Blog",
  name: "blog",
  fields: [
    meta,
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [title],
    },
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [{ label: "Button", name: "button", widget: "string" }],
    },
    {
      label: "Spalte Rechts",
      name: "asidecontent",
      widget: "object",
      fields: [
        image,
        title,
        text,
        cta,
        { label: "Titel", name: "markdowntitle", widget: "string" },
      ],
    },
  ],
};

export default blog;
