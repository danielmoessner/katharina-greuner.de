import { CmsField } from "netlify-cms-core";

const header: CmsField = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "text", required: false },
    { label: "Position", name: "position", widget: "string", required: false },
    { label: "Farbe", name: "color", widget: "string", required: false },
    { label: "Bild", name: "image", widget: "image" },
  ],
};

export default header;
