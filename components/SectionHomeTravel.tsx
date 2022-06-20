import Image from "next/image";
import Container from "./Container";
import Section from "./Section";
import Button from "./Button";

interface Props {
  travel: {
    title: string;
    text: string;
    button: string;
  };
}

function Component({ travel }: Props) {
  return (
    <Section className="relative py-2">
      <Container layout="sm">
        <div className="relative grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <div>
              <h2 className="text-2xl font-bold text-kg-brown">
                {travel.title}
              </h2>
              <p className="text-kg-brown">{travel.text}</p>
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
