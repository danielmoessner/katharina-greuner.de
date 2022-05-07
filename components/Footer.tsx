import React from "react";
import Link from "next/link";
// import { useStaticQuery, graphql, Link } from "gatsby";
import Container from "./Container";
import global from "../content/setting/global.json";
import footer from "../content/setting/footer.json";

function Component() {
  // const data = useStaticQuery(graphql`
  //   {
  //     footer: settingYaml(slug: { eq: "footer" }) {
  //       copyright
  //       text
  //       columns {
  //         title
  //         class
  //         content {
  //           url
  //           text
  //           type
  //         }
  //       }
  //     }
  //     global: settingYaml(slug: { eq: "global" }) {
  //       tortugaWebdesignLogo
  //     }
  //   }
  // `);
  // const { footer, global } = data;

  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <Container layout="sm">
        <div className="pt-12 border-t lg:pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div
                className="text-gray-800 w-72"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: global.tortugaWebdesignLogo,
                }}
              />
              <p className="text-base text-gray-500">{footer.text}</p>
            </div>
            <div className="mt-12 xl:mt-0 xl:col-span-2">
              <div className="grid grid-cols-12 gap-x-8 gap-y-12 md:gap-8">
                {footer.columns &&
                  footer.columns.map((column) => (
                    <div key={column.title} className={column.class}>
                      <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                        {column.title}
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {column.content &&
                          column.content.map((item) => {
                            let element = <div>?</div>;
                            if (item.type === "text")
                              element = (
                                <div className="text-base text-gray-500 whitespace-pre-line">
                                  {item.text}
                                </div>
                              );
                            if (item.type === "link")
                              element = (
                                <Link href={item.url}>
                                  <a className="text-base text-gray-500 hover:text-gray-900">
                                    {item.text}
                                  </a>
                                </Link>
                              );
                            if (item.type === "externalLink")
                              element = (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  className="text-base text-gray-500 hover:text-gray-900"
                                  rel="noreferrer"
                                >
                                  {item.text}
                                </a>
                              );

                            return (
                              <li key={`${item.text}${item.type}`}>
                                {element}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8 mt-12 border-t border-gray-200">
            <p className="text-base text-gray-400 xl:text-center">
              {footer.copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Component;
