function Component({ children, heightFull = false }) {
  return (
    <div className={`${heightFull && "h-full"} border-b-2 border-kg-yellow`}>
      <div className="leading-[0] h-full">{children}</div>
    </div>
  );
}

export default Component;
