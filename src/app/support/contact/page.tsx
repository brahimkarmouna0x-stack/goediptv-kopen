import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  MessageCircle,
  MonitorPlay,
  ShieldCheck,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Contact — Support WhatsApp",
  description:
    "Contactez IPTV SERVICE via WhatsApp pour une aide rapide sur l'activation, l'installation et le support technique IPTV.",
  alternates: {
    canonical: "https://iptvstreaming.nl/support/contact",
  },
  openGraph: {
    title: "Contact — Support WhatsApp | IPTV SERVICE",
    description:
      "Contactez IPTV SERVICE via WhatsApp pour une aide rapide sur l'activation, l'installation et le support technique IPTV.",
    url: "https://iptvstreaming.nl/support/contact",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Support WhatsApp | IPTV SERVICE",
    description:
      "Contactez IPTV SERVICE via WhatsApp pour une aide rapide sur l'activation, l'installation et le support technique IPTV.",
  },
};

const highlights = [
  { label: "Réponse moyenne", value: "< 5 min" },
  { label: "Disponible", value: "24/7" },
  { label: "Canal de support", value: "WhatsApp" },
];

const supportTopics: Array<{
  title: string;
  text: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Activation & abonnement",
    text: "Envoyez votre forfait choisi ou votre demande de commande et nous vous aidons directement pour l'étape suivante.",
    Icon: CheckCircle2,
  },
  {
    title: "Installation sur appareils",
    text: "Aide pour Smart TV, IPTV Smarters, Android, Apple TV, Firestick et autres lecteurs.",
    Icon: MonitorPlay,
  },
  {
    title: "Problèmes de streaming",
    text: "Support rapide pour le buffering, les erreurs de connexion, les listes de chaînes et l'accès VOD.",
    Icon: Zap,
  },
];

const trustSignals = [
  { label: "Chat sécurisé", Icon: ShieldCheck },
  { label: "Mobile & desktop", Icon: Smartphone },
  { label: "Réponse rapide", Icon: Clock3 },
];

const ContactUsPage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Support WhatsApp uniquement
              </span>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-blanc-50 sm:text-6xl lg:text-7xl">
                Discutez directement avec IPTV SERVICE via WhatsApp.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blanc-300 sm:text-lg">
                Pour commander, activer, installer et obtenir de l'aide technique,
                WhatsApp est notre seul canal de contact. Vous obtenez ainsi une réponse
                plus rapide et tout reste clair dans une seule conversation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-400 px-8 py-4 text-base font-black text-blanc-950 transition-colors hover:bg-emerald-300"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Ouvrir WhatsApp
                </Link>
                <Link
                  href="/support/guides"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.04] px-8 py-4 text-base font-bold text-blanc-50 transition-colors hover:bg-blanc-50/[0.08]"
                >
                  Guides d'installation
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.03] p-4"
                  >
                    <p className="text-2xl font-black text-blanc-50">{item.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-blanc-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-strong animate-slide-up overflow-hidden rounded-2xl p-5 sm:p-7">
              <div className="flex items-center gap-4 border-b border-blanc-50/10 pb-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.04]">
                  <Image
                    src="/images/logo.png"
                    alt="IPTV SERVICE"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                    Accueil WhatsApp
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-blanc-50">
                    Prêt à vous aider
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {trustSignals.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-blanc-50/10 bg-france-950/40 p-4"
                  >
                    <Icon
                      className="h-5 w-5 text-emerald-300"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-sm font-bold text-blanc-50">{label}</p>
                  </div>
                ))}
              </div>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5 transition-colors hover:bg-emerald-400/15"
              >
                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-bold text-blanc-50">
                      Démarrer une conversation WhatsApp
                    </p>
                    <p className="mt-1 text-sm leading-6 text-blanc-300">
                      Indiquez votre appareil, application et question. Nous pourrons
                      ainsi vous aider immédiatement.
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-emerald-300"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 px-4 sm:mt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-200">
              Avec quoi vous aidons-nous sur WhatsApp ?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black text-blanc-50">
              Un seul chat pour tout ce dont vous avez besoin pour streamer en toute fluidité.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {supportTopics.map(({ title, text, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.03] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-300 text-blanc-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-black text-blanc-50">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-blanc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 px-4 sm:mt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.03] p-6 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                <Headphones className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-blanc-50">
                Besoin d'aide avant de commander ?
              </h2>
              <p className="mt-3 text-sm leading-6 text-blanc-400">
                Ouvrez WhatsApp et envoyez votre question. Nous vous aidons à choisir le bon
                forfait, le nombre d'appareils et l'installation.
              </p>
            </div>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-400 px-6 py-4 text-sm font-black text-blanc-950 transition-colors hover:bg-emerald-300"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Discuter sur WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
