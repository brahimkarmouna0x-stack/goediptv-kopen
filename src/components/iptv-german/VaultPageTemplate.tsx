// SERVER COMPONENT — LCP FIX: Removing "use client" ensures the h2 LCP element
// ships in the initial HTML response, eliminating the 460ms render delay.
// Interactive sub-components are dynamically imported to stay client-side.
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Info,
  Layout,
  ShieldCheck,
  Zap,
  ArrowLeft,
} from "lucide-react";
import type { IptvGermanPage } from "@/content/iptv-german-pages";
import SmartText from "@/components/iptv-german/SmartText";

// Direct import of VaultSearch — it's a Client Component ('use client' inside),
// so React automatically handles the server/client boundary.
// Cannot use dynamic({ ssr: false }) from a Server Component.
import VaultSearch from "@/components/iptv-german/VaultSearch";

// Below-the-fold sections: dynamic with ssr:true for code splitting
// (ssr:true IS allowed from Server Components)
const CTA = dynamic(
  () => import("@/components/sections/CTA"),
  { ssr: true }
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ"),
  { ssr: true }
);
const Pricing = dynamic(
  () => import("@/components/sections/Pricing"),
  { ssr: true }
);

interface VaultPageTemplateProps {
  page: IptvGermanPage;
}

// No "use client" — this is now a Server Component
export default function VaultPageTemplate({ page }: VaultPageTemplateProps) {
  return (
    <div className="min-h-screen bg-france-950">
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 ${page.isCentered ? "text-center" : ""}`}
      >
        {/* Background + Blur effects */}
        {page.heroBg && (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-france-950/80 z-10" />
            <Image
              src={page.heroBg}
              alt=""
              fill
              className="object-cover blur-sm"
              sizes="100vw"
              quality={50}
              priority
            />
          </div>
        )}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-france-700/15 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rouge-500/15 rounded-full blur-[120px] z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blanc-500 mb-8 ${page.isCentered ? "justify-center" : ""}`}
          >
              <Link href="/" className="hover:text-france-500 transition-colors">
                Startseite
              </Link>
            <ChevronRight size={12} />
            <Link
              href="/iptv-german"
              className="hover:text-france-500 transition-colors"
            >
              Wissensdatenbank
            </Link>
            <ChevronRight size={12} />
            <span className="text-blanc-300">{page.keyword}</span>
          </nav>

          <div className={page.isCentered ? "mx-auto max-w-4xl" : "max-w-4xl"}>
            <span className="inline-flex items-center gap-2 rounded-full border border-france-500/25 bg-france-500/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-france-100 mb-6">
              <Zap size={14} className="text-france-500" />
              IPTV German Wissensdatenbank
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-blanc-50 leading-[1.1] tracking-tight mb-8">
              {page.heroHeading}
            </h1>
            <p className="text-lg sm:text-xl text-blanc-300 leading-relaxed font-medium mb-10">
              <SmartText text={page.introCopy} currentSlug={page.slug} />
            </p>

            <div
              className={`flex flex-wrap gap-4 ${page.isCentered ? "justify-center" : ""}`}
            >
              <Link
                href={`/iptv-german/${page.slug}/#pricing`}
                className="btn-shine px-8 py-4 rounded-full bg-linear-to-r from-rouge-500 to-rouge-600 text-blanc-50 font-bold text-sm uppercase tracking-widest shadow-lg shadow-rouge-500/25 transition-all active:scale-95 flex items-center gap-3"
              >
                Pakete Ansehen
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/iptv-german"
                className="px-8 py-4 rounded-full glass text-blanc-50 font-bold text-sm uppercase tracking-widest border border-blanc-50/10 hover:bg-blanc-50/5 transition-all flex items-center gap-3"
              >
                Alle Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <div className="border-y border-blanc-50/5 bg-blanc-50/[0.02] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {page.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-france-500/15 text-france-500">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-sm font-bold text-blanc-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 relative" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1200px" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Articles */}
            <div className="lg:col-span-8 space-y-20">
              {page.sections.map((section, index) => (
                <article key={index} className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blanc-50/5 text-france-500 text-sm">
                      0{index + 1}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="text-lg text-blanc-400 leading-relaxed mb-8 font-medium">
                    <SmartText text={section.body} currentSlug={page.slug} />
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.points.map((point, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-blanc-50/[0.03] border border-blanc-50/5"
                      >
                        <Info
                          size={18}
                          className="text-france-500 mt-0.5 shrink-0"
                        />
                        <span className="text-sm font-medium text-blanc-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Search in Sidebar */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-blanc-500 uppercase tracking-widest mb-4 px-2">
                    Guides durchsuchen
                  </h3>
                  <VaultSearch />
                </div>

                {/* Internal Links */}
                <div className="rounded-3xl border border-blanc-50/10 bg-blanc-50/[0.03] p-8 backdrop-blur-md">
                  <h3 className="text-xl font-black text-blanc-50 mb-6 flex items-center gap-3">
                    <Layout size={20} className="text-rouge-500" />
                    Verwandte Guides
                  </h3>
                  <div className="space-y-4">
                    {page.internalLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block group p-4 rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.02] hover:border-france-500/35 hover:bg-blanc-50/[0.04] transition-all"
                      >
                        <h4 className="font-bold text-blanc-50 group-hover:text-france-500 transition-colors mb-1">
                          {link.label}
                        </h4>
                        <p className="text-xs text-blanc-500 line-clamp-2">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Safety Badge */}
                <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
                  <ShieldCheck size={32} className="text-emerald-400 mb-4" />
                  <h3 className="text-lg font-black text-blanc-50 mb-2">
                    IPTV German Garantie
                  </h3>
                  <p className="text-sm text-blanc-400 leading-relaxed font-medium">
                    Alle unsere Guides dienen Bildungszwecken und
                    konzentrieren sich auf stabile und legale Streaming-Erfahrungen.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ faqsData={page.faqs} />

      {/* CTA Section */}
      <CTA
        title={
          <>
            Bereit für das Beste{" "}
             <span className="text-gradient">Seherlebnis</span>?
          </>
        }
        description={`Streamen Sie noch heute auf all Ihren Geräten. Entdecken Sie, warum IPTV German die Nummer 1 Wahl für ${page.keyword} ist.`}
      />

      {/* Footer Back Link */}
      <div className="py-12 border-t border-blanc-50/5">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Link
            href="/iptv-german"
            className="inline-flex items-center gap-2 text-blanc-500 hover:text-blanc-50 transition-colors font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Zurück zur Wissensdatenbank
          </Link>
        </div>
      </div>
    </div>
  );
}
