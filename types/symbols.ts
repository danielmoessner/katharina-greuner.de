import { defineNestedType } from "contentlayer/source-files";

const Header = defineNestedType(() => ({
  name: "Header",
  fields: {
    description: {
      type: "string",
    },
    title: {
      type: "string",
    },
    image: {
      type: "string",
    },
  },
}));

const Meta = defineNestedType(() => ({
  name: "Meta",
  fields: {
    description: {
      type: "string",
    },
    title: {
      type: "string",
    },
    image: {
      type: "string",
    },
  },
}));

export { Header, Meta };
