import ImageBorder from "./ImageBorder";
import Image from "next/image";
import Prose from "./Prose";

function ContentMarkdownImage({ html, image, alt }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <Prose html={html} />
      <div>
        <ImageBorder>
          <Image {...image} alt={alt} />
        </ImageBorder>
      </div>
    </div>
  );
}

export default ContentMarkdownImage;
