import Image from "next/image";
import Link from "next/link";

/**
 * Main brand logo — renders the IPTV Streaming logo as an optimized Image.
 *
 * Performance:
 * - `loading="eager"` ensures LCP element is not deferred
 * - Explicit `width`/`height` prevents CLS
 * - Using next/image enables automatic WebP/AVIF conversion
 */
const Logo = () => {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-1"
      aria-label="IPTV SERVICE - Page d'accueil"
    >
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
        <Image
          src="/images/logo.png"
          alt="IPTV SERVICE"
          width={40}
          height={40}
          priority
          className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <LogoText />
    </Link>
  );
};

/**
 * "IPTV Streaming" wordmark — rendered as styled text (no image).
 * Used independently in the Footer copyright line.
 */
export const LogoText = ({ className = "text-xl" }: { className?: string }) => {
  return (
    <span className="inline-flex">
      <span
        className={`font-display font-black text-white transition-colors duration-300 group-hover:text-[#93C5FD] ${className}`}
      >
        IPTV
        <span className="text-[#EF4135] transition-colors duration-300 group-hover:text-white">
          SERVICE
        </span>
      </span>
    </span>
  );
};

export default Logo;
