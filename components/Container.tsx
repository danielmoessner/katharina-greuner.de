interface Props {
  children: React.ReactNode;
  layout: "sm" | "md" | "lg";
}

function Container({ children, layout }: Props) {
  let maxWidth = "";
  if (layout === "sm") {
    maxWidth = "max-w-6xl";
  } else if (layout === "md") {
    maxWidth = "max-w-7xl";
  } else if (layout === "lg") {
    maxWidth = "max-w-8xl";
  }
  return (
    <div className={`${maxWidth} mx-auto px-3 sm:px-6 lg:px-8`}>{children}</div>
  );
}

export default Container;
