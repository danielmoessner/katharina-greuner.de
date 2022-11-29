import { CmsField, CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

export const externalLinkFields: CmsField[] = [
  {
    label: "Text",
    
    name: "text",
    widget: "string",
  },
  {
    label: "href",
    
    name: "href",
    widget: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/",
  },
];

export const externalLink: CmsFieldBase & CmsFieldObject = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  
  fields: externalLinkFields,
  collapsed: false,
};

export const internalLinkFields: CmsField[] = [
  {
    label: "Text",
    name: "text",
    widget: "string",
  },
  {
    label: "href",
    name: "href",
    widget: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt",
  },
];

export const internalLink: CmsFieldBase & CmsFieldObject = {
  label: "Interner Link",
  name: "link",
  
  widget: "object",
  fields: internalLinkFields,
  collapsed: false,
};
