import { ImageRendered } from "types/shared";
import Button from "./Button";

interface Seminar {
  title: string;
  image: ImageRendered;
  shortdescription: string;
  date: string;
  slug: string;
}

interface Props {
  seminar: Seminar;
  button: string;
}

function CurrentEvents({ seminar, button }: Props) {
  return (
    <div className="flex flex-col min-h-full px-4 py-2 bg-white/40">
      <h3 className="text-2xl font-bold">{seminar.title}</h3>
      <p className="mt-3">{seminar.shortdescription}</p>
      <div className="mt-2">
        <Button className="text-blue" href={`seminar/${seminar.slug}`}>
          {button}
        </Button>
      </div>
    </div>
  );
}

export default CurrentEvents;
