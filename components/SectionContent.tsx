import Container from "./Container";
import Section from "./Section";

function Component({ children }) {
  return (
    <Section className="pt-12 pb-20">
      <Container layout="sm">
        <div className="">{children}</div>
      </Container>
    </Section>
  );
}

export default Component;
