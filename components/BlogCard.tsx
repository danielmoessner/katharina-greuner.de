import Image from "next/image";
import { ImageRendered } from "types/shared";
import Link from "next/link";
import { formatDate } from "lib/date";
import ImageBorder from "./ImageBorder";

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
    <div className="">
      <div>
        <div className="border-b-kg-yellow">
          {article.image && (
            <Link href={`blog/${article.slug}`}>
              <a href="">
                <ImageBorder>
                  <Image
                    className="w-full"
                    {...article.image}
                    alt={article.title}
                  />
                </ImageBorder>
              </a>
            </Link>
          )}
        </div>
        <Link href={`blog/${article.slug}`}>
          <a href="" className="text-kg-brown">
            <h2 className="mt-2 text-3xl">{article.title}</h2>
          </a>
        </Link>
        <p className="">{formatDate(article.date)}</p>
        <p className="mt-3">{article.description}</p>
      </div>
      <div className="mt-2">
        todo: button bitte über die blog seite im cms einstellen also den text
        <Link href={`blog/${article.slug}`}>{button}</Link>
      </div>
    </div>
  );
}

export default BlogCard;
