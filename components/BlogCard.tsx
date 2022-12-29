import Image from "next/image";
import { ImageRendered } from "types/shared";
import Link from "next/link";

interface Article {
  title: string;
  image: ImageRendered;
  newImage: ImageRendered;
  description: string;
  date: string;
  slug: string;
}

interface Props {
  article: Article;
  button: string;
}

function BlogCard({ article, button }: Props) {
  return (
    <div className="flex flex-col justify-between h-full p-4 border-b-2 bg-kg-green/20">
      <div>
        <div className="border-b-kg-yellow">
          {article.image && <Image {...article.image} alt={article.title} />}
        </div>
        <h2 className="mt-2 text-3xl"> article.title</h2>
        <p className=""> datum </p>
        <p className="mt-3">article.description</p>
        <p className="mt-1 font-bold tracking-wide">article.date</p>
      </div>
      <div className="mt-2">
        <Link href={`blog/${article.slug}`}>{button}</Link>
      </div>
    </div>
  );
}

export default BlogCard;
