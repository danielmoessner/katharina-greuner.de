import { CmsCollectionFile } from "netlify-cms-core";

const global: CmsCollectionFile = {
  file: "content/setting/global.json",
  label: "Global",
  name: "global",
  fields: [{ label: "Favicon", name: "favicon", widget: "image" }],
};

export default global;
