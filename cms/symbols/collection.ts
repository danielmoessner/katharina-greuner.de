import { CmsField } from "netlify-cms-core";

const collection = (collection): CmsField => ({
  label: "Sammlung",
  name: "collection",
  widget: "hidden",
  default: collection,
});

export default collection;
