import Container from "./Container";
import Section from "./Section";
import Heading from "./Heading";

function Component({ start, children }) {
  return (
    <Section className="pt-12 pb-20">
      <Container layout="sm">
        <div className="flex items-center justify-center">
          <Heading size="h1" element="h1">
            {start.title}
          </Heading>
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </Section>
  );
}

export default Component;
