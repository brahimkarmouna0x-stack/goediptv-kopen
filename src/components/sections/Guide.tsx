import { CheckCircle2, Globe2, Infinity, Sparkles, Tv, Zap } from "lucide-react";

const accessItems = [
  "Zugang zu 31.000+ Live-Sendern weltweit",
  "Deutsche & internationale Sender (ARD, ZDF, RTL, ProSieben)",
  "Premium-Sportkanäle & Filmbibliothek",
  "Ohne Vertrag und versteckte Kosten",
];

const featureItems = [
  {
    title: "Volle Flexibilität",
    description:
      "Im Gegensatz zum traditionellen Fernsehen bietet IPTV Funktionen wie Pause, Zurückspulen und Aufnahme. Sie bestimmen Ihr Programm selbst.",
    icon: Infinity,
    tone: "text-france-100 bg-france-500/15 border-france-500/25",
  },
  {
    title: "Einfache Einrichtung",
    description:
      "Kein Installateur erforderlich. Geben Sie Ihren IPTV-Code in Apps wie IPTV Smarters oder TiviMate ein und beginnen Sie sofort mit dem Streamen.",
    icon: Sparkles,
    tone: "text-france-100 bg-france-700/15 border-france-700/25",
  },
  {
    title: "Überall Sehen",
    description:
      "Ob zu Hause oder unterwegs, Sie haben über jedes verbundene Gerät Zugriff auf Ihre Lieblingssender.",
    icon: Globe2,
    tone: "text-emerald-100 bg-emerald-300/10 border-emerald-300/20",
  },
];

const Guide = () => {
  return (
    <section id="guide" className="relative overflow-hidden py-20 sm:py-24" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}>
      <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-france-500/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex rounded-full border border-france-500/25 bg-france-500/15 px-4 py-1.5 text-sm font-black uppercase tracking-[0.14em] text-france-100">
              Der Komplette Leitfaden
            </span>
            <h2 className="mt-6 font-display text-4xl font-black leading-tight text-blanc-50 sm:text-5xl">
              Was ist IPTV und <br />
              <span className="text-gradient">wie funktioniert es?</span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-blanc-300 sm:text-lg">
              <p>
                IPTV steht für{" "}
                <span className="font-semibold text-blanc-50">
                  Internet Protocol Television
                </span>{" "}
                und bezeichnet Fernsehen, das über das Internet ausgestrahlt wird. Anstelle von
                Kabel oder Satellit werden TV-Sender als sichere Datenpakete direkt
                auf Ihr Gerät gestreamt.
              </p>
              <p>
                Mit einer stabilen Internetverbindung können Sie zu Hause
                oder unterwegs auf Ihrem Smart-TV, Smartphone, Tablet, Computer
                oder Ihrer TV-Box sehen.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-blanc-50/10 bg-france-900 p-6 sm:p-8">
            <Tv size={170} aria-hidden="true" className="absolute right-0 top-8 opacity-5 pointer-events-none" />

            <h3 className="relative mb-6 flex items-center gap-3 text-xl font-black text-blanc-50">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-france-500/25 bg-france-500/15 text-france-100">
                <Zap size={21} aria-hidden="true" />
              </span>
              Sofortiger Zugriff
            </h3>

            <ul className="relative space-y-3">
              {accessItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-blanc-300">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-france-300"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-7 rounded-xl border border-blanc-50/10 bg-blanc-50/[0.04] p-4 text-sm italic text-blanc-300">
              &quot;Die Zukunft des Fernsehens ist da. Flexibel, erschwinglich und grenzenlos.&quot;
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featureItems.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-blanc-50/10 bg-france-900 p-6"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${feature.tone}`}
                >
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-black text-blanc-50">
                  {feature.title}
                </h3>
                <p className="leading-6 text-blanc-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guide;
