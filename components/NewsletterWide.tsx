import Heading from "./Heading";
import DynamicForm from "./DynamicForm";

function Component({ title, form, button, text }) {
  return (
    <div className="px-12 py-8 bg-kg-green/20">
      <div className="flex justify-center text-center">
        <Heading element="h2" size="h2">
          {title}
        </Heading>
      </div>
      <div className="max-w-3xl mx-auto mt-6">
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <DynamicForm fields={form} submitText={button} />
      </div>
      <div className="mt-5">
        <p className="mx-auto text-xs text-center">{text}</p>
      </div>
    </div>
  );
}

export default Component;
