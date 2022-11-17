import alt from "cms/symbols/alt";
import cta from "cms/symbols/cta";
import description from "cms/symbols/description";
import header from "cms/symbols/header";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import meta from "cms/symbols/meta";
import text from "cms/symbols/text";
import title from "cms/symbols/title";
import { CmsCollectionFile } from "netlify-cms-core";

const seminars: CmsCollectionFile = {
  file: "content/page/seminars.json",
  label: "Heilsame Seminare",
  name: "seminars",
  fields: [
    meta,
    header,
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [
        title,
        markdown,
        cta,
        image,
        alt,
        {
          label: "Seminare",
          name: "seminars",
          widget: "list",
          fields: [
            image,
            title,
            description,
            { label: "Fett", name: "bold", widget: "text" },
            {
              label: "Termine",
              name: "boldevent",
              widget: "object",
              fields: [
                { label: "Monat", name: "month", widget: "string" },
                {
                  label: "Jahr",
                  name: "year",
                  widget: "string",
                },
                { label: "Zeit", name: "time", widget: "string" },
              ],
            },
            cta,
            {
              label: "Erfahre mehr",
              name: "moreinfo",
              widget: "list",
              fields: [
                text,
                {
                  label: "Seminar Links",
                  name: "eventlinks",
                  widget: "list",
                  field: { label: "url", name: "url", widget: "string" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default seminars;
