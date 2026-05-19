const linkFields = [
  {
    label: "Text",
    name: "text",
    type: "string",
  },
  {
    label: "href",
    name: "href",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/",
  },
];

const link = {
  label: "Normales Item",
  name: "link",
  widget: "object",
  fields: linkFields,
  collapsed: false,
};

const links = {
  label: "Dropdown Item",
  name: "links",
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      widget: "string",
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      fields: linkFields,
    },
  ],
};

const navigation = {
  file: "content/setting/navigation.json",
  label: "Navigation",
  name: "navigation",
  fields: [
    {
      label: "Titel",
      name: "title",
      widget: "string",
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      collapsed: false,
      types: [link, links],
    },
  ],
};

export default navigation;
