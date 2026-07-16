import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ProductFAQ = ({ title = "Frequently Asked Questions", faqs = [] }) => {
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <section className="py-5 px-4 sm:px-10 lg:px-20">
        <h2 className="text-primary font-extrabold text-[24px] sm:text-[30px] mb-6">
          {title}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-category rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="font-semibold text-heading text-[17px] pr-4">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index
                    ? "max-h-[300px] pb-5 px-6"
                    : "max-h-0 px-6"
                }`}
              >
                <p className="text-black/70 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductFAQ;