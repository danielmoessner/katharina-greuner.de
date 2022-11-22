import { ImageRendered } from "types/shared";
import Button from "./Button";
import Container from "./Container";
import Section from "./Section";
import Image from "next/image";
import ImageBorder from "./ImageBorder";

interface Offeroverview {
  text: string;
  title: string;
  image: ImageRendered;
  Button: string;
  cta: {
    text: string;
    url: string;
  };
}

interface Props {
  offeroverview: Offeroverview[];
}

function Component({ offeroverview }: Props) {
  return (
    <Section className="relative py-2">
      <Container layout="sm">
        <div className="grid grid-cols-3">
          {offeroverview.map((item) => (
            <div key={item.title} className="p-4 ">
              <ImageBorder>
                <Image {...item.image} alt={item.title}></Image>
              </ImageBorder>
              <h3 className="mt-3 text-2xl">{item.title}</h3>
              <p className="mt-2 tracking-wide">{item.text}</p>
              <div className="mt-2">
                <Button className="text-blue" href={item.cta.url}>
                  {item.cta.text}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Component;
