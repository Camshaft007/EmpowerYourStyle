export function SectionHeading({ eyebrow, title, children, align = "center" }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-rose">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-navy md:text-5xl text-balance">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-8 text-ink/70 md:text-lg">{children}</p> : null}
    </div>
  );
}
