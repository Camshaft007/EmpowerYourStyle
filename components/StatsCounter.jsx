"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Women styled" },
  { value: 10,  suffix: "+", label: "Years experience" },
  { value: 98,  suffix: "%", label: "Satisfaction rate" },
  { value: 4,   suffix: "",  label: "Specialist services" }
];

function useCountUp(target, duration = 1400, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return active ? count : 0;
}

function StatItem({ value, suffix, label, active }) {
  const count = useCountUp(value, 1400, active);
  return (
    <div className="text-center">
      <p className="font-serif text-5xl text-navy md:text-6xl">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/60">{label}</p>
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-rose/10 bg-white px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}
