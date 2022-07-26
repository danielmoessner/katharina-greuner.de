import ImageBorder from "./ImageBorder";
import Multiline from "./Multiline";
import Button from "./Button";
import Image from "next/image";

function Component({ text, image, alt, cta }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <Multiline text={text} />
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

export default Component;
