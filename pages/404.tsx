import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Button from "../components/Button";

const meta = {
  title: "Seite nicht gefunden | Katharina Greuner",
  description:
    "Die angeforderte Seite konnte nicht gefunden werden. Zuruck zur Startseite von Katharina Greuner.",
};

function Custom404() {
  return (
    <Layout>
      <Seo meta={meta} />
      <Container layout="sm">
        <section className="py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em]">Fehler 404</p>
          <h1 className="mt-4 text-4xl md:text-5xl">Seite nicht gefunden</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          <div className="mt-10">
            <Button element="Link" href="/">
              Zur Startseite
            </Button>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default Custom404;