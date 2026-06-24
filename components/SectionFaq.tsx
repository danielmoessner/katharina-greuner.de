import React, { useState } from "react";
import Container from "./Container";

interface FAQItem {
  question: string;
  answer: string;
}

interface SectionFaqProps {
  id?: string;
  title?: string;
  items?: FAQItem[];
}

function SectionFaq({ id, title = "FAQ", items = [] }: SectionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items.length) {
    return null;
  }

  return (
    <section id={id} className="py-16 lg:py-24 bg-neutral-50">
      <Container layout="sm">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl text-kg-brown">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-9">
            <div className="divide-y divide-kg-brown/25 border-y border-kg-brown/25">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={`${item.question}-${index}`} className="py-5">
                    <button
                      type="button"
                      className="flex items-start justify-between w-full gap-4 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-2xl font-light leading-tight sm:text-3xl text-kg-brown">
                        {item.question}
                      </span>
                      <span
                        className={`mt-1 text-4xl leading-none text-kg-brown transition-transform duration-200 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 pr-10 text-lg leading-relaxed whitespace-pre-line text-kg-brown/85">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionFaq;
