import Container from "./Container";
import Section from "./Section";
import Heading from "./Heading";
import Multiline from "./Multiline";

interface Props {
  career: {
    title: string;
    text: string;
    careerTitle: string;
    career: {
      name: string;
      entries: {
        year: string;
        text: string;
      }[];
    }[];
  };
}

function Component({ career }: Props) {
  return (
    <Section className="pt-12">
      <Container layout="sm">
        <div className="flex justify-center">
          <Heading element="h2" size="h2">
            {career.title}
          </Heading>
        </div>
        <div className="mt-8">
          <Multiline text={career.text} className="text-sm" />
        </div>
        <div className="mt-10">
          <Heading element="h3" size="h3">
            {career.careerTitle}
          </Heading>
          <div className="mt-4 space-y-4 text-sm">
            {career.career.map((group, index) => (
              <div key={index} className="">
                <h4 className="font-bold">{group.name}</h4>
                <div className="mt-1 space-y-1">
                  {group.entries.map((entry, index) => (
                    <div key={index} className="flex">
                      <div className="w-20">{entry.year}</div>
                      <div>{entry.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Component;
