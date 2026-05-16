import { features } from "@/constants/data";
import {
  Globe2,
  Headphones,
  MonitorPlay,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";

const featureIcons = {
  tv: MonitorPlay,
  server: Server,
  bolt: Zap,
  mobile: Smartphone,
  globe: Globe2,
  headset: Headphones,
};

const Features = ({ title }: { title?: string }) => {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent-cyan text-sm font-bold mb-4 uppercase tracking-wider glow-blue">
            Pourquoi IPTV SERVICE
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-white">
            {title || (
              <>
                Conçu pour la <span className="text-gradient">Perfection</span>
              </>
            )}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">
            Chaque détail est conçu pour l&apos;expérience de streaming ultime. L&apos;infrastructure
            premium rencontre le design intuitif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon =
              featureIcons[feature.icon as keyof typeof featureIcons] ??
              MonitorPlay;

            return (
              <div
                key={idx}
                className={`animate-slide-up glass rounded-3xl p-8 group transition-all border border-white/5 feature-card ${feature.hoverBorder.replace("cyan", "accent-cyan").replace("purple", "accent-purple")}`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.gradient.replace("cyan", "accent-cyan").replace("purple", "accent-purple")} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon
                    size={24}
                    className={feature.color
                      .replace("cyan", "accent-cyan")
                      .replace("purple", "accent-purple")}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
