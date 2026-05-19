import { CmsField } from "decap-cms-core";
import { internalLinkFields } from "./link";

const cta: CmsField = {
  label: "CTA",
  name: "cta",
  widget: "object",
  fields: internalLinkFields,
};

export default cta;
