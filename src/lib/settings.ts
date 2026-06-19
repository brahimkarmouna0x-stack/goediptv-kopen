import { cache } from "react";

export type PhoneNumberData = {
  phone_number: string;
};

const FALLBACK_PHONE = process.env.NEXT_PUBLIC_FALLBACK_PHONE ?? "";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Fetch the business phone number from Supabase.
 *
 * Falls back to:
 *   1. Supabase `phone_numbers` table (first row)
 *   2. NEXT_PUBLIC_FALLBACK_PHONE env var
 *   3. Empty string
 *
 * During static generation / build, Supabase may not be reachable,
 * so a short AbortController timeout prevents build hangs.
 */
const FETCH_TIMEOUT_MS = 5_000;

async function fetchPhoneNumberFromSupabase(): Promise<string> {
  // Skip fetch entirely if Supabase is not configured
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return FALLBACK_PHONE;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/phone_numbers?select=phone_number&limit=1`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        signal: controller.signal,
        cache: "no-store", // Bypass Next.js fetch cache to handle errors and timeouts cleanly
      },
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(
        "[settings] Supabase phone_number fetch failed: HTTP",
        response.status,
      );
      return FALLBACK_PHONE;
    }

    const rows: { phone_number: string }[] = await response.json();
    const phone = rows?.[0]?.phone_number;
    if (!phone) {
      console.warn(
        "[settings] No phone number returned from Supabase, using fallback",
      );
      return FALLBACK_PHONE;
    }
    return phone;
  } catch (err) {
    console.warn(
      "[settings] Error fetching phone_number, using fallback:",
      err instanceof Error ? err.message : err,
    );
    return FALLBACK_PHONE;
  }
}

export const getPhoneNumber = cache(async (): Promise<string> => {
  return fetchPhoneNumberFromSupabase();
});

/**
 * Build a WhatsApp deep-link URL from a phone number.
 */
export function whatsappUrl(phone: string): string {
  return `https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`;
}

/**
 * Build a WhatsApp deep-link URL with a pre-filled message.
 */
export function whatsappUrlWithMessage(phone: string, message: string): string {
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
