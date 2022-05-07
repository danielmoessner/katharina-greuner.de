import Image from "next/image";

interface Props {
  image: string | React.ReactNode;
  alt: string;
}

function Hero({ image, alt }: Props) {
  return (
    <section className="w-full">
      <div className="flex">
        <div className="rounded-lg shadow text-[0]">
          {typeof image === "string" ? (
            <Image
              className="mx-auto rounded-lg shadow aspect-[16/10]"
              src={image}
              alt={alt}
              width={1600}
              height={1000}
              objectFit="cover"
            />
          ) : (
            <div className="overflow-hidden rounded-lg">{image}</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
