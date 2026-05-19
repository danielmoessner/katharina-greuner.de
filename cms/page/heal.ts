import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "../symbols/title";
import image from "../symbols/image";
import cta from "../symbols/cta";
import markdown from "../symbols/markdown";
import slug from "../symbols/slug";

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
