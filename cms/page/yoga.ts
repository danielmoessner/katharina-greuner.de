import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import internalLink from "cms/symbols/internalLink";
import header from "cms/symbols/header";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import image from "cms/symbols/image";
import cta from "cms/symbols/cta";
import markdown from "cms/symbols/markdown";

const yoga: CmsCollectionFile = {
  file: "content/page/yoga.json",
  label: "Yoga",
  name: "yoga",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title, { label: "Titel", name: "title2", widget: "string" }],
    },
    {
      label: "Kurse",
      name: "course2",
      widget: "object",
      fields: [title, { label: "Titel", name: "title2", widget: "string" }],
    },
    { label: "Kurse", name: "course", widget: "object", fields: [title] },
    //[fields: [title, { label: "Titel", name: "title2", widget: "string" }],
  ],
};

export default yoga;
