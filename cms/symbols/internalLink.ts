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

const internalLink = (required = false) => ({
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(required),
  required: required,
  collapsed: false,
});

export default internalLink;
