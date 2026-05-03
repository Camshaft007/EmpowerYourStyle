import Link from "next/link";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rose/20 bg-cream/95 p-3 shadow-soft backdrop-blur lg:hidden">
      <Link
        href="/contact"
        className="flex min-h-12 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white"
      >
        Book a Consultation
      </Link>
    </div>
  );
}
