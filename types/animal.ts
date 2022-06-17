import { defineDocumentType } from "contentlayer/source-files";

const Animal = defineDocumentType(() => ({
  name: "Animal",
  filePathPattern: "animal/*.md",
  fields: {
    title: {
      type: "string",
    },
    slug: {
      type: "string",
    },
    image: {
      type: "string",
    },
    excerpt: {
      type: "string",
    },
    category: {
      type: "string",
    },
  },
}));

export { Animal };
