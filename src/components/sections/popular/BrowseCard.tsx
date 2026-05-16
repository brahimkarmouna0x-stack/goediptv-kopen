import { type Trending } from "@/constants/trending-data";
import { SafeImage } from "@/components/shared/SafeImage";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface BrowseCardProps {
  item: Trending;
  index: number;
  onClick: () => void;
}

export const BrowseCard = ({ item, index, onClick }: BrowseCardProps) => {
  const isLive = item.type === "lives";
  const isSport = item.type === "sports";

  // Animation delay calculation (capped)
  const delay = `${Math.min(0.03 * (index % 20), 0.6)}s`;

  if (isLive) {
    return (
      <div
        onClick={onClick}
        className="relative rounded-2xl overflow-hidden border border-white/5 glass-strong group flex flex-col items-center justify-center p-6 h-[220px] transition-[transform,border-color] duration-500 hover:scale-[1.02] hover:border-[#3B82F6]/30 animate-slide-up cursor-pointer"
        style={{ animationDelay: delay }}
      >
        <div className="absolute inset-0 bg-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-24 h-24 rounded-full overflow-hidden bg-black/40 flex items-center justify-center border border-white/10 group-hover:border-[#3B82F6] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-[border-color,box-shadow] duration-700 mb-4 relative shrink-0 z-10">
          <SafeImage
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="96px"
            quality={50}
          />
        </div>

        <h3 className="font-bold text-white text-lg mb-3 tracking-tight truncate w-full text-center z-10">
          {item.title}
        </h3>

        <div className="flex items-center justify-center gap-2 w-full flex-wrap z-10">
          <span className="px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-black uppercase flex items-center gap-1.5 border border-red-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            EN DIRECT
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/90 text-[10px] font-black uppercase border border-white/5">
            PREMIUM
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer animate-slide-up border border-white/5 hover:border-[#3B82F6]/30 transition-[transform,border-color] duration-700 hover:scale-[1.02] shadow-2xl",
        isSport ? "aspect-video" : "aspect-2/3",
      )}
      style={{ animationDelay: delay }}
    >
      <SafeImage
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={60}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase shadow-lg",
              item.quality === "LIVE"
                ? "bg-red-500 shadow-red-500/40"
                : "bg-[#3B82F6] shadow-[#3B82F6]/40",
            )}
          >
            {item.quality}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase border border-white/10">
            {item.genre}
          </span>
        </div>

        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#3B82F6] transition-colors line-clamp-2">
          {item.title}
        </h3>

        {!isSport && (
          <div className="flex items-center gap-3 mt-3 text-[10px] font-bold text-slate-400">
            <div className="flex items-center gap-1.5">
              <Star size={12} className="text-[#F4C430]" fill="currentColor" />
              <span className="text-white">{item.rating}</span>
            </div>
            {item.date && (
              <span>{new Date(item.date).getFullYear()}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
