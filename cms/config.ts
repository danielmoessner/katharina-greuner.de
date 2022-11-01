import page from "./page/index";
import article from "./article/index";
import category from "./category/index";
import setting from "./setting/index";
import legal from "./legal/index";
import { CmsConfig } from "netlify-cms-core";
import seminar from "./seminar";

const config: CmsConfig = {
  publish_mode: "simple",
  // See https://www.netlifycms.org/docs/configuration-options/#backend
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/katharina-greuner.de",
  },
  // See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
  local_backend: true,
  // See https://www.netlifycms.org/docs/configuration-options/#locale
  locale: "de",
  // See https://www.netlifycms.org/docs/configuration-options/#display-url
  display_url: "https://katharina-greuner.de",
  // See https://www.netlifycms.org/docs/configuration-options/#site-url
  site_url: "https://katharina-greuner.de",
  // See https://www.netlifycms.org/docs/configuration-options/#media-folder
  media_folder: "/public/media",
  // See https://www.netlifycms.org/docs/configuration-options/#public-folder
  public_folder: "/media",
  // See https://www.netlifycms.org/docs/beta-features/#manual-initialization
  load_config_file: false,
  // See https://www.netlifycms.org/docs/collection-types/
  collections: [page, seminar, category, setting, legal, article],
};

export default config;
