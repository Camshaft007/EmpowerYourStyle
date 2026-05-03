import { SectionHeading } from "@/components/SectionHeading";
import { successStories, testimonials } from "@/data/site";

export const metadata = {
  title: "Success Stories",
  description:
    "Client success stories and testimonials from women who have worked with Empower Your Style for colour, wardrobe and personal styling."
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-cream px-4 py-16 text-center md:px-8 md:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose">Success stories</p>
        <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-navy md:text-6xl text-balance">
          Real transformations begin with feeling seen.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Example client stories Emilia can use as a structure for real transformations, approved images and testimonials.
        </p>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Transformation examples" title="Three story formats to replace with real client wins." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
          {successStories.map((story) => (
            <article key={story.name} className="rounded-[2rem] bg-cream p-5 shadow-soft">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex aspect-[3/4] flex-col justify-between rounded-[1.5rem] bg-white p-4 text-xs font-bold uppercase tracking-[0.16em] text-navy/45">
                  <span>Before</span>
                  <span className="text-[10px] leading-4 normal-case tracking-normal text-ink/45">Add client image</span>
                </div>
                <div className="flex aspect-[3/4] flex-col justify-between rounded-[1.5rem] bg-navy p-4 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                  <span>After</span>
                  <span className="text-[10px] leading-4 normal-case tracking-normal text-white/55">Add client image</span>
                </div>
              </div>
              <div className="p-2 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose">{story.service}</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-navy">{story.headline}</h2>
                <div className="mt-5 grid gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-navy">Before</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/68">{story.before}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">After</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/68">{story.after}</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <h3 className="text-sm font-semibold text-navy">Client win</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/68">{story.result}</p>
                  </div>
                </div>
                <p className="mt-5 rounded-2xl bg-mist px-5 py-4 text-xs leading-6 text-ink/58">
                  <span className="font-semibold text-rose">Template note: </span>
                  {story.replaceWith}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Testimonials" title="Confidence, clarity and wardrobes that finally make sense." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-[2rem] bg-white p-7 shadow-soft">
              <blockquote className="font-serif text-2xl leading-9 text-navy">&quot;{item.quote}&quot;</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-rose">
                {item.name}
                <span className="block pt-1 font-normal text-ink/60">{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
