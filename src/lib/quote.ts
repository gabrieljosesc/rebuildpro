// Shared between the quote form (browser) and the server action.

export const PHOTO_BUCKET = "quote-photos";
export const MAX_PHOTOS = 6;
export const MAX_PHOTO_BYTES = 10 * 1024 * 1024;
export const PHOTO_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

export type QuoteInput = {
  name: string;
  phone: string;
  address: string;
  projectType: string;
  insuranceClaim: boolean;
  details: string;
  photoPaths: string[];
  sourcePage: string;
  /** Honeypot. Real visitors leave it empty. */
  company: string;
};

export type QuoteResult = { ok: true } | { ok: false; error: string };

export const supabaseEnv = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
};
