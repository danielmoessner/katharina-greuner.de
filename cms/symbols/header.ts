import { CmsField } from "netlify-cms-core";

const header: CmsField = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Text", name: "text", widget: "text" },
  ],
};

export default header;
