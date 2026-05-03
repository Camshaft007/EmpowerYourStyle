"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { site, styleQuiz } from "@/data/site";

const resultKeys = Object.keys(styleQuiz.results);

function getTopResult(answers) {
  const scores = Object.fromEntries(resultKeys.map((key) => [key, 0]));

  answers.forEach((answer) => {
    if (answer) {
      scores[answer] += 1;
    }
  });

  return resultKeys.reduce((winner, key) => (scores[key] > scores[winner] ? key : winner), resultKeys[0]);
}

export function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [lead, setLead] = useState({ name: "", email: "" });
  const [showResult, setShowResult] = useState(false);

  const question = styleQuiz.questions[step];
  const resultKey = useMemo(() => getTopResult(answers), [answers]);
  const result = styleQuiz.results[resultKey];
  const progress = Math.round(((step + 1) / styleQuiz.questions.length) * 100);

  function chooseAnswer(answer) {
    const nextAnswers = [...answers];
    nextAnswers[step] = answer.result;
    setAnswers(nextAnswers);

    if (step < styleQuiz.questions.length - 1) {
      setStep((current) => current + 1);
    }
  }

  function goBack() {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  }

  function restart() {
    setStep(0);
    setAnswers([]);
    setLead({ name: "", email: "" });
    setShowResult(false);
  }

  function submitLead(event) {
    event.preventDefault();
    const body = encodeURIComponent(
      `Name: ${lead.name}\nEmail: ${lead.email}\nQuiz result: ${result.title}\nSuggested service: ${result.service}`
    );
    window.location.href = `mailto:${site.email}?subject=Style Personality Quiz Result&body=${body}`;
    setShowResult(true);
  }

  const complete = answers.length === styleQuiz.questions.length && answers.every(Boolean);

  if (showResult) {
    return (
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <section className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">Your style personality</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-navy md:text-5xl">{result.title}</h2>
          <p className="mt-5 text-lg leading-8 text-ink/72">{result.summary}</p>

          <div className="mt-8 rounded-[1.5rem] bg-mist p-6">
            <h3 className="font-serif text-2xl text-navy">Your likely wardrobe challenge</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">{result.struggle}</p>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl text-navy">Three things to try next</h3>
            <ul className="mt-4 grid gap-3">
              {result.tips.map((tip) => (
                <li key={tip} className="rounded-2xl bg-cream px-5 py-4 text-sm leading-7 text-ink/72">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="rounded-[2rem] bg-navy p-7 text-white shadow-soft md:p-9 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blush">Recommended next step</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight">{result.service}</h3>
          <p className="mt-5 text-sm leading-7 text-white/74">{result.cta}</p>
          <div className="mt-7 grid gap-3">
            <ButtonLink href="/contact" variant="secondary">Book a Consultation</ButtonLink>
            <button
              type="button"
              onClick={restart}
              className="min-h-12 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Retake Quiz
            </button>
          </div>
        </aside>
      </div>
    );
  }

  if (complete) {
    return (
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">Almost there</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-navy">Where should we send your result?</h2>
        <p className="mt-4 text-base leading-8 text-ink/70">
          Enter your details to reveal your style personality. For now this opens a prefilled email to Emilia, and later it can connect to your email platform.
        </p>
        <form onSubmit={submitLead} className="mt-8 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            First name
            <input
              required
              value={lead.name}
              onChange={(event) => setLead((current) => ({ ...current, name: event.target.value }))}
              className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-normal outline-none transition focus:border-rose"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Email
            <input
              required
              type="email"
              value={lead.email}
              onChange={(event) => setLead((current) => ({ ...current, email: event.target.value }))}
              className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-normal outline-none transition focus:border-rose"
            />
          </label>
          <button type="submit" className="min-h-12 rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:bg-ink">
            Reveal My Result
          </button>
          <button type="button" onClick={goBack} className="text-sm font-semibold text-rose">
            Back to questions
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-soft md:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 text-sm font-semibold text-navy">
          <span>Question {step + 1} of {styleQuiz.questions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-cream">
          <div className="h-full rounded-full bg-rose transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h2 className="font-serif text-3xl leading-tight text-navy md:text-5xl">{question.question}</h2>
      <div className="mt-8 grid gap-3">
        {question.answers.map((answer) => (
          <button
            key={answer.label}
            type="button"
            onClick={() => chooseAnswer(answer)}
            className="rounded-2xl border border-navy/10 bg-cream px-5 py-4 text-left text-sm font-semibold leading-6 text-navy transition hover:border-rose hover:bg-mist"
          >
            {answer.label}
          </button>
        ))}
      </div>

      {step > 0 ? (
        <button type="button" onClick={goBack} className="mt-6 text-sm font-semibold text-rose">
          Back
        </button>
      ) : null}
    </div>
  );
}
