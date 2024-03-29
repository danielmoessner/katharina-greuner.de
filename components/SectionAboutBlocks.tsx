import Link from "next/link";
import Container from "./Container";
import Section from "./Section";
import ImageBorder from "./ImageBorder";
import Heading from "./Heading";
import Image from "next/image";

function Component({ blocks }) {
  return (
    <Section className="py-16">
      <Container layout="sm">
        <div className="grid space-y-16">
          {blocks.map((block, index) => (
            <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* klasse muss angepasst werden sodass die condition nur bei großen großen screensizes greift, sonst funktioniert die mobile view nicht, habe vor der indexierung md: hinzugefügt damit mobile view erstmal gut aussieht  */}
              <div
                className={` md:row-start-1 md:${
                  index % 2 === 0 ? "col-start-1" : "col-start-2"
                }`}
              >
                <ImageBorder>
                  <Image {...block.image} alt={block.title} />
                </ImageBorder>
              </div>
              <div className="row-start-1">
                <Heading element="h2" size="h2">
                  {block.title}
                </Heading>
                <p className="mt-6 whitespace-pre-line">{block.text}</p>
                {block.link && block.link.href && block.link.text && (
                  <Link href={block.link.href}>
                    <a className="block mt-4">&gt; {block.link.text}</a>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Component;
