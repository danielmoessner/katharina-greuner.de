import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Pre from "../components/Pre";
import Heading from "../components/Heading";
import Button from "../components/Button";
import DynamicForm from "../components/DynamicForm";
import Header from "../components/Header";
import Container from "../components/Container";
import styleguide from "../content/page/styleguide.json";

function Page() {
  const page = styleguide;

  const headingText = "Lorem ipsum dolor sit";

  const fields = [
    {
      label: "Vorame",
      name: "vorname",
      value: "Max",
    },
    {
      label: "Nachname",
      name: "nachname",
    },
    {
      label: "E-Mail",
      name: "email",
      type: "email",
      className: "sm:col-span-2",
      placeholder: "meine-tolle-email@meine-domain.de",
    },
    {
      label: "Kategorie",
      name: "kategorie",
      element: "select",
      className: "sm:col-span-2",
      children: [
        <option key="1" value="auftrag">
          Auftrag
        </option>,
        <option key="2" value="frage">
          Frage
        </option>,
      ],
    },
    {
      label: "Nachricht",
      name: "nachricht",
      element: "textarea",
      required: false,
      className: "sm:col-span-2",
      attrs: {
        rows: 3,
      },
    },
  ];

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <section className="pt-16 pb-16">
        <Container layout="sm">
          <Pre element="h2">Typographie</Pre>
          <div className="mt-8 space-y-8">
            <div className="flex items-baseline justify-between">
              <Heading element="div" size="h1">
                {headingText}
              </Heading>
              <div>H1</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Heading element="div" size="h2">
                {headingText}
              </Heading>
              <div>H2</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Heading element="div" size="h3">
                {headingText}
              </Heading>
              <div>H3</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Pre>{headingText}</Pre>
              <div>Pre</div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-16 pb-16">
        <Container layout="sm">
          <Pre element="h2">Buttons</Pre>
          <div className="mt-8 space-y-8">
            <div className="flex items-baseline justify-between">
              <Button ringOffset="ring-offset-white" href="/styleguide/">
                Button
              </Button>
              <div>(Primary, Link-Tag)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button
                ringOffset="ring-offset-white"
                href="/styleguide/"
                secondary
              >
                Button
              </Button>
              <div>(Secondary, Link-Tag)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button
                ringOffset="ring-offset-white"
                href="/styleguide/"
                element="a"
              >
                Button
              </Button>
              <div>(Primary, A-Tag)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button
                ringOffset="ring-offset-white"
                type="submit"
                element="button"
                color="bg-gray-200 hover:bg-gray-800 ring-offset-white transition focus:ring-gray-900 text-black hover:text-white"
              >
                Button
              </Button>
              <div>(Primary, Button-Tag, Colors)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button ringOffset="ring-offset-white" href="/styleguide/">
                Button
              </Button>
              <div>(Primary, Link-Tag, RingOffsetBlack)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button
                ringOffset="ring-offset-white"
                href="/styleguide/"
                size="px-6 py-3 text-base"
              >
                Button Big
              </Button>
              <div>(Primary, Size)</div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-16 pb-32">
        <Container layout="sm">
          <Pre element="h2">Formulare</Pre>
          <div className="mt-8 space-y-8">
            <DynamicForm fields={fields} />
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Page;
