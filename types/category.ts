import { defineDocumentType } from "contentlayer/source-files";

const Category = defineDocumentType(() => ({
  name: "Category",
  filePathPattern: "category/*.json",
  fields: {
    title: {
      type: "string",
    },
  },
}));

export { Category };
