import { CmsField } from "netlify-cms-core";

const slug = (slug): CmsField => ({
  label: "Slug",
  name: "slug",
  widget: "hidden",
  default: slug,
});

export default slug;
