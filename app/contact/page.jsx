import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Book a personal colour analysis, wardrobe refresh, personal shopping or style confidence consultation with Empower Your Style in Auckland or online."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose">Contact and booking</p>
            <h1 className="font-serif text-4xl leading-tight text-navy md:text-6xl text-balance">
              Start with a note about where you are now.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/72">
              Tell Emilia what you would love help with, whether it is colour clarity, a wardrobe reset, shopping support or a confidence boost before a new season.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-ink/70">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="rounded-2xl bg-white px-5 py-4 shadow-soft">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="rounded-2xl bg-white px-5 py-4 shadow-soft">{site.email}</a>
              <p className="rounded-2xl bg-white px-5 py-4 shadow-soft">{site.location} - Online across New Zealand</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section id="style-quiz" className="bg-white px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Lead magnet" title="Free Style Personality Quiz">
          This section is ready to connect to an email platform such as Mailchimp, Klaviyo or ConvertKit. Use it to capture warm leads who are interested but not ready to book yet.
        </SectionHeading>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 rounded-[2rem] bg-mist p-6 shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="font-serif text-3xl text-navy">Discover your style personality</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">Enter an email form embed here when your quiz or lead magnet platform is selected.</p>
          </div>
          <a href="/style-quiz" className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 text-sm font-semibold text-white">
            Take the Quiz
          </a>
        </div>
      </section>
    </>
  );
}
