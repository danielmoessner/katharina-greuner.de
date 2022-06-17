import { defineDocumentType } from "contentlayer/source-files";

const Legal = defineDocumentType(() => ({
  name: "Legal",
  filePathPattern: "legal/*.md",
  fields: {
    title: {
      type: "string",
    },
    slug: {
      type: "string",
    },
  },
}));

export { Legal };
