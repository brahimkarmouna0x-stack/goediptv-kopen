import Link from "next/link";
import { Check } from "lucide-react";
import type { PageSection } from "@/content/iptv-german-pages";

type Props = Extract<PageSection, { type: "pricing" }>;

export default function PricingSection({ heading, subheading, tiers }: Props) {
  return (
    <section
      id="pricing"
      className="section-contain py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="mb-14 text-center">
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

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? "border-france-400/40 bg-france-500/[0.06] glow-gold"
                  : "border-blanc-50/8 bg-blanc-50/[0.03]"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-france-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-france-950">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-black uppercase tracking-wide text-blanc-100">
                {tier.name}
              </h3>
              {tier.description && (
                <p className="mt-1 text-sm font-medium text-blanc-500">
                  {tier.description}
                </p>
              )}
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-black text-blanc-50">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm font-bold text-blanc-500">
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-france-400"
                    />
                    <span className="text-sm font-medium text-blanc-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`btn-shine mt-8 rounded-full px-6 py-3.5 text-center text-sm font-bold uppercase tracking-widest transition-all active:scale-95 ${
                  tier.highlighted
                    ? "bg-rouge-500 text-blanc-50 shadow-lg shadow-rouge-500/25 hover:bg-rouge-600"
                    : "border border-blanc-50/10 bg-blanc-50/5 text-blanc-50 hover:bg-blanc-50/10"
                }`}
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
