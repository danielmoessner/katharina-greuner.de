import Link from "next/link";
import Container from "./Container";
import Section from "./Section";
import ImageBorder from "./ImageBorder";
import Heading from "./Heading";

interface Props {
  blocks: {
    title: string;
    image: string;
    text: string;
    link?: {
      text: string;
      url: string;
    };
  }[];
}

function Component({ blocks }: Props) {
  return (
    <Section className="py-16">
      <Container layout="sm">
        <div className="flex flex-col space-y-16">
          {blocks.map((block, index) => (
            <div key={index} className="grid grid-cols-2 gap-6">
              <div
                className={`row-start-1 ${
                  index % 2 === 0 ? "col-start-1" : "col-start-2"
                }`}
              >
                <ImageBorder>
                  {/* <div className="relative w-full h-full"> */}
                  <img
                    src={block.image}
                    alt={block.title}
                    // layout="fill"
                    // objectFit="cover"
                    // objectPosition="center"
                    // width={800}
                    // height={800}
                  />
                  {/* </div> */}
                </ImageBorder>
              </div>
              <div className="row-start-1">
                <Heading element="h2" size="h2">
                  {block.title}
                </Heading>
                <p className="mt-6 whitespace-pre-line">{block.text}</p>
                {block.link && block.link.url && block.link.text && (
                  <Link href={block.link.url}>
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
