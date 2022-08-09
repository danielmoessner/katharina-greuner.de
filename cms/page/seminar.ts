import { CmsCollectionFile } from "netlify-cms-core";

const seminar: CmsCollectionFile = {
  file: "content/page/seminar.json",
  label: "Seminar",
  name: "seminar",
  fields: [
    {
      label: "Termin",
      name: "description",
      widget: "object",
      fields: [
        { label: "Wann", name: "date", widget: "string" },
        { label: "Kosten", name: "costs", widget: "string" },
        { label: "Ort", name: "location", widget: "string" },
      ],
    },
  ],
};

export default seminar;
