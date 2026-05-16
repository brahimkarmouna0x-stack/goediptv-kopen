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
import type { IptvStreamingPage } from "@/content/iptv-streaming-pages";
import SmartText from "@/components/iptv-streaming/SmartText";

// Direct import of VaultSearch — it's a Client Component ('use client' inside),
// so React automatically handles the server/client boundary.
// Cannot use dynamic({ ssr: false }) from a Server Component.
import VaultSearch from "@/components/iptv-streaming/VaultSearch";

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
  page: IptvStreamingPage;
}

// No "use client" — this is now a Server Component
export default function VaultPageTemplate({ page }: VaultPageTemplateProps) {
  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 ${page.isCentered ? "text-center" : ""}`}
      >
        {/* Background + Blur effects */}
        {page.heroBg && (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#030712]/80 z-10" />
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0055A4]/15 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EF4135]/15 rounded-full blur-[120px] z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 ${page.isCentered ? "justify-center" : ""}`}
          >
            <Link href="/" className="hover:text-[#3B82F6] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/iptv-streaming"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Base de Connaissances
            </Link>
            <ChevronRight size={12} />
            <span className="text-slate-300">{page.keyword}</span>
          </nav>

          <div className={page.isCentered ? "mx-auto max-w-4xl" : "max-w-4xl"}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#DBEAFE] mb-6">
              <Zap size={14} className="text-[#3B82F6]" />
              Base de Connaissances IPTV SERVICE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              {page.heroHeading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium mb-10">
              <SmartText text={page.introCopy} currentSlug={page.slug} />
            </p>

            <div
              className={`flex flex-wrap gap-4 ${page.isCentered ? "justify-center" : ""}`}
            >
              <Link
                href={`/iptv-streaming/${page.slug}/#pricing`}
                className="btn-shine px-8 py-4 rounded-full bg-linear-to-r from-[#EF4135] to-[#cc3328] text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-[#EF4135]/25 transition-all active:scale-95 flex items-center gap-3"
              >
                Voir les Forfaits
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/iptv-streaming"
                className="px-8 py-4 rounded-full glass text-white font-bold text-sm uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3"
              >
                Tous les Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <div className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {page.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/15 text-[#3B82F6]">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-sm font-bold text-slate-200">{benefit}</p>
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
                  <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#3B82F6] text-sm">
                      0{index + 1}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8 font-medium">
                    <SmartText text={section.body} currentSlug={page.slug} />
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.points.map((point, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                      >
                        <Info
                          size={18}
                          className="text-[#3B82F6] mt-0.5 shrink-0"
                        />
                        <span className="text-sm font-medium text-slate-300">
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
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">
                    Rechercher dans les guides
                  </h3>
                  <VaultSearch />
                </div>

                {/* Internal Links */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
                  <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                    <Layout size={20} className="text-[#EF4135]" />
                    Guides Connexes
                  </h3>
                  <div className="space-y-4">
                    {page.internalLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block group p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#3B82F6]/35 hover:bg-white/[0.04] transition-all"
                      >
                        <h4 className="font-bold text-white group-hover:text-[#3B82F6] transition-colors mb-1">
                          {link.label}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Safety Badge */}
                <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
                  <ShieldCheck size={32} className="text-emerald-400 mb-4" />
                  <h3 className="text-lg font-black text-white mb-2">
                    Garantie IPTV SERVICE
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    Tous nos guides sont rédigés à des fins éducatives et
                    se concentrent sur des expériences de streaming stables et légales.
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
            Prêt pour la Meilleure{" "}
            <span className="text-gradient">Expérience Visuelle</span>?
          </>
        }
        description={`Commencez à streamer dès aujourd'hui sur tous vos appareils. Découvrez pourquoi IPTV SERVICE est le choix numéro un pour ${page.keyword}.`}
      />

      {/* Footer Back Link */}
      <div className="py-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Link
            href="/iptv-streaming"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Retour à la Base de Connaissances
          </Link>
        </div>
      </div>
    </div>
  );
}
