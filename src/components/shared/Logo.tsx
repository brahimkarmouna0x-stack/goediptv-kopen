import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /**
   * Tailwind sizing utilities applied to the image. Overrides the default
   * when provided (pass your own `h-*`/`w-*` to avoid conflicting utilities).
   */
  className?: string;
  /** Intrinsic width used for aspect ratio + responsive srcset generation. */
  width?: number;
  /** Intrinsic height used for aspect ratio + responsive srcset generation. */
  height?: number;
  /** Eager-load + high priority. Defaults to true (logo is above the fold). */
  priority?: boolean;
  /** Link target. Pass `null` to render the image without a link wrapper. */
  href?: string | null;
}

/**
 * Single source of truth for the IPTV Germany brand mark.
 *
 * Renders `public/images/site-logo.png` through next/image:
 * - Responsive + sharp on Retina (next/image emits a 1x/2x srcset)
 * - No CLS (explicit width/height preserve the aspect ratio)
 * - No hydration mismatch (pure server-renderable markup)
 * - Accessible (descriptive alt + link label)
 */
const Logo = ({
  className = "h-16 w-auto",
  width = 128,
  height = 128,
  priority = true,
  href = "/",
}: LogoProps) => {
  const image = (
    <Image
      src="/images/site-logo.png"
      alt="IPTV Germany"
      width={width}
      height={height}
      priority={priority}
      className={`${className} object-contain transition-transform duration-300 group-hover:scale-105`}
    />
  );

  if (href === null) {
    return (
      <span className="group inline-flex shrink-0 items-center">{image}</span>
    );
  }

  return (
    <Link
      href={href}
      className="group flex shrink-0 items-center"
      aria-label="IPTV Germany – Startseite"
    >
      {image}
    </Link>
  );
};

export default Logo;
