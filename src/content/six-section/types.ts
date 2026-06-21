import type { ReactNode } from "react";

// ─── FAQ entry (exactly 8 per page) ────────────────────────────────────────
export type SixFaq = {
  question: string;
  answer: string;
};

// ─── Hero section (Section 1) ──────────────────────────────────────────────
export type SixHero = {
  pill: string;
  titleLead: string;
  titleHighlight: string;
  titleTail?: string;
  subtitle: string;
  bg?: string;
};

// ─── UVP / key differentiator item (Section 2) ─────────────────────────────
export type SixUvpItem = {
  title: string;
  desc: string;
};

// ─── SEO feature item (Section 3) ──────────────────────────────────────────
export type SixFeatureItem = {
  title: string;
  desc: string;
};

// ─── How-it-works step (Section 4 — exactly 3) ────────────────────────────
export type SixHowStep = {
  step: string;
  title: string;
  desc: string;
};

// ─── Trust signal (Section 5) ──────────────────────────────────────────────
export type SixTrustItem = {
  title: string;
  desc: string;
};

// ─── Final CTA (Section 6) ─────────────────────────────────────────────────
export type SixCta = {
  title: ReactNode;
  description: string;
};

// ─── Full content model for one 6-section page ─────────────────────────────
export type SixSectionContent = {
  slug: string;
  path: string;
  meta: {
    title: string;
    description: string;
  };

  // Section 1 — Hero
  hero: SixHero;

  // Section 2 — Unique Value Proposition (page-specific angle)
  uvpEyebrow: string;
  uvpTitle: string;
  uvpSubtitle: string;
  uvpItems: SixUvpItem[];

  // Section 3 — SEO Features Block (Dutch keywords naturally integrated)
  featuresEyebrow: string;
  featuresTitle: string;
  featuresSubtitle: string;
  featuresItems: SixFeatureItem[];

  // Section 4 — How It Works (exactly 3 steps, page-specific)
  howEyebrow: string;
  howTitle: string;
  howSubtitle: string;
  howSteps: SixHowStep[];

  // Section 5 — Trust / Credibility / Social Proof
  trustEyebrow: string;
  trustTitle: string;
  trustSubtitle: string;
  trustItems: SixTrustItem[];
  showStats?: boolean;
  showTestimonials?: boolean;

  // Section 6 — Conversion + FAQ (exactly 8 questions)
  faqs: SixFaq[];

  cta: SixCta;
};
