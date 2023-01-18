import Link from "next/link";
import { ImageRendered } from "types/shared";
import DynamicForm from "./DynamicForm";
import ImageRounded from "./ImageRounded";

interface Props {
  aside: {
    image: ImageRendered;
    title: string;
    text: string;
    cta: { href: string; text: string };
    categoriesTitle: string;
    newsletter: {
      title: string;
      button: string;
      privacy: string;
      fields: { label: string; name: string; className: string }[];
      success: string;
    };
  };
  selectedCategory?: string;
  categories: { title: string; slug: string }[];
}

function BlogAside({ aside, categories, selectedCategory }: Props) {
  return (
    <div>
      <ImageRounded image={aside.image} alt={aside.title} />
      <h1 className="mt-5 text-2xl font-medium">{aside.title}</h1>
      <p className="mt-3 text-sm whitespace-pre-line">{aside.text}</p>
      <Link href={aside.cta.href}>
        <a className="block mt-1 text-sm" href="">
          {aside.cta.text}
        </a>
      </Link>
      <h2 className="mt-10 text-xl font-medium">{aside.categoriesTitle}</h2>
      <ul className="mt-3 space-y-1">
        {categories.map((category) => (
          <li
            key={category.title}
            className={selectedCategory === category.slug ? "underline" : ""}
          >
            <Link href={`/blog?kategorie=${category.slug}`}>
              <a href="">{category.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-4 pt-5 pb-5 mt-14 bg-kg-green/20">
        <h2 className="text-2xl font-medium text-center">
          {aside.newsletter.title}
        </h2>
        <div className="mt-4">
          <DynamicForm
            name="newsletterformular"
            gapY="gap-y-2"
            buttonDivClass="mt-4 [&>div>button]:w-full"
            fields={aside.newsletter.fields}
            showPrivacy={false}
            submitText={aside.newsletter.button}
            successHeading=""
            successText={aside.newsletter.success}
          />
        </div>
        <p
          className="mt-5 text-xs text-center"
          dangerouslySetInnerHTML={{ __html: aside.newsletter.privacy }}
        ></p>
      </div>
    </div>
  );
}

export default BlogAside;
