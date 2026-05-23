import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQAccordion } from "@/components/FAQAccordion";
import { InstagramStrip } from "@/components/InstagramStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsCounter } from "@/components/StatsCounter";
import { services, testimonials } from "@/data/site";

const trustItems = [
  "Auckland Based",
  "In person & online",
  "Hundreds of happy clients",
  "Practical personalised advice"
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_0.9fr]">
          <div className="reveal">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-rose">
              Personal styling for women in New Zealand
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-navy md:text-6xl lg:text-7xl text-balance">
              Discover the colours and style that make you look radiant, confident and effortlessly you.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              Personalised colour and style expertise that helps you save time, shop smarter and feel amazing every day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink href="/style-quiz" variant="secondary">Take the Style Quiz</ButtonLink>
            </div>
          </div>
          <div className="reveal-delay relative">
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-blush/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] bg-white p-3 shadow-soft">
              <Image
                src="/images/Background6.jpg"
                alt="Elegant wardrobe and styling inspiration"
                width={900}
                height={1100}
                priority
                className="h-[520px] w-full rounded-[1.75rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 max-w-xs rounded-3xl bg-white/88 p-5 shadow-soft backdrop-blur">
                <p className="font-serif text-2xl text-navy">Style clarity, made personal.</p>
                <p className="mt-2 text-sm leading-6 text-ink/65">Colour, wardrobe and shopping support designed around your life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-rose/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-6 md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div key={item} className="rounded-2xl bg-cream px-4 py-4 text-center text-sm font-semibold text-navy">
              {item}
            </div>
          ))}
        </div>
      </section>

      <StatsCounter />

      <section className="bg-white px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Signature services" title="A calmer, more confident way to get dressed.">
          Choose focused support for colour, wardrobe, shopping or style confidence. Every session is practical, warm and tailored to you.
        </SectionHeading>
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group overflow-hidden rounded-[2rem] bg-cream shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <Image src={service.image} alt="" width={520} height={420} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Real women, real transformations" title="Style that feels like you on your best day." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Colour clarity", "Wardrobe ease", "Shopping confidence"].map((title, index) => (
              <div key={title} className="rounded-[2rem] bg-white p-4 shadow-soft">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex aspect-[3/4] items-end rounded-[1.5rem] bg-gradient-to-br from-champagne to-white p-4 text-xs font-bold uppercase tracking-[0.16em] text-navy/50">
                    Before
                  </div>
                  <div className="flex aspect-[3/4] items-end rounded-[1.5rem] bg-gradient-to-br from-navy to-rose p-4 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                    After
                  </div>
                </div>
                <p className="mt-5 font-serif text-2xl text-navy">{title}</p>
                <p className="mt-2 text-sm leading-6 text-ink/65">Replace with client imagery when ready.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div className="relative">
            <Image src="/images/AboutMe2.jpg" alt="Emilia, founder of Empower Your Style" width={900} height={1100} className="h-[560px] w-full rounded-[2rem] object-cover shadow-soft" />
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose">Meet Emilia</p>
            <h2 className="font-serif text-4xl leading-tight text-navy md:text-5xl">European elegance, Auckland warmth and style advice you can actually use.</h2>
            <p className="mt-6 text-lg leading-8 text-ink/72">
              Emilia helps women reconnect with their confidence through colour, wardrobe clarity and practical styling. Her approach is polished but never intimidating: thoughtful guidance, honest advice and outfits that suit your body, lifestyle and personality.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              With a background shaped by Europe, Paris and the Australian Style Institute, she brings a refined eye to everyday dressing so you can look put together without overthinking it.
            </p>
            <ButtonLink href="/about-emilia" className="mt-8">About Emilia</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Client words" title="Women leave feeling lighter, clearer and more confident." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-[2rem] bg-cream p-7 shadow-soft">
              <blockquote className="font-serif text-2xl leading-9 text-navy">&quot;{item.quote}&quot;</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-rose">
                {item.name}
                <span className="block pt-1 font-normal text-ink/60">{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="style-quiz" className="bg-navy px-4 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blush">Free style personality quiz</p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl text-balance">Find the style direction that makes getting dressed feel effortless.</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/72">
            A simple lead magnet ready to connect to your email platform. Invite visitors to discover their style personality and start the relationship before they book.
          </p>
          <div>
            <ButtonLink href="/style-quiz" variant="secondary">Take the Style Quiz</ButtonLink>
          </div>
        </div>
      </section>

      <FAQAccordion />

      <InstagramStrip />

      <section className="bg-cream px-4 py-20 text-center md:px-8">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight text-navy md:text-5xl">
          Ready to feel confident in what you wear?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70">
          Book a consultation or send a note about what you would love help with. Emilia will guide you to the best next step.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact">Book Consultation</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact</ButtonLink>
        </div>
      </section>
    </>
  );
}
