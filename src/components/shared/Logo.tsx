import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** Tailwind sizing utilities applied to the logo image (height drives the size; width stays auto). */
  className?: string;
  /** Link target. Pass `null` to render the image without a link wrapper. */
  href?: string | null;
  /**
   * Kept for backwards compatibility with call sites that still pass
   * width/height. Ignored — the image always uses its true intrinsic ratio
   * so the aspect ratio is preserved (no stretching, no CLS).
   */
  width?: number;
  height?: number;
  /** Eagerly preload the image (Next 16 replacement for the deprecated `priority`). */
  preload?: boolean;
}

/** The brand mark asset and its true intrinsic dimensions (keeps aspect ratio correct). */
const LOGO_SRC = "/images/site-logo.png";
const LOGO_WIDTH = 1505;
const LOGO_HEIGHT = 1352;

/**
 * Single source of truth for the goediptv-kopen brand mark.
 *
 * Renders the official brand image (`site-logo.png`) only. The image keeps its
 * native aspect ratio and is sized via the `className` height utility — never
 * stretched. The transparent PNG sits cleanly on the dark navbar/footer.
 */
const Logo = ({
  className = "h-12 w-auto sm:h-14",
  href = "/",
  preload = false,
}: LogoProps) => {
  const mark = (
    <Image
      src={LOGO_SRC}
      alt="goediptv-kopen"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      preload={preload}
      className={`object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );

  if (href === null) {
    return (
      <span className="group inline-flex shrink-0 items-center">{mark}</span>
    );
  }

  return (
    <Link
      href={href}
      className="group flex shrink-0 items-center"
      aria-label="goediptv-kopen – Startpagina"
    >
      {mark}
    </Link>
  );
};

export default Logo;
