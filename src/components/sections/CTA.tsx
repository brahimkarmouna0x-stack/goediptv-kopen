import Link from "next/link";
import { type ReactNode } from "react";
import { MessageCircle, Rocket } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

const CTA = ({
  title,
  description,
}: {
  title?: ReactNode;
  description?: string;
}) => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 550px" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in glass-strong rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden border border-white/10 glow-blue before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-96 before:h-96 before:bg-accent-cyan/10 before:rounded-full before:blur-3xl after:content-[''] after:absolute after:bottom-0 after:right-1/4 after:w-64 after:h-64 after:bg-accent-purple/10 after:rounded-full after:blur-3xl">
          <div className="relative z-10">
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              {title || (
                <>
                  Prêt à Transformer{" "}
                  <span className="text-gradient">votre Divertissement</span>
                  <br />
                  ?
                </>
              )}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              {description ||
                "Rejoignez plus de 500 000 abonnés satisfaits dans le monde. Commencez votre voyage streaming dès aujourd'hui avec notre essai sans risque."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#pricing"
                className="btn-shine px-10 py-5 rounded-full bg-linear-to-r from-[#0055A4] via-[#3B82F6] to-[#EF4135] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(239,65,53,0.3)] transition-all active:scale-95 flex items-center gap-3"
              >
                <Rocket size={21} aria-hidden="true" />
                Commencer l&apos;Essai Gratuit
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 border border-white/10 active:scale-95"
              >
                <MessageCircle size={21} aria-hidden="true" />
                Discuter avec Nous
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-6 font-bold tracking-wider uppercase">
              Carte bancaire non requise. Annulez à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
