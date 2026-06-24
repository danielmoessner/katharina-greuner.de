interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

function Section({ children, className = "", id }: Props) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export default Section;
