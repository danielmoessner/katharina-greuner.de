import Image from "next/image";
import Container from "./Container";
import Section from "./Section";

interface Props {
  about: {
    text: string;
  };
}

function Component({ about }: Props) {
  return (
    <Section className="relative py-2">
      <Image
        layout="fill"
        objectFit="cover"
        src="/img/blumen_hintergrund_soft_tuerkis.jpeg"
        alt="Hintergrundbild"
      />
      <Container layout="sm">
        <div className="relative grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-4">
            <div className="overflow-hidden leading-none border-4 rounded-full border-kg-yellow">
              <div className="leading-[0]">
                <Image
                  width={800}
                  height={800}
                  src="/img/katharina.jpeg"
                  alt="Bild von Katharina Greuner"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8">
            <div className="py-8">
              <p className="whitespace-pre-line text-kg-brown">{about.text}</p>
              <div className="w-24 mt-2">
                <Image
                  width={200}
                  height={72}
                  src="/img/katharina.png"
                  alt="Unterschrift von Katharina Greuner"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Component;
