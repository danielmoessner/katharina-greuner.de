import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import header from "cms/symbols/header";
import text from "cms/symbols/text";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import cta from "cms/symbols/cta";

const home: CmsCollectionFile = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  fields: [
    meta,
    header,
    {
      label: "Events",
      name: "events",
      widget: "object",
      fields: [{ label: "Button", name: "button", widget: "string" }],
    },
    {
      label: "Angebotsübersicht",
      name: "offeroverview",
      widget: "list",
      fields: [
        image,
        title,
        text,
        cta,
        { label: "Button", name: "button", widget: "string" },
      ],
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
