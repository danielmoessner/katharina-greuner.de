function ContentEvents({ list }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <ContentEvents list={list} />
      </div>
    </div>
  );
}

export default ContentEvents;
