import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { posts, site } from "@/data/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/resources/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/resources/${post.slug}`,
      type: "article"
    }
  };
}

export default async function ResourceArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Emilia"
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    },
    mainEntityOfPage: `${site.url}/resources/${post.slug}`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article>
        <header className="bg-cream px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Link href="/resources" className="text-sm font-semibold text-rose">
              Resources
            </Link>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-rose">
              {post.category} - {post.readTime}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-navy md:text-6xl text-balance">
              {post.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ink/72">
              {post.intro}
            </p>
          </div>
        </header>

        <div className="bg-white px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_320px]">
            <div className="rounded-[2rem] bg-cream p-6 shadow-soft md:p-10">
              <div className="grid gap-10">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-serif text-3xl leading-tight text-navy md:text-4xl">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-ink/72">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <section className="mt-12 rounded-[1.5rem] bg-white p-6">
                <h2 className="font-serif text-3xl text-navy">Practical next steps</h2>
                <ul className="mt-5 grid gap-3">
                  {post.tips.map((tip) => (
                    <li key={tip} className="rounded-2xl bg-mist px-5 py-4 text-sm leading-7 text-ink/72">
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl text-navy">Frequently asked questions</h2>
                <div className="mt-5 grid gap-4">
                  {post.faq.map((item) => (
                    <div key={item.question} className="rounded-[1.5rem] bg-white p-6">
                      <h3 className="text-base font-semibold text-navy">{item.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-ink/68">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[2rem] bg-navy p-7 text-white shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blush">
                  Work with Emilia
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight">
                  Ready for personal advice?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {post.cta}
                </p>
                <ButtonLink href="/contact" variant="secondary" className="mt-6 w-full">
                  Book a Consultation
                </ButtonLink>
              </div>

              <div className="mt-6 rounded-[2rem] bg-mist p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose">
                  Search focus
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-navy">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
