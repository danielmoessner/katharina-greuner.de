import Image from "next/image";
import { ImageRendered } from "types/shared";
import Button from "./Button";

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

function SeminarCard({ seminar, button }: Props) {
  return (
    <div className="p-4 border-b-2 h-max bg-kg-green/20 border-kg-yellow">
      <Image {...seminar.image} alt={seminar.title} />
      <h2 className="mt-2 text-3xl">{seminar.title}</h2>
      <p className="mt-3">{seminar.description}</p>
      <p className="mt-1 font-bold tracking-wide">{seminar.date}</p>
      <div className="mt-2">
        <Button href={`seminar/${seminar.slug}`}>{button}</Button>
      </div>
    </div>
  );
}

export default SeminarCard;
