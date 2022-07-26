import Image from "next/image";

function ImageRounded({ image, alt }) {
  return (
    <div className="overflow-hidden leading-none border-4 rounded-full border-kg-yellow">
      <div className="leading-[0]">
        <Image {...image} alt={alt} className="rounded-full" />
      </div>
    </div>
  );
}

export default ImageRounded;
