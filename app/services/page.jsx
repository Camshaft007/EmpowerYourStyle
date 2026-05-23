import Image from "@/components/SiteImage";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site";

export const metadata = {
  title: "Services",
  description:
    "Personal colour analysis, wardrobe refreshes, personal shopping and style confidence sessions in Auckland and online across New Zealand."
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream px-4 py-16 text-center md:px-8 md:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose">Styling services</p>
        <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-navy md:text-6xl text-balance">
          Personal styling support for the moments when your wardrobe needs to work harder.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          From colour clarity to full wardrobe direction, each service is designed to remove guesswork and help you feel beautifully put together.
        </p>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              id={service.href.split("#")[1]}
              className="grid scroll-mt-28 overflow-hidden rounded-[2rem] bg-cream shadow-soft lg:grid-cols-2"
            >
              <Image
                src={service.image}
                alt=""
                width={900}
                height={700}
                className={`h-full min-h-[360px] w-full object-cover ${index % 2 ? "lg:order-2" : ""}`}
              />
              <div className="p-8 md:p-12">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-rose">
                  0{index + 1}
                </p>
                <h2 className="font-serif text-4xl text-navy">{service.title}</h2>
                <p className="mt-5 text-lg leading-8 text-ink/72">{service.summary}</p>
                <p className="mt-4 text-base leading-8 text-ink/65">{service.detail}</p>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/70">
                  <li className="rounded-2xl bg-white px-4 py-3">Clear recommendations for your colours, shapes and priorities.</li>
                  <li className="rounded-2xl bg-white px-4 py-3">A practical plan you can use after the session.</li>
                  <li className="rounded-2xl bg-white px-4 py-3">Available in Auckland or online, depending on the service.</li>
                </ul>
                <ButtonLink href="/contact" className="mt-8">Enquire About This Service</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist px-4 py-20 text-center md:px-8">
        <SectionHeading eyebrow="Not sure where to start?" title="Book the conversation first.">
          Share what feels hard about getting dressed right now and Emilia will recommend the best next step.
        </SectionHeading>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Consultation</ButtonLink>
        </div>
      </section>
    </>
  );
}
