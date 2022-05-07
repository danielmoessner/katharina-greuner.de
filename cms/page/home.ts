import meta from "../symbols/meta";
import collection from "../symbols/collection";
import slug from "../symbols/slug";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";

const home: CmsCollectionFile = {
  file: "content/page/home.md",
  label: "Startseite",
  name: "home",
  fields: [collection("page"), slug("home"), meta, header],
};

export default home;
