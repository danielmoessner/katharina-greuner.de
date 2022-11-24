import ImageBorder from "./ImageBorder";
import Image from "next/image";
import Prose from "./Prose";
import Button from "./Button";

function ContentImageMarkdownCta({ html, image, alt, cta }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <ImageBorder>
          <Image {...image} alt={alt} />
        </ImageBorder>
      </div>
      <div>
        <Prose html={html} />
        <div className="mt-6">
          <Button href={cta.href}>{cta.text}</Button>
        </div>
      </div>
    </div>
  );
}

export default ContentImageMarkdownCta;
