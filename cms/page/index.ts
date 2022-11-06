import { CmsCollection } from "netlify-cms-core";
import home from "./home";
import styleguide from "./styleguide";
import about from "./about";
import kala from "./kala";
import heal from "./heal";
import schooling from "./schooling";
import contact from "./contact";
import nepal from "./nepal";
// import yoga from "./yoga";
import seminar from "./seminar";
import seminars from "./seminars";
import therapie from "./psychotherapie";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [
    home,
    about,
    kala,
    heal,
    schooling,
    seminars,
    seminar,
    contact,
    nepal,
    styleguide,
    therapie,
  ],
};

export default config;
