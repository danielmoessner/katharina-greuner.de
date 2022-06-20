import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";

const home: CmsCollectionFile = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  fields: [
    meta,
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [{ label: "Titel", name: "title", widget: "text" }],
    },
    {
      label: "Über mich",
      name: "about",
      widget: "object",
      fields: [{ label: "Text", name: "text", widget: "text" }],
    },
    {
      label: "Reisen",
      name: "travel",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Button", name: "button", widget: "string" },
      ],
    },
  ],
};

export default home;
