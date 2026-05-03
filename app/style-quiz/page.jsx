import { StyleQuiz } from "@/components/StyleQuiz";

export const metadata = {
  title: "Free Style Personality Quiz",
  description:
    "Take the free Empower Your Style quiz to discover your style personality and the next best step for your wardrobe confidence."
};

export default function StyleQuizPage() {
  return (
    <>
      <section className="bg-cream px-4 py-16 text-center md:px-8 md:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose">Free style personality quiz</p>
        <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-navy md:text-6xl text-balance">
          Find the style direction that makes getting dressed feel effortless.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          Answer a few simple questions and discover the style personality that best reflects how you want to look and feel.
        </p>
      </section>

      <section className="bg-mist px-4 py-16 md:px-8 md:py-20">
        <StyleQuiz />
      </section>
    </>
  );
}
