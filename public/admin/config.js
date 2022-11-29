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

// cms/symbols/text.ts
var text = {
  label: "Text",
  name: "text",
  widget: "text",
  i18n: true
};
var text_default = text;

// cms/symbols/title.ts
var title = {
  label: "Titel",
  name: "title",
  widget: "string"
};
var title_default = title;

// cms/symbols/image.ts
var image = {
  label: "Bild",
  name: "image",
  widget: "image",
  i18n: true
};
var image_default = image;

// cms/symbols/link.ts
var externalLinkFields = [
  {
    label: "Text",
    i18n: true,
    name: "text",
    widget: "string"
  },
  {
    label: "href",
    i18n: true,
    name: "href",
    widget: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/"
  }
];
var internalLinkFields = [
  {
    label: "Text",
    name: "text",
    widget: "string"
  },
  {
    label: "href",
    name: "href",
    widget: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
  }
];

// cms/symbols/cta.ts
var cta = {
  label: "CTA",
  name: "cta",
  i18n: true,
  widget: "object",
  fields: internalLinkFields
};
var cta_default = cta;

// cms/page/home.ts
var home = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  fields: [
    meta_default,
    header_default,
    {
      label: "Events",
      name: "events",
      widget: "object",
      fields: [{ label: "Button", name: "button", widget: "string" }]
    },
    {
      label: "Angebots\xFCbersicht",
      name: "offeroverview",
      widget: "list",
      fields: [
        image_default,
        title_default,
        text_default,
        cta_default,
        { label: "Button", name: "button", widget: "string" }
      ]
    },
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
        cta_default,
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Button", name: "button", widget: "string" }
      ]
    }
  ]
};
var home_default = home;

// cms/symbols/internalLink.ts
var linkFields = (required) => [
  {
    label: "Text",
    name: "text",
    type: "string",
    required
  },
  {
    label: "href",
    name: "href",
    type: "string",
    required,
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
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

// cms/symbols/markdown.ts
var markdown = {
  label: "Markdown",
  name: "markdown",
  widget: "markdown",
  hint: "Bitte nur \xDCberschriften vom Typ h3 verwenden."
};
var markdown_default = markdown;

// cms/page/kala.ts
var kala = {
  file: "content/page/kala.json",
  label: "Kala Heilarbeit",
  name: "kala",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        text_default,
        { label: "Text", name: "text2", widget: "text" },
        cta_default,
        { label: "Bild", name: "image2", widget: "image" }
      ]
    },
    {
      label: "Blume",
      name: "flower",
      widget: "object",
      fields: [
        {
          label: "Links",
          name: "links",
          widget: "list",
          field: {
            label: "href",
            name: "href",
            widget: "string",
            hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
          }
        },
        markdown_default
      ]
    },
    {
      label: "Fragen",
      name: "questions",
      widget: "object",
      fields: [text_default, cta_default, image_default]
    }
  ]
};
var kala_default = kala;

// cms/symbols/slug.ts
var slug = {
  label: "Slug",
  name: "slug",
  widget: "string",
  hint: 'Bitte nur Kleinbuchstaben, Zahlen und Bindestriche verwenden. Der Slug beschreibt die URL dieses Objektes. Ein Beispielwert ist "mein-toller-artikel".'
};
var slug_default = slug;

// cms/page/heal.ts
var heal = {
  file: "content/page/heal.json",
  label: "Heilweisen",
  name: "heal",
  fields: [
    meta_default,
    {
      label: "Heilweisen",
      name: "heal",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Items",
          name: "items",
          widget: "list",
          fields: [image_default, slug_default, title_default, markdown_default, cta_default]
        }
      ]
    }
  ]
};
var heal_default = heal;

// cms/symbols/string.ts
var string = {
  label: "Text",
  name: "string",
  widget: "string",
  i18n: true
};
var string_default = string;

// cms/symbols/questionsSection.ts
var questionsSection = {
  label: "Fragen",
  name: "questions",
  widget: "object",
  fields: [text_default, cta_default, image_default]
};
var questionsSection_default = questionsSection;

// cms/page/schooling.ts
var schooling = {
  file: "content/page/schooling.json",
  label: "Ausbildung",
  name: "schooling",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        markdown_default,
        { label: "Markdown", name: "markdown2", widget: "markdown" },
        { label: "Bild", name: "image2", widget: "image" }
      ]
    },
    {
      label: "\xDCbersicht",
      name: "overview",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Schritt",
          name: "step",
          widget: "list",
          fields: [image_default, title_default, string_default]
        }
      ]
    },
    {
      label: "Ausbildung",
      name: "schooling",
      widget: "object",
      fields: [
        title_default,
        { label: "Termin", name: "date", widget: "string" },
        { label: "Kosten", name: "costs", widget: "string" },
        { label: "Ort", name: "location", widget: "string" },
        {
          label: "Seminar",
          name: "seminar",
          widget: "list",
          fields: [
            image_default,
            title_default,
            string_default,
            markdown_default,
            { label: "Termin", name: "date", widget: "string" },
            { label: "Kosten", name: "costs", widget: "string" },
            { label: "Ort", name: "location", widget: "string" },
            { label: "Beschreibung", name: "markdown2", widget: "markdown" }
          ]
        },
        cta_default
      ]
    },
    questionsSection_default
  ]
};
var schooling_default = schooling;

