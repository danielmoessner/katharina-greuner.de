import { CmsField } from "netlify-cms-core";

const slug: CmsField = {
  label: "Slug",
  name: "slug",
  widget: "string",
  hint: 'Bitte nur Kleinbuchstaben, Zahlen und Bindestriche verwenden. Der Slug beschreibt die URL dieses Objektes. Ein Beispielwert ist "mein-toller-artikel".',
};

export default slug;
