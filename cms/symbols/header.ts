import { CmsField } from "netlify-cms-core";

const header: CmsField = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "string", required: false },
    { label: "Bild", name: "image", widget: "image" },
  ],
};

export default header;
