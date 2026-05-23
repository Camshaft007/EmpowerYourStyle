import Image from "@/components/SiteImage";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "About Emilia",
  description:
    "Meet Emilia, Auckland personal stylist and founder of Empower Your Style, offering warm, practical colour and wardrobe advice for women."
};

export default function AboutEmiliaPage() {
  return (
    <>
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src="/images/AboutMe2.jpg" alt="Emilia, personal stylist in Auckland" width={900} height={1100} priority className="h-[620px] w-full rounded-[2.25rem] object-cover shadow-soft" />
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose">About Emilia</p>
            <h1 className="font-serif text-4xl leading-tight text-navy md:text-6xl text-balance">
              Helping women feel polished, confident and completely themselves.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/72">
              Emilia founded Empower Your Style to make personal styling feel accessible, uplifting and genuinely useful. Her work is not about chasing trends or becoming someone else. It is about understanding your colours, proportions, lifestyle and personality so your wardrobe supports the woman you are now.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Raised in Europe and inspired by five years in Paris, Emilia brings an elegant eye to practical dressing. After training with the Australian Style Institute and working with clients in Melbourne and Auckland, she now supports women across New Zealand in person and online.
            </p>
            <ButtonLink href="/contact" className="mt-8">Work With Emilia</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Her approach" title="Warm, honest advice without the overwhelm.">
          Sessions are collaborative and encouraging. You will leave with clear colour direction, practical outfit ideas and a sharper sense of what deserves a place in your wardrobe.
        </SectionHeading>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            ["Personal", "Advice is tailored to your colouring, shape, lifestyle, budget and comfort level."],
            ["Practical", "You receive guidance you can use immediately, from outfit formulas to smarter shopping decisions."],
            ["Confidence-led", "The goal is not perfection. It is ease, self-expression and feeling good in your skin."]
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[2rem] bg-cream p-7 shadow-soft">
              <h2 className="font-serif text-3xl text-navy">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/68">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
