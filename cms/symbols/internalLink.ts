import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

export const linkFields = (required) => [
  {
    label: "Text",
    name: "text",
    type: "string",
    required: required,
  },
  {
    label: "href",
    name: "href",
    type: "string",
    required: required,
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt",
  },
];

const internalLink = (required = false): CmsFieldBase & CmsFieldObject => ({
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(required),
  required: required,
  collapsed: false,
});

export default internalLink;

// import { CmsField } from "netlify-cms-core";

// const slug = (slug): CmsField => ({
//   label: "Slug",
//   name: "slug",
//   widget: "hidden",
//   default: slug,
// });

// export default slug;
