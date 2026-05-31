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
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Warum IPTV German
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            {title || (
              <>
                Entwickelt für <span className="text-gradient">Perfektion</span>
              </>
            )}
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Jedes Detail ist für das ultimative Streaming-Erlebnis konzipiert. Premium-Infrastruktur
            trifft auf intuitives Design.
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
                className={`animate-slide-up glass rounded-3xl p-8 group transition-all border border-blanc-50/5 feature-card ${feature.hoverBorder}`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon
                    size={24}
                    className={feature.color}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-blanc-50">
                  {feature.title}
                </h3>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium">
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
