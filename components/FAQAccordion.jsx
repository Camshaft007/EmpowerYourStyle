"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a large or expensive wardrobe to work with a stylist?",
    a: "Not at all. Emilia works with what you already own and helps you see the pieces differently. Shopping is only part of the picture — clarity and confidence come first."
  },
  {
    q: "Which service should I start with?",
    a: "If you're unsure of your colours, start with a Colour Analysis — it informs every other decision. If your wardrobe feels overwhelming, a Wardrobe Refresh is the most practical first step. Not sure? Take the free Style Quiz or send Emilia a note."
  },
  {
    q: "Can sessions be done online?",
    a: "Yes. Colour Analysis, style consultations and Personal Shopping support are all available online for clients across New Zealand and beyond."
  },
  {
    q: "How long does a session take?",
    a: "Colour Analysis sessions typically run 2–3 hours. Wardrobe Refreshes vary depending on your wardrobe size, usually 3–5 hours. Personal Shopping is flexible and can be done in a focused half-day."
  },
  {
    q: "Will I be told what I can and can't wear?",
    a: "Never. Emilia's approach is about helping you find what genuinely works for your colouring, body and lifestyle — not imposing rules. The goal is to make getting dressed feel easier, not more restricted."
  },
  {
    q: "What if my body or lifestyle has changed?",
    a: "That's exactly the right time to book. Emilia regularly works with women going through transitions — whether that's a career change, body change, or simply wanting to feel like themselves again."
  }
];

export function FAQAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-mist px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.24em] text-rose">Common questions</p>
        <h2 className="mb-12 text-center font-serif text-4xl leading-tight text-navy md:text-5xl">
          Everything you want to know before booking.
        </h2>
        <div className="divide-y divide-navy/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-navy">{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-5" : "max-h-0"}`}
                >
                  <p className="text-base leading-8 text-ink/70">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
