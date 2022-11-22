import { ImageRendered } from "types/shared";
import Button from "./Button";
import Header from "../components/Header";

interface Seminar {
  title: string;
  image: ImageRendered;
  description: string;
  date: string;
  slug: string;
}

interface Props {
  seminar: Seminar;
  button: string;
}

function CurrentEvents({ seminar, button }: Props) {
  return (
    <div className="flex flex-col min-h-full p-4 w-72 gap-x-4 bg-kg-green/20">
      <h2 className="mt-2 text-3xl">{seminar.title}</h2>
      <p className="mt-3">{seminar.description}</p>
      <p className="mt-1 font-bold tracking-wide">{seminar.date}</p>
      <div className="mt-2">
        <Button className="text-blue" href={seminar.slug}>
          {button}
        </Button>
      </div>
    </div>
  );
}

export default CurrentEvents;
