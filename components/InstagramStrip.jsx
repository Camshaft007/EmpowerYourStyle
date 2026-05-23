import Image from "@/components/SiteImage";
import { site } from "@/data/site";

const posts = [
  { src: "/images/Background6.jpg",      alt: "Style session" },
  { src: "/images/Personalised.jpg",     alt: "Personalised styling" },
  { src: "/images/Wardrobe.jpg",         alt: "Wardrobe clarity" },
  { src: "/images/personal-shopping.jpg",alt: "Personal shopping" },
  { src: "/images/event.jpg",            alt: "Event styling" },
  { src: "/images/AboutMe2.jpg",         alt: "Emilia at work" },
];

export function InstagramStrip() {
  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-rose">On Instagram</p>
            <h2 className="mt-1 font-serif text-2xl text-navy">@empower_your_style</h2>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-cream"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Follow us
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.src}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
              aria-label={`View ${post.alt} on Instagram`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-navy/0 transition duration-300 group-hover:bg-navy/25" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
