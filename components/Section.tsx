interface Props {
  children: React.ReactNode;
  className?: string;
}

function Section({ children, className = "" }: Props) {
  return <section className={className}>{children}</section>;
}

export default Section;
