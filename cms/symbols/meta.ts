import { CmsField } from "netlify-cms-core";

const meta: CmsField = {
  label: "Meta",
  name: "meta",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Beschreibung", name: "description", widget: "text" },
    { label: "Bild", name: "image", widget: "image", required: false },
  ],
};

export default meta;
