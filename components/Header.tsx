import Image from "next/image";

function Component({ header }) {
  return (
    <header className="relative">
      <div className="leading-[0]">
        <Image {...header.image} alt={header.title || "Header Bild"} />
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