// cms/page/contact.ts
var contact = {
  file: "content/page/contact.json",
  label: "Kontakt",
  name: "contact",
  fields: [
    meta_default,
    {
      label: "Kontakt",
      name: "contact",
      widget: "object",
      fields: [
        title_default,
        image_default,
        markdown_default,
        {
          label: "Formular",
          name: "form",
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string" },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Ben\xF6tigt",
              name: "required",
              widget: "boolean",
              required: false
            },
            {
              label: "Typ",
              name: "type",
              widget: "select",
              options: ["text", "email", "tel", "number"]
            },
            {
              label: "Element",
              name: "element",
              widget: "select",
              options: ["input", "textarea"]
            },
            {
              label: "Class",
              name: "className",
              widget: "string"
            }
          ]
        },
        { label: "Button", name: "button", widget: "string" }
      ]
    },
    {
      label: "Anfahrt",
      name: "directions",
      widget: "object",
      fields: [title_default, { label: "Maps", name: "maps", widget: "string" }]
    },
    {
      label: "Information",
      name: "information",
      widget: "list",
      fields: [title_default, markdown_default]
    },
    {
      label: "Newsletter",
      name: "newsletter",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Formular",
          name: "form",
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string" },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Ben\xF6tigt",
              name: "required",
              widget: "boolean",
              required: false
            }
          ]
        },
        { label: "Button", name: "button", widget: "string" },
        text_default
      ]
    }
  ]
};
var contact_default = contact;

// cms/page/nepal.ts
var nepal = {
  file: "content/page/nepal.json",
  label: "Nepal Projekt",
  name: "nepal",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        markdown_default,
        { label: "Markdown", name: "markdown2", widget: "markdown" },
        { label: "Bild", name: "image2", widget: "image" }
      ]
    },
    {
      label: "Beschreibung",
      name: "description",
      widget: "object",
      fields: [title_default, markdown_default]
    },
    {
      label: "Aktivit\xE4ten",
      name: "activities",
      widget: "object",
      fields: [
        title_default,
        text_default,
        {
          label: "Links",
          name: "links",
          widget: "list",
          fields: linkFields(true)
        },
        cta_default,
        image_default
      ]
    }
  ]
};
var nepal_default = nepal;

// cms/symbols/alt.ts
var alt = {
  label: "Beschreibung des Bildes",
  name: "alt",
  widget: "string"
};
var alt_default = alt;

// cms/page/seminars.ts
var seminars = {
  file: "content/page/seminars.json",
  label: "Heilsame Seminare",
  name: "seminars",
  fields: [
    meta_default,
    header_default,
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [
        title_default,
        markdown_default,
        cta_default,
        image_default,
        alt_default,
        { label: "Seminar-Button", name: "seminarButton", widget: "string" }
      ]
    }
  ]
};
var seminars_default = seminars;

// cms/page/psychotherapie.ts
var therapie = {
  file: "content/page/psychotherapie.json",
  label: "Psychotherapie",
  name: "therapie",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        markdown_default,
        image_default,
        { label: "Markdown", name: "markdown2", widget: "markdown" }
      ]
    },
    {
      label: "Verfahren",
      name: "procedures",
      widget: "object",
      fields: [image_default, markdown_default]
    },
    cta_default
  ]
};
var psychotherapie_default = therapie;

// cms/page/index.ts
var config = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false
  },
  files: [
    home_default,
    about_default,
    kala_default,
    heal_default,
    schooling_default,
    seminars_default,
    contact_default,
    nepal_default,
    psychotherapie_default
  ]
};
var page_default = config;

