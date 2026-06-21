import type { SixSectionContent } from "@/content/six-section";
import { faqSchema } from "@/lib/structured-data";
import { CheckCircle2 } from "lucide-react";

// ─── Dynamic imports (lazy, SSR-enabled) ───────────────────────────────────
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FaqSection from "@/components/sections/page/FaqSection";
import CTA from "@/components/sections/CTA";

/**
 * SixSectionLayout — unified layout that renders exactly 6 content sections
 * for every marketing page. The content object drives ALL copy so every page
 * ships unique H1/H2/FAQ text with zero duplication.
 *
 *  Section 1: Hero         (H1, CTA, social proof)
 *  Section 2: UVP          (page-specific angle, 3 key differentiators)
 *  Section 3: SEO Features (6 feature cards with Dutch keywords)
 *  Section 4: How It Works (exactly 3 steps, unique per page)
 *  Section 5: Trust        (stats, testimonials, trust signals)
 *  Section 6: Conversion   (pricing, exactly 8 FAQs, final CTA)
 */
export default function SixSectionLayout({
  content,
}: {
  content: SixSectionContent;
}) {
  const {
    hero,
    uvpEyebrow,
    uvpTitle,
    uvpSubtitle,
    uvpItems,
    featuresEyebrow,
    featuresTitle,
    featuresSubtitle,
    featuresItems,
    howEyebrow,
    howTitle,
    howSubtitle,
    howSteps,
    trustEyebrow,
    trustTitle,
    trustSubtitle,
    trustItems,
    showStats,
    showTestimonials,
    faqs,
    cta,
  } = content;

  return (
    <main className="flex-1">
      {/* FAQPage JSON-LD (Section 6) — server-side, not affected by client filtering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)).replace(/</g, "\\u003c"),
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1 — Hero (H1 + brand + primary CTA + social proof)       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <Hero
        pillText={hero.pill}
        bgImage={hero.bg}
        title={
          <>
            {hero.titleLead}
            <span className="mt-2 block bg-linear-to-r from-france-300 via-france-400 to-france-500 bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
            {hero.titleTail ? (
              <span className="mt-2 block">{hero.titleTail}</span>
            ) : null}
          </>
        }
        subtitle={hero.subtitle}
      />

      <div className="space-y-28 pb-28 sm:space-y-32 sm:pb-32">
        {/* ══════════════════════════════════════════════════════════════ */}
        {/* SECTION 2 — Unique Value Proposition (page-specific angle)   */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <section
          id="waarom"
          className="container mx-auto scroll-mt-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              {uvpEyebrow && (
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-france-500">
                  {uvpEyebrow}
                </span>
              )}
              <h2 className="mb-5 text-3xl font-black leading-tight text-blanc-50 lg:text-5xl">
                {uvpTitle}
              </h2>
              {uvpSubtitle && (
                <p className="mx-auto max-w-2xl text-lg text-blanc-400">
                  {uvpSubtitle}
                </p>
              )}
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {uvpItems.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-blanc-50/5 bg-france-900 p-8 text-center transition-all hover:-translate-y-1 hover:border-france-500/30"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-france-700/25 bg-france-700/15 text-france-400 transition-colors group-hover:border-france-500/45">
                    <CheckCircle2 size={28} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-blanc-50">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-blanc-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* SECTION 3 — SEO Features Block (Dutch keywords integrated)   */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <section
          id="functies"
          className="container mx-auto scroll-mt-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              {featuresEyebrow && (
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-france-500">
                  {featuresEyebrow}
                </span>
              )}
              <h2 className="mb-5 text-3xl font-black leading-tight text-blanc-50 lg:text-5xl">
                {featuresTitle}
              </h2>
              {featuresSubtitle && (
                <p className="mx-auto max-w-2xl text-lg text-blanc-400">
                  {featuresSubtitle}
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuresItems.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-blanc-50/5 bg-blanc-50/[0.02] p-6 transition-all hover:-translate-y-0.5 hover:border-france-500/25"
                >
                  <h3 className="mb-3 text-lg font-black text-blanc-50">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-blanc-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* SECTION 4 — How It Works (exactly 3 steps, page-specific)     */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <section
          id="hoe-het-werkt"
          className="container mx-auto scroll-mt-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              {howEyebrow && (
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-france-500">
                  {howEyebrow}
                </span>
              )}
              <h2 className="mb-5 text-3xl font-black leading-tight text-blanc-50 lg:text-5xl">
                {howTitle}
              </h2>
              {howSubtitle && (
                <p className="mx-auto max-w-2xl text-lg text-blanc-400">
                  {howSubtitle}
                </p>
              )}
            </div>

            <div className="relative">
              {/* Connecting line (desktop) */}
              <div
                aria-hidden="true"
                className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-linear-to-r from-transparent via-france-500/30 to-transparent lg:block"
              />

              <div className="grid gap-8 md:grid-cols-3">
                {howSteps.map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="group relative flex flex-col items-center text-center"
                  >
                    <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-france-500/30 bg-france-900 shadow-[0_0_40px_-10px] shadow-france-500/20 transition-shadow group-hover:shadow-france-500/40">
                      <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-rouge-500 text-sm font-black text-blanc-50 shadow-md">
                        {step}
                      </span>
                      <CheckCircle2
                        size={36}
                        aria-hidden="true"
                        className="text-france-400"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-black text-blanc-50">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-blanc-400">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* SECTION 5 — Trust / Credibility / Social Proof               */}
        {/* ══════════════════════════════════════════════════════════════ */}
        {showStats && <Stats />}

        <section
          id="vertrouwen"
          className="container mx-auto scroll-mt-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              {trustEyebrow && (
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-france-500">
                  {trustEyebrow}
                </span>
              )}
              <h2 className="mb-5 text-3xl font-black leading-tight text-blanc-50 lg:text-5xl">
                {trustTitle}
              </h2>
              {trustSubtitle && (
                <p className="mx-auto max-w-2xl text-lg text-blanc-400">
                  {trustSubtitle}
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blanc-50/5 bg-france-900 p-6 text-center transition-all hover:-translate-y-0.5 hover:border-france-500/25"
                >
                  <h3 className="mb-3 text-lg font-black text-blanc-50">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-blanc-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {showTestimonials && (
          <section
            id="beoordelingen"
            className="scroll-mt-24"
            aria-label="Klantbeoordelingen en vertrouwenssignalen"
          >
            <Testimonials />
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* SECTION 6 — Conversion + FAQ (exactly 8 questions)           */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Pricing />

        <FaqSection faqs={faqs} />

        <CTA title={cta.title} description={cta.description} />
      </div>
    </main>
  );
}
