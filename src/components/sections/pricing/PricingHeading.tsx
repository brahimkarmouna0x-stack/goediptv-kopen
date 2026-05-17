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
        {pillText || "Nos Offres"}
      </span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
        {title || (
          <>
            Choisissez Votre <span className="text-gradient">Offre</span>
          </>
        )}
      </h2>
      <p className="text-blanc-400 max-w-2xl mx-auto font-medium mb-8">
        {subtitle ||
          "Des offres flexibles conçues pour chaque spectateur. Mettez à niveau, réduisez ou annulez à tout moment."}
      </p>
    </div>
  );
}
