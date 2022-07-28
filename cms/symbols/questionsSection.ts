import { CmsField } from "netlify-cms-core";
import cta from "./cta";
import image from "./image";
import text from "./text";

const questionsSection: CmsField = {
  label: "Fragen",
  name: "questions",
  widget: "object",
  fields: [text, cta, image],
};

export default questionsSection;
