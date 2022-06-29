import Image from "next/image";

interface Props {
  header?: {
    title?: string;
  };
  image: string;
}

function Component({ header, image }: Props) {
  return (
    <header className="relative">
      <div className="leading-[0]">
        <Image src={image} width={2440} height={875} alt={header?.title} />
      </div>
      {header?.title && (
        <div className="absolute max-w-sm top-[30%] left-[60%]">
          <h1 className="text-xl font-bold tracking-tight text-center text-kg-green">
            {header.title}
          </h1>
        </div>
      )}
    </header>
  );
}

export default Component;
