import cta from "cms/symbols/cta";
import image from "cms/symbols/image";
import meta from "cms/symbols/meta";
import text from "cms/symbols/text";
import title from "cms/symbols/title";
import { CmsCollectionFile } from "netlify-cms-core";

const blog: CmsCollectionFile = {
  file: "content/page/blog.json",
  label: "Blog",
  name: "blog",
  fields: [
    meta,
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [title],
    },
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [{ label: "Button", name: "button", widget: "string" }],
    },
    {
      label: "Spalte Rechts",
      name: "aside",
      widget: "object",
      fields: [
        image,
        title,
        text,
        cta,
        { label: "Titel", name: "categoriesTitle", widget: "string" },
        {
          label: "Newsletter",
          name: "newsletter",
          widget: "object",
          fields: [
            title,
            {
              label: "Felder",
              name: "fields",
              widget: "list",
              fields: [
                { label: "label", name: "label", widget: "string" },
                { label: "Name", name: "name", widget: "string" },
                { label: "Class", name: "className", widget: "string" },
              ],
            },
            { label: "Erfolg", name: "success", widget: "text" },
            { label: "Button", name: "button", widget: "string" },
            { label: "Datenschutz", name: "privacy", widget: "text" },
          ],
        },
      ],
    },
    {
      label: "Kommentarsektion",
      name: "comments",
      widget: "object",
      fields: [
        title,
        text,
        {
          label: "Felder",
          name: "fields",
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string" },
            { label: "Element", name: "element", widget: "string" },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Class",
              name: "className",
              widget: "string",
              required: false,
            },
          ],
        },
        { label: "Erfolg", name: "success", widget: "text" },
        { label: "Button", name: "button", widget: "string" },
      ],
    },
  ],
};

export default blog;
