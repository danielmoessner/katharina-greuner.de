import { CmsCollection } from "netlify-cms-core";
import home from "./home";
import styleguide from "./styleguide";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [home, styleguide],
};

export default config;
