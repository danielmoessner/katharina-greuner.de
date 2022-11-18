import { linkFields } from "cms/symbols/internalLink";
import { externalLinkFields } from "cms/symbols/link";
import {
  CmsCollectionFile,
  CmsFieldBase,
  CmsFieldObject,
} from "netlify-cms-core";

const link: CmsFieldBase & CmsFieldObject = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(true),
  collapsed: false,
};

const text: CmsFieldBase & CmsFieldObject = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }],
};

const externalLink: CmsFieldBase & CmsFieldObject = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  fields: externalLinkFields,
  collapsed: false,
};

const footer: CmsCollectionFile = {
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
