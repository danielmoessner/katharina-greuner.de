import {
  CmsCollectionFile,
  CmsFieldBase,
  CmsFieldObject,
} from "netlify-cms-core";

const linkFields = [
  {
    label: "Text",
    name: "text",
    type: "string",
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/",
  },
];

const link: CmsFieldBase & CmsFieldObject = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields,
  collapsed: false,
};

const text: CmsFieldBase & CmsFieldObject = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }],
};

const externalLinkFields = [
  {
    label: "Text",
    name: "text",
    type: "string",
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/",
  },
];

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
