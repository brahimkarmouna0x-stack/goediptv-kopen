import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { Tv, MonitorPlay, HeadphonesIcon, Play, Layers } from "lucide-react";

interface HeroProps {
  pillText?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  bgImage?: string;
}

const Hero = ({ pillText, title, subtitle, bgImage }: HeroProps) => {
  const floatingCards = [
    { icon: Tv, text: "15 000+ Chaînes Live" },
    { icon: MonitorPlay, text: "4K & HDR Qualité" },
    { icon: HeadphonesIcon, text: "Support Premium 24/7" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-france-950">
      <picture className="absolute inset-0 z-0">
        <source
          media="(max-width: 767px)"
          srcSet={bgImage || "/images/hero-bg-phone.webp"}
        />
        <Image
          src={bgImage || "/images/hero-bg.webp"}
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={70}
          sizes="100vw"
          aria-hidden="true"
          className="object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 z-0 bg-linear-to-t from-france-950 via-france-950/80 to-transparent lg:bg-linear-to-r lg:from-france-950 lg:via-france-950/90 lg:to-transparent" />
      <div className="absolute inset-0 z-0 bg-black/20" />

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left pt-10 lg:pt-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-france-950/60 backdrop-blur-md border border-france-700/35 mb-8 shadow-[0_0_15px_rgba(37,99,235,0.2)] text-sm text-france-400 font-semibold tracking-wide">
              {pillText || "Service IPTV Premium France"}
            </span>

            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[1.15] mb-6 text-blanc-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {title || (
                <>
                  IPTV SERVICE France
                  <span className="block mt-2 text-france-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    Abonnement IPTV avec <br />
                    31 000+ chaînes & <br /> 140 000+ VOD en 4K/8K
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blanc-300/90 max-w-2xl mb-8 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-normal">
              {subtitle ||
                "Service IPTV premium en France avec 31 000+ chaînes et 140 000+ films & séries en 4K/8K. Activation immédiate, serveurs stables, tous appareils supportés."}
            </p>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 mb-10 animate-fade-in">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&fit=crop",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full border-2 border-france-950 overflow-hidden bg-blanc-800"
                  >
                    <Image
                      src={src}
                      alt={`Utilisateur ${i + 1}`}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-3 h-3 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[10px] font-bold text-blanc-50 ml-1">
                    4.9/5
                  </span>
                </div>
                <p className="text-[11px] text-blanc-500">
                  Vérifié par 50 000+ utilisateurs
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-5 mb-8">
              <Link
                href="#pricing"
                className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-rouge-500 text-blanc-50 font-black text-lg hover:bg-rouge-600 transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.4)] hover:-translate-y-1 active:translate-y-0 will-change-transform"
              >
                <Play
                  size={22}
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                />
                Accès Immédiat
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-blanc-50/5 backdrop-blur-md text-blanc-50 font-bold text-lg hover:bg-blanc-50/10 transition-all flex items-center justify-center gap-3 border border-blanc-800/20 hover:border-blanc-800/40 hover:-translate-y-1 active:translate-y-0 will-change-transform"
              >
                <Layers size={22} className="text-france-400" />
                Abonnements
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 justify-center lg:justify-end lg:pr-8 hidden sm:flex">
            <div className="relative w-full max-w-md flex flex-col items-end gap-5">
              {floatingCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className={`w-[260px] sm:w-[280px] lg:w-[300px] ${
                      idx === 0
                        ? "mr-0 lg:mr-0"
                        : idx === 1
                          ? "mr-12 lg:mr-16"
                          : "mr-4 lg:mr-24"
                    } animate-fade-up`}
                    style={{ animationDelay: `${0.12 * (idx + 1)}s` }}
                  >
                    <div className="hero-float-card flex items-center gap-4 p-4 rounded-2xl bg-france-950/40 backdrop-blur-md border border-blanc-800/20 shadow-2xl hover:border-france-700/40 hover:shadow-[0_8px_30px_rgba(30,64,175,0.25)] transition-all will-change-transform"
                      style={{ animationDelay: `${idx * 0.25}s` }}
                    >
                      <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-france-700/25 to-france-500/20 flex items-center justify-center border border-france-700/35">
                        <Icon size={24} className="text-france-400" />
                      </div>
                      <div>
                        <p className="text-blanc-50 font-semibold text-[15px] sm:text-base whitespace-nowrap">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
