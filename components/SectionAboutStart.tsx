import Container from "./Container";
import Section from "./Section";
import Heading from "./Heading";
import ImageBorder from "./ImageBorder";
import MultiLine from "./Multiline";
import Image from "next/image";

function Component({ start }) {
  return (
    <Section className="pt-12 pb-20">
      <Container layout="sm">
        <div className="flex items-center justify-center">
          <Heading size="h1" element="h1">
            {start.title}
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
          <MultiLine text={start.text} className="text-sm" />
          <div>
            <ImageBorder>
              <Image {...start.image} alt={start.title} />
            </ImageBorder>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-center">
            <Heading size="h2" element="h2">
              {start.titlePrinciples}
            </Heading>
          </div>
          <div className="mt-8">
            <MultiLine text={start.textPrinciples} className="text-sm" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Component;
