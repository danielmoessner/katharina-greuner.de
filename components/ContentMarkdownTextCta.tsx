import Prose from "./Prose";
import Button from "./Button";
import text from "cms/symbols/text";
import Multiline from "./Multiline";

function ContentMarkdownTextCta({ html, text, cta }) {
  return (
    <div className="grid gap-x-12 gap-y-4 ">
      <div>
        <Prose html={html} />
      </div>
      <div className="text-xs">
        <Multiline text={text} />
      </div>
      <div className="mt-4 md:mt-10">
        <Button href={cta.href}>{cta.text}</Button>
      </div>
    </div>
  );
}

export default ContentMarkdownTextCta;
