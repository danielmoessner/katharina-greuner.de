import { ImageRendered } from "types/shared";
import Button from "./Button";
import Container from "./Container";
import Section from "./Section";

interface Offeroverview {
  text: string;
  title: string;
  image: ImageRendered;
  Button: string;
}

interface Props {
  offeroverview: Offeroverview;
  button: string;
}

function Component({ offeroverview, button }: Props) {
  return (
    <Section className="relative py-2">
      <Container layout="sm">
        <div className="p-4 ">
          <p className="mt-2 text-3xl">{offeroverview.image}</p>
          <p className="mt-3">{offeroverview.title}</p>
          <p className="mt-1 font-bold tracking-wide">{offeroverview.text}</p>
          <div className="mt-2">
            <Button href={`seminar/${offeroverview}`}>{button}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Component;
