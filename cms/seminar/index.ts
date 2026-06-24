import alt from "../symbols/alt";
import cta from "../symbols/cta";
import image from "../symbols/image";
import id from "../symbols/id";
import markdown from "../symbols/markdown";
import slug from "../symbols/slug";
import string from "../symbols/string";
import text from "../symbols/text";
import title from "../symbols/title";

const seminar = {
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
          fields: [id, markdown, image, alt],
        },
        {
          label: "Text",
          name: "text",
          widget: "object",
          fields: [id, markdown],
        },
        {
          label: "Heading",
          name: "heading",
          widget: "object",
          fields: [id, title],
        },
        {
          label: "Bild Text",
          name: "imagetext",
          widget: "object",
          fields: [id, image, alt, markdown],
        },
        {
          label: "Kundenstimme",
          name: "review",
          widget: "object",
          fields: [id, image, text, string],
        },
        {
          label: "Events",
          name: "events",
          widget: "object",
          fields: [
            id,
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
          fields: [id, title, markdown, image],
        },
        {
          label: "Termin",
          name: "date",
          widget: "object",
          fields: [
            id,
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
            id,
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
          fields: [id, title, text, image, alt, markdown, cta],
        },
        {
          label: "Titel Text Bild",
          name: "titletextimage",
          widget: "object",
          fields: [id, title, markdown, image, alt],
        },
        {
          label: "Titel Bild Text Button",
          name: "titleimagetextcta",
          widget: "object",
          fields: [id, title, image, alt, markdown, cta],
        },
        {
          label: "Banner",
          name: "banner",
          widget: "object",
          fields: [id, title, markdown],
        },
        {
          label: "Banner Pretitle",
          name: "prebanner",
          widget: "object",
          fields: [
            id,
            title,
            { label: "Vortitel", name: "pretitle", widget: "string" },
            markdown,
          ],
        },
        {
          label: "Banner Pretitle 2",
          name: "prebanner2",
          widget: "object",
          fields: [
            id,
            title,
            { label: "Vortitel 2", name: "pretitle2", widget: "string" },
            markdown,
          ],
        },
        {
          label: "Yoga Termine Übersicht ",
          name: "yogadateoverview",
          widget: "object",
          fields: [id, title, markdown, text, cta],
        },
        {
          label: "Seminar Fokus Links",
          name: "seminarfocuslinks",
          widget: "object",
          fields: [
            id,
            title,
            text,
            {
              label: "Buttons",
              name: "ctas",
              widget: "list",
              fields: [
                { label: "Text", name: "text", widget: "string" },
                { label: "Link", name: "href", widget: "string" },
              ],
            },
          ],
        },
        {
          label: "FAQ",
          name: "faq",
          widget: "object",
          fields: [
            id,
            title,
            {
              label: "Fragen",
              name: "items",
              widget: "list",
              fields: [
                { label: "Frage", name: "question", widget: "string" },
                { label: "Antwort", name: "answer", widget: "text" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default seminar;
