"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

interface SafeImageProps {
  src: string;
  alt: string;
  fallback?: ReactNode;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
  className?: string;
  unoptimized?: boolean;
}

/**
 * Tiny client island (~1KB gzip) that handles image errors gracefully.
 * Only this component hydrates — parent component stays as Server Component.
 * Eliminates "use client" cascade from TrendingCards and BrowseCard.
 */
export function SafeImage({
  src,
  alt,
  fallback,
  fill,
  width,
  height,
  sizes,
  quality = 55,
  className,
  unoptimized,
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-900 p-4">
        <span className="text-center text-xs font-bold text-slate-500">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      quality={quality}
      className={className}
      unoptimized={unoptimized}
      onError={() => setError(true)}
    />
  );
}
