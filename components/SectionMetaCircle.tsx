import Image from "next/image";
import Container from "./Container";
import Section from "./Section";

interface Props {
  children: React.ReactNode;
  image: string;
}

function Component({ children, image }: Props) {
  return (
    <Section className="relative py-2">
      <div className="z-0 leading-[0]">
        <Image
          layout="fill"
          objectFit="cover"
          src="/img/blumen_hintergrund_soft_tuerkis.jpeg"
          alt="Hintergrundbild"
        />
      </div>
      <Container layout="sm">
        <div className="relative grid grid-cols-12 gap-6">
          <div className="flex items-center col-span-12 sm:col-span-4">
            <div className="overflow-hidden leading-none border-4 rounded-full border-kg-yellow">
              <div className="leading-[0]">
                <Image
                  width={800}
                  height={800}
                  src={image}
                  alt="Bild von Katharina Greuner"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8">{children}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Component;
