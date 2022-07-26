interface Props {
  html: string;
}

function Prose({ html }: Props) {
  return (
    <div className="prose prose-p:my-2 prose-a:text-bsm-faince prose-ul:mt-3 prose-ul:mb-5 prose-p:[nth-child(1)]:mt-0 max-w-none prose-li:marker:text-kg-brown">
      {/* <div className="prose prose-xl"> */}
      <div
        className="-mt-2"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}

export default Prose;