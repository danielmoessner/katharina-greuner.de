import cta from "./cta";
import image from "./image";
import text from "./text";

const questionsSection = {
  label: "Fragen",
  name: "questions",
  widget: "object",
  fields: [text, cta, image],
};

export default questionsSection;
