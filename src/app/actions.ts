"use server";

import { createClient } from "@supabase/supabase-js";
import { projectTypes } from "@/content/services";
import {
  MAX_PHOTOS,
  supabaseEnv,
  type QuoteInput,
  type QuoteResult,
} from "@/lib/quote";
import { site } from "@/lib/site";

const PHOTO_PATH = /^[0-9a-f-]{36}\/[0-9]-[a-z0-9._-]{1,80}$/;

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function submitQuote(input: QuoteInput): Promise<QuoteResult> {
  // Bots fill the hidden field. Pretend it worked so they do not retry.
  if (clean(input.company, 200)) return { ok: true };

  const name = clean(input.name, 120);
  const phone = clean(input.phone, 40);
  const address = clean(input.address, 240);
  const projectType = clean(input.projectType, 80);
  const details = clean(input.details, 2000);
  const sourcePage = clean(input.sourcePage, 200);
  const photoPaths = Array.isArray(input.photoPaths)
    ? input.photoPaths.filter((p) => typeof p === "string" && PHOTO_PATH.test(p))
    : [];

  if (!name || !address) {
    return { ok: false, error: "Please fill in your name and address." };
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Please enter a phone number with area code." };
  }
  if (!projectTypes.includes(projectType)) {
    return { ok: false, error: "Please choose a project type." };
  }
  if (typeof input.insuranceClaim !== "boolean") {
    return { ok: false, error: "Please tell us if this is an insurance claim." };
  }

  const fallback = `We could not send your request. Please call ${site.phone.display}.`;
  if (!supabaseEnv.url || !supabaseEnv.key) {
    console.error("Quote form: Supabase environment variables are not set.");
    return { ok: false, error: fallback };
  }

  // Row level security allows anonymous inserts only; nothing can be read back.
  const supabase = createClient(supabaseEnv.url, supabaseEnv.key, {
    auth: { persistSession: false },
  });
  const { error } = await supabase.from("quote_requests").insert({
    name,
    phone,
    address,
    project_type: projectType,
    insurance_claim: input.insuranceClaim,
    details: details || null,
    photo_paths: photoPaths.slice(0, MAX_PHOTOS),
    source_page: sourcePage || null,
  });

  if (error) {
    console.error("Quote form: insert failed.", error.message);
    return { ok: false, error: fallback };
  }
  return { ok: true };
}
