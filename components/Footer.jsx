import Link from "next/link";
import { navItems, site } from "@/data/site";

const icons = {
  Instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M14.2 8.3V6.7c0-.8.5-1 1-1h1.5V3.1c-.7-.1-1.5-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v1.4H8.2V11h2.5v10h3.1V11h2.5l.4-2.7h-2.5Z" />
    </svg>
  ),
  Pinterest: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12.1 2.8C7 2.8 4.4 6.3 4.4 9.3c0 1.8.7 3.5 2.2 4.1.2.1.5 0 .6-.3.1-.2.2-.8.3-1 .1-.3.1-.4-.1-.7-.4-.5-.7-1.1-.7-2 0-2.7 2-5.1 5.2-5.1 2.8 0 4.4 1.7 4.4 4.1 0 3-1.3 5.5-3.3 5.5-1.1 0-1.9-.9-1.6-2 .3-1.3.9-2.7.9-3.7 0-.8-.5-1.5-1.4-1.5-1.1 0-2 1.2-2 2.7 0 1 .3 1.7.3 1.7s-1.2 5-1.4 5.9c-.3 1.3 0 3 .1 4.2 0 .2.3.3.4.1.6-.8 1.6-2.3 1.9-3.6.1-.5.6-2.4.6-2.4.3.6 1.2 1.1 2.1 1.1 2.8 0 4.7-2.5 4.7-5.9 0-2.6-2.2-5-5.5-5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M6.8 8.8H3.7V20h3.1V8.8ZM5.3 7.3c1 0 1.7-.7 1.7-1.6S6.3 4 5.3 4 3.6 4.7 3.6 5.7s.7 1.6 1.7 1.6ZM20.4 13.6c0-3-1.6-5-4.1-5-1.9 0-2.8 1.1-3.3 1.8V8.8H10V20h3.1v-5.5c0-1.5.3-3 2.2-3 1.8 0 1.9 1.7 1.9 3.1V20h3.1v-6.4Z" />
    </svg>
  )
};

export function Footer() {
  const socialLinks = [
    ["Instagram", site.instagram],
    ["Facebook", site.facebook],
    ["Pinterest", site.pinterest],
    ["LinkedIn", site.linkedin]
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Personal colour analysis, wardrobe refreshes and style confidence support for women in Auckland and online across New Zealand.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blush">Explore</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blush">Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-white/72">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            <p>{site.location}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
              {socialLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label} profile`}
                >
                  {icons[label]}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55">
        (c) {new Date().getFullYear()} Empower Your Style. All rights reserved.
      </div>
    </footer>
  );
}
