import Layout from "../components/Layout";
import Seo from "../components/Seo";
import contact from "../content/page/contact.json";
import { renderContent } from "lib/renderContent";
import SectionStart from "../components/SectionStart";
import SectionFlowerBackground from "components/SectionFlowerBackground";
import Heading from "components/Heading";
import SectionContent from "components/SectionContent";
import Prose from "components/Prose";
import NewsletterWide from "components/NewsletterWide";
import DynamicForm from "components/DynamicForm";
import ContentImageMarkdown from "components/ContentImageMarkdown";

function Page({ pageData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <SectionStart start={page.contact}>
        <div className="mt-16">
          <ContentImageMarkdown
            html={page.contact.markdown.html}
            image={page.contact.image}
            alt={page.contact.title}
          />
        </div>
        <div className="mt-12">
          <DynamicForm
            fields={page.contact.form}
            submitText={page.contact.button}
          />
        </div>
      </SectionStart>
      <SectionFlowerBackground>
        <div className="py-8">
          <div className="flex justify-center text-center">
            <Heading element="h2" size="h2">
              {page.directions.title}
            </Heading>
          </div>
          <div className="mt-10">{/* map */}</div>
          <div className="mt-10">
            <p className="block mx-auto text-center">{page.directions.maps}</p>
          </div>
        </div>
      </SectionFlowerBackground>
      <SectionContent>
        <div className="space-y-20">
          {page.information.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center text-center">
                <Heading element="h2" size="h2">
                  {item.title}
                </Heading>
              </div>
              <div className="mt-8">
                <Prose html={item.markdown.html} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <NewsletterWide
            title={page.newsletter.title}
            button={page.newsletter.button}
            form={page.newsletter.form}
            text={page.newsletter.text}
          />
        </div>
      </SectionContent>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(contact);

  return {
    props: { pageData },
  };
}

export default Page;
