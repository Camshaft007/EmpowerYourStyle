import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/data/site";

export const metadata = {
  title: "Resources",
  description:
    "Style resources and blog articles for colour analysis, personal styling, wardrobe consulting and shopping confidence in New Zealand."
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-cream px-4 py-16 text-center md:px-8 md:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose">Resources and blog</p>
        <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-navy md:text-6xl text-balance">
          Practical style guidance that builds trust before visitors book.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Use these article foundations to rank locally, answer common questions and invite women into the Empower Your Style process.
        </p>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Featured articles" title="Helpful style advice for women in New Zealand." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/resources/${post.slug}`} className="rounded-[2rem] bg-cream p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose">{post.category}</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/68">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-navy">{post.readTime} - Read article -&gt;</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-soft md:p-12">
          <h2 className="font-serif text-4xl text-navy">Google ranking opportunities</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Create a dedicated Colour Analysis Auckland article with FAQs, palette examples and suburb mentions.",
              "Build a Personal Stylist Auckland service page with clear pricing, process, reviews and local schema.",
              "Publish Wardrobe Consultant NZ guides for wardrobe edits, capsule wardrobes and seasonal refreshes.",
              "Write Style Coach for Women NZ content around confidence, life transitions, workwear and post-partum style.",
              "Add real client before-and-after stories with alt text, testimonials and internal links to booking.",
              "Keep Google Business Profile updated with photos, service categories and review requests."
            ].map((idea) => (
              <p key={idea} className="rounded-2xl bg-cream px-5 py-4 text-sm leading-7 text-ink/70">{idea}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
