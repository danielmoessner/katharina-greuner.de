import { CmsField } from "netlify-cms-core";

const markdown: CmsField = {
  label: "Markdown",
  name: "markdown",
  i18n: true,
  widget: "markdown",
  hint: "Bitte nur Überschriften vom Typ h3 verwenden.",
};

export default markdown;
