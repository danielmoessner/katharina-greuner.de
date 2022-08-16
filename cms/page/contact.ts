import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import text from "cms/symbols/text";

const contact: CmsCollectionFile = {
  file: "content/page/contact.json",
  label: "Kontakt",
  name: "contact",
  fields: [
    meta,
    {
      label: "Kontakt",
      name: "contact",
      widget: "object",
      fields: [
        title,
        image,
        markdown,
        {
          label: "Formular",
          name: "form",
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string" },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Benötigt",
              name: "required",
              widget: "boolean",
              required: false,
            },
            {
              label: "Typ",
              name: "type",
              widget: "select",
              options: ["text", "email", "tel", "number"],
            },
            {
              label: "Element",
              name: "element",
              widget: "select",
              options: ["input", "textarea"],
            },
            {
              label: "Class",
              name: "className",
              widget: "string",
            },
          ],
        },
        { label: "Button", name: "button", widget: "string" },
      ],
    },
    {
      label: "Anfahrt",
      name: "directions",
      widget: "object",
      fields: [title, { label: "Maps", name: "maps", widget: "string" }],
    },
    {
      label: "Information",
      name: "information",
      widget: "list",
      fields: [title, markdown],
    },
    {
      label: "Newsletter",
      name: "newsletter",
      widget: "object",
      fields: [
        title,
        {
          label: "Formular",
          name: "form",
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string" },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Benötigt",
              name: "required",
              widget: "boolean",
              required: false,
            },
          ],
        },
        { label: "Button", name: "button", widget: "string" },
        text,
      ],
    },
  ],
};

export default contact;
