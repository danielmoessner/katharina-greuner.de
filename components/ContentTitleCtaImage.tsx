import ImageBorder from "./ImageBorder";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";

function Component({ title, image, alt, cta }) {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      <div>
        <Heading element="h2" size="h2">
          {title}
        </Heading>
        <div className="mt-6 md:mt-10">
          <Button href={cta.href}>{cta.text}</Button>
        </div>
      </div>
      <div>
        <ImageBorder>
          <Image {...image} alt={alt} />
        </ImageBorder>
      </div>
    </div>
  );
}

export default Component;
