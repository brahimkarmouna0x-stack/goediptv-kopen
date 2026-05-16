import { memo } from "react";
import { AnimatedPrice } from "@/components/ui/AnimatedPrice";
import { Check, TriangleAlert, type LucideIcon } from "lucide-react";

interface PlanCardProps {
  name: string;
  duration: string;
  price?: string;
  isFree?: boolean;
  isPopular?: boolean;
  isBestValue?: boolean;
  connections: number;
  features: string[];
  badge?: {
    icon: LucideIcon;
    text: string;
    className: string;
  };
  monthlyPriceLabel?: string;
  savingsLabel?: string;
  buttonText: string;
  onBuy: () => void;
}

const PlanCardComponent = ({
  name,
  duration,
  price,
  isFree,
  isPopular,
  isBestValue,
  connections,
  features,
  badge,
  monthlyPriceLabel,
  savingsLabel,
  buttonText,
  onBuy,
}: PlanCardProps) => {
  const BadgeIcon = badge?.icon;

  return (
    <div className="h-full relative">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-linear-to-r from-[#EF4135] via-[#EF4135] to-[#cc3328] text-slate-950 text-[10px] font-black uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(239,65,53,0.4)] border border-white/20 whitespace-nowrap z-50 flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950/80"></span>
          </span>
          POPULAIRE
        </div>
      )}
      <div
        className={`h-full rounded-2xl p-7 flex flex-col relative overflow-hidden border transition-[border-color,background-color,box-shadow] duration-250 ${
          isPopular
            ? "border-[#EF4135]/35 bg-[#071827] shadow-[0_20px_50px_-36px_rgba(59,130,246,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "border-white/10 bg-[#081423]/90 hover:border-white/20"
        }`}
      >
        {/* Background Effects */}
        {isPopular && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF4135]/15 blur-3xl -mr-16 -mt-16 animate-pulse duration-[4000ms]"></div>
        )}
        {isFree && (
          <div className="absolute top-0 right-0 p-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        )}



        {/* Header */}
        <div className="mb-8">
          <h3 className="font-display font-bold text-xl mb-2 text-white uppercase">
            {name}
          </h3>
          {badge && (
            <p
              className={`${badge.className} text-xs font-bold flex items-center gap-2`}
            >
              {BadgeIcon && <BadgeIcon size={13} aria-hidden="true" />}
              {badge.text}
            </p>
          )}
          {isFree && <p className="text-slate-400 text-sm">Testez d'abord</p>}
        </div>

        {/* Price */}
        <div className="mb-8 flex items-baseline gap-1">
          <span
            className={`font-display font-bold text-5xl ${isPopular ? "text-gradient" : "text-white"}`}
          >
            {isFree ? (
              "Gratuit"
            ) : price ? (
              <AnimatedPrice price={price} />
            ) : (
              "N/A"
            )}
          </span>
          <span className="text-slate-400">/{duration}</span>
        </div>

        {/* Labels */}
        {savingsLabel && (
          <div
            className={`px-3 py-1.5 rounded-lg text-xs font-bold mb-6 w-fit border ${
              isPopular
                ? "bg-[#0055A4]/15 border-[#0055A4]/25 text-accent-cyan"
                : isBestValue
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-white/5 border-white/10 text-slate-300"
            }`}
          >
            {savingsLabel}
          </div>
        )}

        {/* Features */}
        <ul className="space-y-4 mb-8 grow">
          <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
            <Check
              size={16}
              className={isPopular ? "text-accent-cyan" : "text-emerald-400"}
              aria-hidden="true"
            />
            {isFree
              ? "Fonctionne sur tous les appareils"
              : `${connections === 4 ? "4+" : connections} ${connections === 1 ? "Appareil" : "Appareils"} Connexions`}
          </li>
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-sm text-slate-300 font-medium"
            >
              <Check
                size={16}
                className={isPopular ? "text-accent-cyan" : "text-emerald-400"}
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
          {isFree && (
            <li className="flex items-start gap-3 text-xs text-[#F4C430]/80 font-medium pt-2 border-t border-white/5">
              <TriangleAlert size={14} className="mt-0.5" aria-hidden="true" />
              <span>Sport en direct et événements non inclus</span>
            </li>
          )}
        </ul>

        {/* Footer Info */}
        {monthlyPriceLabel && (
          <div className="mb-6 text-center">
            <p className="text-slate-400 text-[10px] uppercase tracking-tighter">
              {monthlyPriceLabel}
            </p>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onBuy}
          className={`w-full py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
            isPopular
              ? "bg-[#EF4135] text-slate-950 hover:bg-[#EF4135]"
              : "bg-white/[0.06] text-white border border-white/10 hover:bg-white/10"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export const PlanCard = memo(PlanCardComponent);
PlanCard.displayName = "PlanCard";
