import Prose from "./Prose";

function ContentMarkdown({ html }) {
  return (
    <div className="">
      <Prose html={html} />
    </div>
  );
}

export default ContentMarkdown;
