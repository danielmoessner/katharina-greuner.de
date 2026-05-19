import Image from "next/image";
import Container from "./Container";
import Section from "./Section";

function SectionFlowerBackground({ children, priority = false }) {
  return (
    <Section className="relative py-2 ">
      <Image
        src="/img/blumen_hintergrund_soft_tuerkis.jpeg"
        alt="Hintergrundbild"
        fill
        style={{ objectFit: "cover" }}
        priority={priority}
      />
      <div className="relative">
        <Container layout="sm">{children}</Container>
      </div>
    </Section>
  );
}

export default SectionFlowerBackground;
