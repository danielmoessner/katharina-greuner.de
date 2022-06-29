import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import internalLink from "cms/symbols/internalLink";

const about: CmsCollectionFile = {
  file: "content/page/about.json",
  label: "Über mich",
  name: "about",
  fields: [
    meta,
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "text", required: false },
      ],
    },
    {
      label: "Über mich",
      name: "about",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Bild", name: "image", widget: "image" },
        {
          label: "Titel Inhaltsverzeichnis",
          name: "titleTableOfContents",
          widget: "string",
        },
        {
          label: "Inhaltsverzeichnis",
          name: "tableOfContents",
          widget: "list",
          field: internalLink(),
        },
        {
          label: "Titel Arbeitsprinzipien",
          name: "titlePrinciples",
          widget: "string",
        },
        { label: "Text", name: "textPrinciples", widget: "text" },
      ],
    },
    {
      label: "Stichworte",
      name: "keywords",
      widget: "object",
      fields: [
        { label: "Bild", name: "image", widget: "image" },
        { label: "Titel", name: "title", widget: "string" },
        {
          label: "Punkte",
          name: "points",
          widget: "list",
          field: {
            label: "Punkt",
            name: "point",
            widget: "string",
          },
        },
      ],
    },
    {
      label: "Persönlicher Berufsweg",
      name: "career",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },

        { label: "Lebenslauf Titel", name: "careerTitle", widget: "string" },
        {
          label: "Lebenslauf",
          name: "career",
          widget: "list",
          fields: [
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Eintrag",
              name: "entries",
              widget: "list",
              fields: [
                {
                  label: "Jahr",
                  name: "year",
                  widget: "string",
                },
                {
                  label: "Text",
                  name: "text",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Blöcke",
      name: "blocks",
      widget: "list",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        internalLink(),
        { label: "Bild", name: "image", widget: "image" },
      ],
    },
  ],
};

export default about;
