import slug from "../symbols/slug";
import collection from "../symbols/collection";
import { CmsCollectionFile } from "netlify-cms-core";

const global: CmsCollectionFile = {
  file: "content/setting/global.json",
  label: "Global",
  name: "global",
  fields: [
    collection("setting"),
    slug("global"),
    { label: "Favicon", name: "favicon", widget: "image" },
    {
      label: "Tortuga Webdesign Logo",
      name: "tortugaWebdesignLogo",
      widget: "text",
    },
  ],
};

export default global;
