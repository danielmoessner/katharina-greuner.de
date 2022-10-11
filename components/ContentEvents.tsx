import { CmsFieldDateTime } from "netlify-cms-core";

interface ContentEvents {
  date: CmsFieldDateTime;
}

function ContentEvents({ date }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
      <div>
        <ContentEvents date={date} />
      </div>
    </div>
  );
}

export default ContentEvents;
