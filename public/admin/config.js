// cms/symbols/meta.ts
var meta = {
  label: "Meta",
  name: "meta",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Beschreibung", name: "description", widget: "text" },
    { label: "Bild", name: "image", widget: "image", required: false }
  ]
};
var meta_default = meta;

// cms/symbols/header.ts
var header = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "string", required: false },
    { label: "Bild", name: "image", widget: "image" }
  ]
};
var header_default = header;

// cms/page/home.ts
var home = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  fields: [
    meta_default,
    header_default,
    {
      label: "\xDCber mich",
      name: "about",
      widget: "object",
      fields: [{ label: "Text", name: "text", widget: "text" }]
    },
    {
      label: "Reisen",
      name: "travel",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Button", name: "button", widget: "string" }
      ]
    }
  ]
};
var home_default = home;

// cms/page/styleguide.ts
var styleguide = {
  file: "content/page/styleguide.json",
  label: "Styleguide",
  name: "styleguide",
  fields: [meta_default, header_default]
};
var styleguide_default = styleguide;

// cms/symbols/internalLink.ts
var linkFields = (required) => [
  {
    label: "Text",
    name: "text",
    type: "string",
    required
  },
  {
    label: "url",
    name: "url",
    type: "string",
    required,
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/"
  }
];
var internalLink = (required = false) => ({
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(required),
  required,
  collapsed: false
});
var internalLink_default = internalLink;

// cms/page/about.ts
var about = {
  file: "content/page/about.json",
  label: "\xDCber mich",
  name: "about",
  fields: [
    meta_default,
    header_default,
    {
      label: "\xDCber mich",
      name: "about",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Bild", name: "image", widget: "image" },
        {
          label: "Titel Inhaltsverzeichnis",
          name: "titleTableOfContents",
          widget: "string"
        },
        {
          label: "Inhaltsverzeichnis",
          name: "tableOfContents",
          widget: "list",
          field: internalLink_default()
        },
        {
          label: "Titel Arbeitsprinzipien",
          name: "titlePrinciples",
          widget: "string"
        },
        { label: "Text", name: "textPrinciples", widget: "text" }
      ]
    },
    {
      label: "Stichworte",
      name: "keywords",
      widget: "object",
      fields: [
        { label: "Bild", name: "image", widget: "image" },
        { label: "Titel", name: "title", widget: "string" },
        {
          label: "Punkte",
          name: "points",
          widget: "list",
          field: {
            label: "Punkt",
            name: "point",
            widget: "string"
          }
        }
      ]
    },
    {
      label: "Pers\xF6nlicher Berufsweg",
      name: "career",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Lebenslauf Titel", name: "careerTitle", widget: "string" },
        {
          label: "Lebenslauf",
          name: "career",
          widget: "list",
          fields: [
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Eintrag",
              name: "entries",
              widget: "list",
              fields: [
                {
                  label: "Jahr",
                  name: "year",
                  widget: "string"
                },
                {
                  label: "Text",
                  name: "text",
                  widget: "string"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Bl\xF6cke",
      name: "blocks",
      widget: "list",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        internalLink_default(),
        { label: "Bild", name: "image", widget: "image" }
      ]
    }
  ]
};
var about_default = about;

// cms/page/index.ts
var config = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false
  },
  files: [home_default, about_default, styleguide_default]
};
var page_default = config;

// cms/animal/index.ts
var animal = {
  name: "animal",
  label: "Wildtiere",
  label_singular: "Wildtier",
  editor: {
    preview: false
  },
  folder: "content/animal",
  slug: "{{fields.slug}}",
  create: true,
  preview_path: "wildtiere/{{fields.slug}}",
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Bild", name: "image", widget: "image" },
    { label: "Auszug", name: "excerpt", widget: "text" },
    { label: "Inhalt", name: "body", widget: "markdown" },
    {
      label: "Kategorie",
      name: "category",
      widget: "relation",
      collection: "category",
      search_fields: ["title"],
      value_field: "title"
    }
  ]
};
var animal_default = animal;

// cms/category/index.ts
var category = {
  name: "category",
  label: "Kategorien",
  label_singular: "Kategorie",
  extension: "json",
  editor: {
    preview: false
  },
  folder: "content/category",
  slug: "{{slug}}",
  create: true,
  fields: [{ label: "Titel", name: "title", widget: "string" }]
};
var category_default = category;

// cms/setting/footer.ts
var linkFields2 = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/"
  }
];
var link = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields2,
  collapsed: false
};
var text = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }]
};
var externalLinkFields = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/"
  }
];
var externalLink = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  fields: externalLinkFields,
  collapsed: false
};
var footer = {
  file: "content/setting/footer.json",
  label: "Footer",
  name: "footer",
  fields: [
    { label: "Copyright", name: "copyright", widget: "string" },
    {
      label: "Spalten",
      name: "columns",
      widget: "list",
      collapsed: false,
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        {
          label: "Class (Experte)",
          name: "class",
          widget: "string",
          default: "col-span-6 md:col-span-3"
        },
        {
          label: "Inhalt",
          name: "content",
          widget: "list",
          types: [link, externalLink, text]
        }
      ]
    }
  ]
};
var footer_default = footer;

// cms/setting/global.ts
var global = {
  file: "content/setting/global.json",
  label: "Global",
  name: "global",
  fields: [{ label: "Favicon", name: "favicon", widget: "image" }]
};
var global_default = global;

// cms/setting/navigation.ts
var linkFields3 = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/"
  }
];
var link2 = {
  label: "Normales Item",
  name: "link",
  widget: "object",
  fields: linkFields3,
  collapsed: false
};
var links = {
  label: "Dropdown Item",
  name: "links",
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      widget: "string"
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      fields: linkFields3
    }
  ]
};
var navigation = {
  file: "content/setting/navigation.json",
  label: "Navigation",
  name: "navigation",
  fields: [
    {
      label: "Titel",
      name: "title",
      widget: "string"
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      collapsed: false,
      types: [link2, links]
    }
  ]
};
var navigation_default = navigation;

// cms/setting/index.ts
var setting = {
  name: "setting",
  label: "Einstellungen",
  label_singular: "Einstellung",
  delete: false,
  editor: {
    preview: false
  },
  files: [global_default, navigation_default, footer_default]
};
var setting_default = setting;

// cms/legal/index.ts
var legal = {
  name: "legal",
  label: "Rechtliches",
  label_singular: "Rechtliches",
  extension: "md",
  editor: {
    preview: false
  },
  folder: "content/legal",
  slug: "{{fields.slug}}",
  create: true,
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Inhalt", name: "body", widget: "markdown" }
  ]
};
var legal_default = legal;

// cms/config.ts
var config2 = {
  publish_mode: "editorial_workflow",
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/nextjs.tortuga-webdesign.de"
  },
  local_backend: true,
  locale: "de",
  display_url: "https://nextjs.tortuga-webdesign.de",
  site_url: "https://nextjs.tortuga-webdesign.de",
  media_folder: "/public/media",
  public_folder: "/media",
  load_config_file: false,
  collections: [page_default, animal_default, category_default, setting_default, legal_default]
};
var config_default = config2;
export {
  config_default as default
};
