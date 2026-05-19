import { linkFields } from "../symbols/internalLink";
import { externalLinkFields } from "../symbols/link";

const link = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(true),
  collapsed: false,
};

const text = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }],
};

const externalLink = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  fields: externalLinkFields,
  collapsed: false,
};

const footer = {
  file: "content/setting/footer.json",
  label: "Footer",
  name: "footer",
  fields: [
    { label: "Copyright", name: "copyright", widget: "string" },
    {
      label: "Spalten",
      name: "columns",
      widget: "list",
      collapsed: false,
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        {
          label: "Class (Experte)",
          name: "class",
          widget: "string",
          default: "col-span-6 md:col-span-3",
        },
        {
          label: "Inhalt",
          name: "content",
          widget: "list",
          types: [link, externalLink, text],
        },
      ],
    },
  ],
};

export default footer;
