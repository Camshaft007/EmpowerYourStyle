import Link from "next/link";

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }) {
  const styles =
    variant === "secondary"
      ? "border border-navy/20 bg-white/80 text-navy hover:border-rose/50 hover:bg-mist"
      : "bg-navy text-white shadow-glow hover:bg-ink";

  return (
    <Link
      href={href}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
