import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import cta from "cms/symbols/cta";
import markdown from "cms/symbols/markdown";
import slug from "cms/symbols/slug";

const heal: CmsCollectionFile = {
  file: "content/page/heal.json",
  label: "Heilweisen",
  name: "heal",
  fields: [
    meta,
    {
      label: "Heilweisen",
      name: "heal",
      widget: "object",
      fields: [
        title,
        {
          label: "Items",
          name: "items",
          widget: "list",
          fields: [image, slug, title, markdown, cta],
        },
      ],
    },
  ],
};

export default heal;
