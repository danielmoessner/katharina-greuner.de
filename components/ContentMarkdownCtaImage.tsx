import ImageBorder from "./ImageBorder";
import Prose from "./Prose";
import Button from "./Button";
import Image from "next/image";

function ContentMarkdownCtaImage({ html, image, alt, cta }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <Prose html={html} />
        <div className="mt-4 md:mt-10">
          <Button href={cta.href}>{cta.text}</Button>
        </div>
      </div>
      <div className="row-start-1 md:row-start-auto">
        <ImageBorder>
          <Image {...image} alt={alt} />
        </ImageBorder>
      </div>
    </div>
  );
}

export default ContentMarkdownCtaImage;
