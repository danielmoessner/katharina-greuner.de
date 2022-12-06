import alt from "cms/symbols/alt";
import cta from "cms/symbols/cta";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import slug from "cms/symbols/slug";
import string from "cms/symbols/string";
import text from "cms/symbols/text";
import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";

const seminar: CmsCollection = {
  name: "seminar",
  label: "Seminare",
  label_singular: "Seminar",
  extension: "json",
  editor: {
    preview: false,
  },
  folder: "content/seminar",
  slug: "{{slug}}",
  create: true,
  fields: [
    title,
    slug,
    {
      label: "Sortierung",
      name: "order",
      widget: "number",
      required: true,
    },
    {
      label: "Auf der Startseite anzeigen?",
      name: "showOnHome",
      widget: "boolean",
      required: false,
    },
    {
      label: "Auf der Seminarseite anzeigen?",
      name: "showOnSeminars",
      widget: "boolean",
      required: false,
    },
    {
      label: "Beschreibung (Erscheint unter Heilsame Seminare)",
      name: "description",
      widget: "text",
    },
    {
      label: "Termin (Erscheint unter Heilsame Seminare)",
      name: "date",
      widget: "string",
    },
    {
      label: "Kurzbeschreibung (Erscheint auf der Startseite)",
      name: "shortDescription",
      widget: "text",
    },
    {
      label: "Neues Bild",
      name: "newImage",
      widget: "image",
    },
    image,
    {
      label: "Sektionen",
      name: "sections",
      widget: "list",
      types: [
        {
          label: "Text Bild",
          name: "textimage",
          widget: "object",
          fields: [markdown, image, alt],
        },
        {
          label: "Text",
          name: "text",
          widget: "object",
          fields: [markdown],
        },
        {
          label: "Bild Text",
          name: "imagetext",
          widget: "object",
          fields: [image, alt, markdown],
        },
        {
          label: "Kundenstimme",
          name: "review",
          widget: "object",
          fields: [image, text, string],
        },
        {
          label: "Events",
          name: "events",
          widget: "object",
          fields: [
            title,
            {
              label: "Events",
              name: "events",
              widget: "list",
              fields: [
                { label: "Monat", name: "month", widget: "string" },
                {
                  label: "Datum",
                  name: "date",
                  widget: "datetime",
                  date_format: "DD.MM.YYYY",
                  time_format: false,
                },
                { label: "Zeit", name: "time", widget: "string" },
              ],
            },
            markdown,
            image,
          ],
        },
        {
          label: "Titel Text Bild Blume",
          name: "flowertitle",
          widget: "object",
          fields: [title, markdown, image],
        },
        {
          label: "Termin",
          name: "date",
          widget: "object",
          fields: [
            { label: "Vortitel", name: "pretitle", widget: "string" },
            title,
            {
              label: "Daten",
              name: "data",
              widget: "list",
              fields: [
                { label: "Schlüssel", name: "key", widget: "string" },
                { label: "Wert", name: "value", widget: "text" },
              ],
            },
            cta,
          ],
        },
        {
          label: "Yoga Termin",
          name: "yogadate",
          widget: "object",
          fields: [
            title,
            text,
            {
              label: "Daten",
              name: "yogadata",
              widget: "list",
              fields: [
                { label: "Schlüssel", name: "key", widget: "string" },
                { label: "Wert", name: "value", widget: "text" },
              ],
            },
            cta,
          ],
        },
        {
          label: "Titel Text Bild Text Button",
          name: "titletextimagetextbutton",
          widget: "object",
          fields: [title, text, image, alt, markdown, cta],
        },
        {
          label: "Titel Text Bild",
          name: "titletextimage",
          widget: "object",
          fields: [title, markdown, image, alt],
        },
        {
          label: "Titel Bild Text Button",
          name: "titleimagetextcta",
          widget: "object",
          fields: [title, image, alt, markdown, cta],
        },
      ],
    },
  ],
};

export default seminar;
