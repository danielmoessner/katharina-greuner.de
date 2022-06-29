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
  };
}

function Component({ travel }: Props) {
  return (
    <Section className="relative py-12">
      <Container layout="sm">
        <div className="relative grid grid-cols-12 gap-6">
          <div className="flex flex-col justify-between col-span-12 sm:col-span-6">
            <div>
              <Heading>{travel.title}</Heading>
              <p className="mt-3 text-kg-brown">{travel.text}</p>
            </div>
            <div>
              <Button>{travel.button}</Button>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6">
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
