// import Image from "next/image";
// import { ImageRendered } from "types/shared";
// import Link from "next/link";

// interface About {
//   title: string;
//   image: ImageRendered;
//   newImage: ImageRendered;
//   description: string;
//   date: string;
//   slug: string;
// }

// interface Props {
//   about: About;
//   button: string;
// }

function AboutCard(/*{ about, button }: Props*/) {
  return (
    <div className="flex flex-col justify-between h-full p-4 border-b-2 bg-kg-green/20">
      <div>
        <div className="rounded-full border-b-kg-yellow bg-grey">
          about image rounded
          {/* <Image {...blog.newImage} alt={blog.title} /> */}
        </div>
        <h2 className="mt-2 text-3xl"> about.title</h2>
        <p className=""> datum </p>
        <p className="mt-3">about.description</p>
        <p className="mt-1 font-bold tracking-wide">about.date</p>
      </div>
      <div className="mt-2">
        {/* <Link href={`blog/${blog.slug}`}>{button}</Link> */}
      </div>
    </div>
  );
}

export default AboutCard;
