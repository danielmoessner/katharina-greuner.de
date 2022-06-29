import SectionMetaCircle from "./SectionMetaCircle";
import Heading from "./Heading";

interface Props {
  keywords: {
    title: string;
    image: string;
    points: string[];
  };
}

function Component({ keywords }: Props) {
  return (
    <SectionMetaCircle image={keywords.image}>
      <div className="py-8">
        <Heading>{keywords.title}</Heading>
        <ul className="mt-5 space-y-2 list-disc list-inside">
          {keywords.points.map((point) => (
            <li className="text-sm" key={point}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </SectionMetaCircle>
  );
}

export default Component;
