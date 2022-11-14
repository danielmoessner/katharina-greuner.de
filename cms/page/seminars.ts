import alt from "cms/symbols/alt";
import cta from "cms/symbols/cta";
import description from "cms/symbols/description";
import header from "cms/symbols/header";
import image from "cms/symbols/image";
import markdown from "cms/symbols/markdown";
import meta from "cms/symbols/meta";
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
            cta,
            {
              label: "Link Button",
              name: "linkedbutton",
              widget: "object",
              fields: [cta],
            },
          ],
        },
      ],
    },
  ],
};

export default seminars;
