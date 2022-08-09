import ImageBorder from "./ImageBorder";
import Multiline from "./Multiline";
import Image from "next/image";

function ContentImageText({ text, image, alt }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <ImageBorder>
          <Image {...image} alt={alt} />
        </ImageBorder>
      </div>
      <Multiline text={text} />
    </div>
  );
}

export default ContentImageText;
