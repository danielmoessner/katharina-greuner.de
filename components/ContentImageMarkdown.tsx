import ImageBorder from "./ImageBorder";
import Image from "next/image";
import Prose from "./Prose";

function Component({ html, image, alt }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <ImageBorder>
          <Image {...image} alt={alt} />
        </ImageBorder>
      </div>
      <Prose html={html} />
    </div>
  );
}

export default Component;
