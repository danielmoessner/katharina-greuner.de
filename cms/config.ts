import page from "./page/index";
import article from "./article/index";
import category from "./category/index";
import setting from "./setting/index";
import legal from "./legal/index";
import seminar from "./seminar";
import dynamic from "./dynamic";

const config = {
  publish_mode: "simple",
  // See https://www.netlifycms.org/docs/configuration-options/#backend
  backend: {
    name: "github",
    repo: "danielmoessner/katharina-greuner.de",
    branch: "main",
    // GitHub auth requires an OAuth proxy/service (because this site is static on Strato).
    // Deploy an OAuth proxy and set these values (see README).
    base_url: "https://katharina-greuner-decap-proxy.katharina-greuner-decap-proxy.workers.dev",
    auth_endpoint: "auth",
    // Public GitHub OAuth client id (safe to commit). Secret stays in the OAuth provider.
    app_id: "Ov23liHUSdKZi36Ddn9D",
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
  collections: [page, dynamic, seminar, category, article, setting, legal],
};

export default config;
