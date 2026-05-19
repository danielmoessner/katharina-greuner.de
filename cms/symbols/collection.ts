import { CmsField } from "decap-cms-core";

const collection = (collection): CmsField => ({
  label: "Sammlung",
  name: "collection",
  widget: "hidden",
  default: collection,
});

export default collection;
