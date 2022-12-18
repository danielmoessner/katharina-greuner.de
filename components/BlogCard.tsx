import Image from "next/image";
import { ImageRendered } from "types/shared";
import Link from "next/link";

interface Blog {
  title: string;
  image: ImageRendered;
  newImage: ImageRendered;
  description: string;
  date: string;
  slug: string;
}

interface Props {
  blog: Blog;
  button: string;
}

function BlogCard({ blog, button }: Props) {
  return (
    <div className="flex flex-col justify-between h-full p-4 border-b-2 bg-kg-green/20 border-b-kg-brown">
      <div>
        <div className="border-b-kg-yellow">
          <Image {...blog.newImage} alt={blog.title} />
        </div>
        <h2 className="mt-2 text-3xl">{blog.title}</h2>
        <p className=""> datum </p>
        <p className="mt-3">{blog.description}</p>
        <p className="mt-1 font-bold tracking-wide">{blog.date}</p>
      </div>
      <div className="mt-2">
        <Link href={`blog/${blog.slug}`}>{button}</Link>
      </div>
    </div>
  );
}

export default BlogCard;
