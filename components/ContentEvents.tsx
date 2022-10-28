import data from "../content/seminar/der-kreis-des-seelenweberinnen.json";

function ContentEvents({ list }) {
  const events = data;

  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <ContentEvents list={list} />
        {/* <div className="flex flex-col gap-y-4 ">
          {events.map((event) => (
            <div className="flex flex-row " key={event.month}>
              <div>{event.month}</div>
              <div>{event.date}</div>
              <div>{event.time}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default ContentEvents;
