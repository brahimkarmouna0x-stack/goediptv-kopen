"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { PageSection } from "@/content/iptv-german-pages";

type Props = Extract<PageSection, { type: "testimonials" }>;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          aria-hidden="true"
          className={
            i < rating ? "fill-france-400 text-france-400" : "text-blanc-700"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  heading,
  subheading,
  reviews,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length <= 1) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % reviews.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [paused, reviews.length]);

  const go = (next: number) =>
    setIndex((next + reviews.length) % reviews.length);

  const review = reviews[index];

  return (
    <section className="section-contain py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="mb-12 text-center">
            {subheading && (
              <span className="mb-4 inline-block rounded-full glass px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-france-400 glow-gold">
                {subheading}
              </span>
            )}
            {heading && (
              <h2 className="font-display text-3xl font-bold text-blanc-50 sm:text-4xl">
                {heading}
              </h2>
            )}
          </div>
        )}

        <div
          className="glass-strong relative rounded-3xl border border-blanc-50/8 p-8 sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
        >
          <Quote
            size={40}
            aria-hidden="true"
            className="mb-4 text-france-500/40"
          />
          <p className="mb-6 text-lg font-medium leading-relaxed text-blanc-200 sm:text-xl">
            “{review.text}”
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-black text-blanc-50">
                {review.country && <span className="mr-2">{review.country}</span>}
                {review.author}
              </p>
              <Stars rating={review.rating} />
            </div>
            {reviews.length > 1 && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Vorige beoordeling"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full border border-blanc-50/10 text-blanc-300 transition-colors hover:text-blanc-50"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Volgende beoordeling"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full border border-blanc-50/10 text-blanc-300 transition-colors hover:text-blanc-50"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {reviews.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Beoordeling ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-france-400" : "w-2 bg-blanc-700"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
