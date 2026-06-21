"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Manually report a SPA page view to GA4. GA4 Enhanced Measurement already
 * tracks history changes, so call this only if you disable that.
 */
export function trackPageView(url: string): void {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;
  window.gtag("config", GA_ID, { page_path: url });
}

/** Report a custom GA4 event. */
export function trackEvent(
  action: string,
  category?: string,
  label?: string,
  value?: number,
): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

/** Stable handles for use inside Client Components / event handlers. */
export function useAnalytics() {
  return {
    trackPageView: useCallback((url: string) => trackPageView(url), []),
    trackEvent: useCallback(
      (action: string, category?: string, label?: string, value?: number) =>
        trackEvent(action, category, label, value),
      [],
    ),
  };
}
