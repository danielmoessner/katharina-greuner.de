interface Props {
  html: string;
}

function Component({ html }: Props) {
  return (
    <div className="prose prose-p:my-2 prose-a:text-bsm-faince prose-ul:list-none prose-ul:mt-3 prose-ul:mb-5 prose-ul:pl-0 prose-p:[nth-child(1)]:mt-0 prose-li:relative prose-li:pl-7 max-w-none">
      <div
        className="-mt-2"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}

export default Component;
