import type { ReactNode } from "react";

interface PricingHeadingProps {
  pillText?: string;
  title?: ReactNode;
  subtitle?: string;
}

/**
 * Server Component — renders the static pricing heading section.
 * No "use client" needed since this is purely presentational.
 */
export function PricingHeading({ pillText, title, subtitle }: PricingHeadingProps) {
  return (
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full border border-france-500/20 bg-france-500/15 text-france-100 text-sm font-bold mb-4 uppercase tracking-wider">
        {pillText || "Unsere Angebote"}
      </span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
        {title || (
          <>
            Wählen Sie Ihr <span className="text-gradient">Angebot</span>
          </>
        )}
      </h2>
      <p className="text-blanc-400 max-w-2xl mx-auto font-medium mb-8">
        {subtitle ||
          "Flexible Angebote für jeden Zuschauer. Jederzeit upgraden, downgraden oder kündigen."}
      </p>
    </div>
  );
}
