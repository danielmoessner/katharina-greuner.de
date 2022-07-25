import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

interface CmsObject {
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type MarkdownLoaded<T> = T & { markdown: string; _path: string };

export type JsonLoaded<T> = T & { _path: string };

function readFile(filename: string) {
  const fileContents = fs.readFileSync(filename, "utf8");
  return { content: fileContents, path: filename };
}

function loadMarkdown<T extends CmsObject>(
  filename,
  attrs = {}
): MarkdownLoaded<T> {
  const { content, path } = readFile(filename);
  const { data, content: markdown } = matter(content);

  return { ...data, markdown, _path: path, ...attrs } as MarkdownLoaded<T>;
}

function loadJson<T extends CmsObject, A extends Record<string, string>>(
  filename,
  attrs: A = null
): T & { _path: string } & A {
  const { content, path } = readFile(filename);
  const data = JSON.parse(content);
  return { ...data, _path: path, ...attrs } as T & { _path: string } & A;
}

export function getAllMarkdown<T extends CmsObject>(
  collection: string,
  locale = ""
): MarkdownLoaded<T>[] {
  const collectionDirectory = join(
    process.cwd(),
    "content",
    collection,
    locale
  );
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) =>
    loadMarkdown<T>(`${collectionDirectory}/${filename}`, { _locale: locale })
  );

  return items;
}

export function getAllJson<T extends CmsObject>(
  collection: string,
  locale = ""
): JsonLoaded<T>[] {
  const collectionDirectory = join(
    process.cwd(),
    "content",
    collection,
    locale
  );
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) =>
    loadJson<T, { _locale: string }>(`${collectionDirectory}/${filename}`, {
      _locale: locale,
    })
  );

  return items;
}
