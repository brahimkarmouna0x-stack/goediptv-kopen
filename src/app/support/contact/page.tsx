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
  title: "Kontakt — WhatsApp Support",
  description:
    "Kontaktieren Sie IPTV German via WhatsApp für schnelle Hilfe bei Aktivierung, Installation und technischem IPTV-Support.",
  alternates: {
    canonical: "https://iptvgerman.de/support/contact",
  },
  openGraph: {
    title: "Kontakt — WhatsApp Support | IPTV German",
    description:
      "Kontaktieren Sie IPTV German via WhatsApp für schnelle Hilfe bei Aktivierung, Installation und technischem IPTV-Support.",
    url: "https://iptvgerman.de/support/contact",
    siteName: "IPTV German",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt — WhatsApp Support | IPTV German",
    description:
      "Kontaktieren Sie IPTV German via WhatsApp für schnelle Hilfe bei Aktivierung, Installation und technischem IPTV-Support.",
  },
};

const highlights = [
  { label: "Durchschn. Antwort", value: "< 5 Min" },
  { label: "Verfügbar", value: "24/7" },
  { label: "Support-Kanal", value: "WhatsApp" },
];

const supportTopics: Array<{
  title: string;
  text: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Aktivierung & Abo",
    text: "Senden Sie Ihr ausgewähltes Angebot oder Ihre Bestellanfrage und wir helfen Ihnen direkt beim nächsten Schritt.",
    Icon: CheckCircle2,
  },
  {
    title: "Installation auf Geräten",
    text: "Hilfe für Smart TV, IPTV Smarters, Android, Apple TV, Firestick und andere Player.",
    Icon: MonitorPlay,
  },
  {
    title: "Streaming-Probleme",
    text: "Schnelle Hilfe bei Buffering, Verbindungsfehlern, Senderlisten und VOD-Zugriff.",
    Icon: Zap,
  },
];

const trustSignals = [
  { label: "Sicherer Chat", Icon: ShieldCheck },
  { label: "Mobil & Desktop", Icon: Smartphone },
  { label: "Schnelle Antwort", Icon: Clock3 },
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
                Nur WhatsApp Support
              </span>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-blanc-50 sm:text-6xl lg:text-7xl">
                Chatten Sie direkt mit IPTV German via WhatsApp.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blanc-300 sm:text-lg">
                Für Bestellungen, Aktivierung, Installation und technische Hilfe ist
                WhatsApp unser einziger Kontaktkanal. So erhalten Sie schneller eine Antwort
                und alles bleibt in einem Gespräch klar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-400 px-8 py-4 text-base font-black text-blanc-950 transition-colors hover:bg-emerald-300"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp öffnen
                </Link>
                <Link
                  href="/support/guides"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.04] px-8 py-4 text-base font-bold text-blanc-50 transition-colors hover:bg-blanc-50/[0.08]"
                >
                  Installationsanleitungen
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
                    src="/images/logo.webp"
                    alt="IPTV German"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                    WhatsApp Startseite
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-blanc-50">
                    Bereit zu helfen
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
                      Eine WhatsApp-Konversation starten
                    </p>
                    <p className="mt-1 text-sm leading-6 text-blanc-300">
                      Geben Sie Ihr Gerät, Ihre App und Ihre Frage an. Wir können
                      Ihnen dann sofort helfen.
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
               Wobei helfen wir Ihnen auf WhatsApp?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black text-blanc-50">
              Ein einziger Chat für alles, was Sie zum reibungslosen Streamen benötigen.
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
                Hilfe vor der Bestellung nötig?
              </h2>
              <p className="mt-3 text-sm leading-6 text-blanc-400">
                Öffnen Sie WhatsApp und senden Sie Ihre Frage. Wir helfen Ihnen bei der Auswahl des
                richtigen Angebots, der Geräteanzahl und der Einrichtung.
              </p>
            </div>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-400 px-6 py-4 text-sm font-black text-blanc-950 transition-colors hover:bg-emerald-300"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Auf WhatsApp chatten
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
