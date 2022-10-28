import Image from "next/image";
import Container from "./Container";
import Section from "./Section";

function SectionFlowerBackground({ children }) {
  return (
    <Section className="relative py-2 ">
      <Image
        layout="fill"
        objectFit="cover"
        src="/img/blumen_hintergrund_soft_tuerkis.jpeg"
        alt="Hintergrundbild"
      />
      <div className="relative">
        <Container layout="sm">{children}</Container>
      </div>
    </Section>
  );
}

export default SectionFlowerBackground;
