import alt from "cms/symbols/alt";
import cta from "cms/symbols/cta";
import header from "cms/symbols/header";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import meta from "cms/symbols/meta";
import text from "cms/symbols/text";
import title from "cms/symbols/title";
import { CmsCollectionFile } from "netlify-cms-core";
import link from "next/link";

const blog: CmsCollectionFile = {
  file: "content/page/blog.json",
  label: "Blog",
  name: "blog",
  fields: [
    meta,
    header,
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [title, markdown, cta, image, alt],
    },
    { label: "Button", name: "button", widget: "string" },
    {
      label: "nebeninhalt",
      name: "asidecontent",
      widget: "object",
      fields: [
        title,
        image,
        text,
        link,
        { label: "Schlagworttitel", name: "markdowntitle", widget: "string" },
      ],
    },
  ],
};

export default blog;
