import alt from "../symbols/alt";
import cta from "../symbols/cta";
import header from "../symbols/header";
import image from "../symbols/image";
import markdown from "../symbols/markdown";
import meta from "../symbols/meta";
import title from "../symbols/title";
import { CmsCollectionFile } from "decap-cms-core";

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
