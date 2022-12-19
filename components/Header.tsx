import Image from "next/image";
import { ImageRendered } from "types/shared";

interface Props {
  header: {
    title?: string;
    image?: ImageRendered;
    position?: string;
    color?: string;
  };
}

function Component({ header }: Props) {
  return (
    <header className="relative">
      <div className="leading-[0]">
        <Image {...header.image} alt={header.title || "Header Bild"} />
      </div>
      {header?.title && (
        <div className={`absolute ${header.position}`}>
          <h1
            className={`text-xs font-bold tracking-tight text-center whitespace-pre-line md:text-base lg:text-xl ${header.color}`}
          >
            {header.title}
          </h1>
        </div>
      )}
    </header>
  );
}

export default Component;
