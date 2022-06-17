import { Category } from "./types/category";
import { makeSource } from "contentlayer/source-files";
import { Animal } from "./types/animal";
import { Legal } from "./types/legal";

export default makeSource({
  contentDirPath: "content",
  contentDirExclude: ["setting", "page"],
  documentTypes: [Animal, Legal, Category],
});
