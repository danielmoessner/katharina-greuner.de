import React from "react";
import Link from "next/link";
import Container from "./Container";
import footer from "../content/setting/footer.json";

function Component() {
  return (
    <footer className="bg-kg-green" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <Container layout="sm">
        <div className="pt-12 lg:pt-16">
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-12 gap-x-8 gap-y-12 md:gap-8">
              {footer.columns &&
                footer.columns.map((column) => (
                  <div key={column.title} className={column.class}>
                    <h3 className="text-2xl font-bold tracking-wider text-white">
                      {column.title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {column.content &&
                        column.content.map((item) => {
                          let element = <div>?</div>;
                          if (item.type === "text")
                            element = (
                              <div className="text-base whitespace-pre-line text-teal-50">
                                {item.text}
                              </div>
                            );
                          if (item.type === "link")
                            element = (
                              <Link href={item.href}>
                                <a className="text-base text-teal-50 hover:text-white">
                                  {item.text}
                                </a>
                              </Link>
                            );
                          if (item.type === "externalLink")
                            element = (
                              <a
                                href={item.href}
                                target="_blank"
                                className="text-base text-teal-50 hover:text-white"
                                rel="noreferrer"
                              >
                                {item.text}
                              </a>
                            );

                          return (
                            <li key={`${item.text}${item.type}`}>{element}</li>
                          );
                        })}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
          <div className="pt-12 pb-8">
            <p className="text-base text-white">{footer.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Component;
