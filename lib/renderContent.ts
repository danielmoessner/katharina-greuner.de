import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import {
  ImageRendered,
  Rendered,
  MarkdownRendered,
  RenderedMarkdown,
  RenderedImage,
} from "../types/shared";
import md from "markdown-it";

// render images
async function renderImages1(data: string): Promise<ImageRendered> {
  const filePath = data.startsWith("/")
    ? path.join(/*turbopackIgnore: true*/ process.cwd(), "public", data)
    : path.join(/*turbopackIgnore: true*/ process.cwd(), data);

  const buffer = fs.readFileSync(filePath);
  const { width, height } = imageSize(Uint8Array.from(buffer));

  if (!width || !height) {
    throw new Error(`Could not determine image size for: ${data}`);
  }

  return { src: data, width, height };
}

async function renderImages<T extends object | Array<object>>(
  data: T,
): Promise<RenderedImage<T>> {
  let result;

  if (Array.isArray(data)) {
    result = await Promise.all(data.map((i) => renderImages(i)));
  } else {
    result = data;

    for (const [key, value] of Object.entries(data)) {
      if (key.includes("image") || key.includes("Image")) {
        if (typeof value === "string") result[key] = await renderImages1(value);
        else if (Array.isArray(value))
          result[key] = await Promise.all(
            value.map((i) => (typeof i === "string" ? renderImages1(i) : i)),
          );
      } else if (typeof value === "object") {
        result[key] = await renderImages(value);
      }
    }
  }

  return result;
}

// render markdown
function renderMarkdown1(data: string): MarkdownRendered {
  const renderedMarkdown = md().render(data);
  return { html: renderedMarkdown };
}

function renderMarkdown<T extends object | Array<object>>(
  data: T,
): RenderedMarkdown<T> {
  let result;

  if (Array.isArray(data)) {
    result = data.map((i) => renderMarkdown(i));
  } else {
    result = data;

    for (const [key, value] of Object.entries(data)) {
      if (key.includes("markdown") && typeof value === "string") {
        result[key] = renderMarkdown1(value);
      } else if (typeof value === "object") {
        result[key] = renderMarkdown(value);
      }
    }
  }

  return result;
}

// render everything
export async function renderContent<T extends Array<object> | object>(
  data: T,
): Promise<Rendered<T>> {
  const imageResult = await renderImages<T>(data);
  const markdownResult = renderMarkdown<RenderedImage<T>>(imageResult);
  return markdownResult as Rendered<T>;
}
