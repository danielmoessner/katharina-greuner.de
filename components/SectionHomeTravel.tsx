import Image from "next/image";
import Container from "./Container";
import Section from "./Section";
import Button from "./Button";
import Heading from "./Heading";

interface Props {
  travel: {
    title: string;
    text: string;
    button: string;
    cta1: {
      text: string;
      href: string;
    };
    cta2: {
      text: string;
      href: string;
    };
  };
}

function Component({ travel }: Props) {
  return (
    <Section className="relative py-12">
      <Container layout="sm">
        <div className="relative grid grid-cols-12 gap-6">
          <div className="flex flex-col justify-between col-span-12 md:col-span-6">
            <div>
              <Heading>{travel.title}</Heading>
              <p className="mt-3 text-kg-brown">{travel.text}</p>
            </div>
            <div className="flex flex-col space-y-4">
              <Button href={travel.cta1.href}>{travel.cta1.text}</Button>
              <Button href={travel.cta2.href}>{travel.cta2.text}</Button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 ">
            <div className="border-b-2 border-kg-yellow">
              <div className="leading-[0]">
                <Image
                  width={1000}
                  height={683}
                  src="/img/spirituelle_reisen.jpeg"
                  alt="Bild von Teneriffa"
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