// cms/article/index.ts
var article = {
  name: "article",
  label: "Artikel",
  label_singular: "Artikel",
  extension: "json",
  editor: {
    preview: false
  },
  folder: "content/article",
  slug: "{{slug}}",
  create: true,
  fields: [
    title_default,
    slug_default,
    image_default,
    markdown_default,
    {
      label: "comments",
      name: "comments",
      widget: "list",
      fields: [
        { label: "Autor", name: "autor", widget: "string" },
        {
          label: "Datum",
          name: "date",
          widget: "datetime",
          time_format: "HH:mm",
          date_format: "DD.MM.YYYY"
        },
        { label: "Text", name: "text", widget: "text" }
      ]
    }
  ]
};
var article_default = article;

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
var link = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(true),
  collapsed: false
};
var text2 = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }]
};
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
          types: [link, externalLink, text2]
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
var linkFields2 = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "href",
    name: "href",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/"
  }
];
var link2 = {
  label: "Normales Item",
  name: "link",
  widget: "object",
  fields: linkFields2,
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
      fields: linkFields2
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

// cms/seminar/index.ts
var seminar = {
  name: "seminar",
  label: "Seminare",
  label_singular: "Seminar",
  extension: "json",
  editor: {
    preview: false
  },
  folder: "content/seminar",
  slug: "{{slug}}",
  create: true,
  fields: [
    title_default,
    slug_default,
    {
      label: "Sortierung",
      name: "order",
      widget: "number",
      required: true
    },
    {
      label: "Auf der Startseite anzeigen?",
      name: "showOnHome",
      widget: "boolean",
      required: false
    },
    {
      label: "Auf der Seminarseite anzeigen?",
      name: "showOnSeminars",
      widget: "boolean",
      required: false
    },
    {
      label: "Beschreibung (Erscheint unter Heilsame Seminare)",
      name: "description",
      widget: "text"
    },
    {
      label: "Termin (Erscheint unter Heilsame Seminare)",
      name: "date",
      widget: "string"
    },
    {
      label: "Kurzbeschreibung (Erscheint auf der Startseite)",
      name: "shortDescription",
      widget: "text"
    },
    image_default,
    {
      label: "Sektionen",
      name: "sections",
      widget: "list",
      types: [
        {
          label: "Text Bild",
          name: "textimage",
          widget: "object",
          fields: [markdown_default, image_default, alt_default]
        },
        {
          label: "Text",
          name: "text",
          widget: "object",
          fields: [markdown_default]
        },
        {
          label: "Bild Text",
          name: "imagetext",
          widget: "object",
          fields: [image_default, alt_default, markdown_default]
        },
        {
          label: "Kundenstimme",
          name: "review",
          widget: "object",
          fields: [image_default, text_default, string_default]
        },
        {
          label: "Events",
          name: "events",
          widget: "object",
          fields: [
            title_default,
            {
              label: "Events",
              name: "events",
              widget: "list",
              fields: [
                { label: "Monat", name: "month", widget: "string" },
                {
                  label: "Datum",
                  name: "date",
                  widget: "datetime",
                  date_format: "DD.MM.YYYY",
                  time_format: false
                },
                { label: "Zeit", name: "time", widget: "string" }
              ]
            },
            markdown_default,
            image_default
          ]
        },
        {
          label: "Titel Text Bild Blume",
          name: "flowertitle",
          widget: "object",
          fields: [title_default, markdown_default, image_default]
        },
        {
          label: "Termin",
          name: "date",
          widget: "object",
          fields: [
            { label: "Vortitel", name: "pretitle", widget: "string" },
            title_default,
            {
              label: "Daten",
              name: "data",
              widget: "list",
              fields: [
                { label: "Schl\xFCssel", name: "key", widget: "string" },
                { label: "Wert", name: "value", widget: "text" }
              ]
            },
            cta_default
          ]
        },
        {
          label: "Yoga Termin",
          name: "yogadate",
          widget: "object",
          fields: [
            title_default,
            text_default,
            {
              label: "Daten",
              name: "yogadata",
              widget: "list",
              fields: [
                { label: "Schl\xFCssel", name: "key", widget: "string" },
                { label: "Wert", name: "value", widget: "text" }
              ]
            },
            cta_default
          ]
        },
        {
          label: "Titel Text Bild Text Button",
          name: "titletextimagetextbutton",
          widget: "object",
          fields: [title_default, text_default, image_default, alt_default, markdown_default, cta_default]
        },
        {
          label: "Titel Text Bild",
          name: "titletextimage",
          widget: "object",
          fields: [title_default, markdown_default, image_default, alt_default]
        },
        {
          label: "Titel Bild Text Button",
          name: "titleimagetextcta",
          widget: "object",
          fields: [title_default, image_default, alt_default, markdown_default, cta_default]
        }
      ]
    }
  ]
};
var seminar_default = seminar;

// cms/config.ts
var config2 = {
  publish_mode: "simple",
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/katharina-greuner.de"
  },
  local_backend: true,
  locale: "de",
  display_url: "https://katharina-greuner.de",
  site_url: "https://katharina-greuner.de",
  media_folder: "/public/media",
  public_folder: "/media",
  load_config_file: false,
  collections: [page_default, seminar_default, category_default, setting_default, legal_default, article_default]
};
var config_default = config2;
export {
  config_default as default
};
