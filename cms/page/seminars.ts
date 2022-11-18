import alt from "cms/symbols/alt";
import cta from "cms/symbols/cta";
import header from "cms/symbols/header";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import meta from "cms/symbols/meta";
import title from "cms/symbols/title";
import { CmsCollectionFile } from "netlify-cms-core";

const seminars: CmsCollectionFile = {
  file: "content/page/seminars.json",
  label: "Heilsame Seminare",
  name: "seminars",
  fields: [
    meta,
    header,
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [
        title,
        markdown,
        cta,
        image,
        alt,
        { label: "Seminar-Button", name: "seminarButton", widget: "string" },
      ],
    },
  ],
};

export default seminars;
