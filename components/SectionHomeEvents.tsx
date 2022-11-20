import Image from "next/image";
import Container from "./Container";
import Section from "./Section";

interface Props {
  currentevents: {
    text: string;
  };
}

function Component({ currentevents }: Props) {
  return (
    <Section className="relative py-2">
      <Image
        layout="fill"
        objectFit="cover"
        src="/img/blumen_hintergrund_soft_tuerkis.jpeg"
        alt="Hintergrundbild"
      />
      <Container layout="sm">
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 lg:grid-cols-3"></div>
      </Container>
    </Section>
  );
}

export default Component;
