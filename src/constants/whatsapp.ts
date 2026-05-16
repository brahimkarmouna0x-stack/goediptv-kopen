/** WhatsApp business phone number (configurable via NEXT_PUBLIC_WHATSAPP_PHONE env var) */
export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "3197010265593";

/** Full WhatsApp deep-link URL */
export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text&type=phone_number&app_absent=0`;
