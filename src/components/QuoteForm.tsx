"use client";

import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";
import { submitQuote } from "@/app/actions";
import { projectTypes } from "@/content/services";
import {
  MAX_PHOTOS,
  MAX_PHOTO_BYTES,
  PHOTO_BUCKET,
  PHOTO_TYPES,
  supabaseEnv,
} from "@/lib/quote";
import { site } from "@/lib/site";
import { track } from "@/lib/track";
import { CheckIcon, btnPrimary } from "./ui";

const field =
  "mt-1 block w-full border-0 border-b border-ink/40 bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none focus:ring-0";
const label = "label block text-muted";

/** Uploads photos straight to Supabase Storage and returns their object paths. */
async function uploadPhotos(files: File[]) {
  if (files.length === 0) return [];
  if (!supabaseEnv.url || !supabaseEnv.key) throw new Error("not configured");

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(supabaseEnv.url, supabaseEnv.key, {
    auth: { persistSession: false },
  });
  const folder = crypto.randomUUID();

  return Promise.all(
    files.map(async (file, i) => {
      const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, "-").slice(-80);
      const path = `${folder}/${i}-${safeName}`;
      const { error } = await supabase.storage
        .from(PHOTO_BUCKET)
        .upload(path, file, { contentType: file.type });
      if (error) throw error;
      return path;
    }),
  );
}

export function QuoteForm({ defaultProjectType }: { defaultProjectType?: string }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [photoCount, setPhotoCount] = useState(0);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const photos = (data.getAll("photos") as File[]).filter((f) => f.size > 0);

    if (photos.length > MAX_PHOTOS) {
      return setError(`Please attach up to ${MAX_PHOTOS} photos.`);
    }
    if (photos.some((f) => f.size > MAX_PHOTO_BYTES || !PHOTO_TYPES.includes(f.type))) {
      return setError("Photos must be JPG, PNG, WebP or HEIC and under 10 MB each.");
    }

    setError(null);
    setStatus("sending");
    try {
      const photoPaths = await uploadPhotos(photos);
      const result = await submitQuote({
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        address: String(data.get("address") ?? ""),
        projectType: String(data.get("projectType") ?? ""),
        insuranceClaim: data.get("insuranceClaim") === "yes",
        details: String(data.get("details") ?? ""),
        company: String(data.get("company") ?? ""),
        photoPaths,
        sourcePage: pathname,
      });
      if (!result.ok) {
        setStatus("idle");
        return setError(result.error);
      }
      track("lead");
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(`We could not send your request. Please call ${site.phone.display}.`);
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-ink bg-white p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center bg-accent text-canvas">
          <CheckIcon className="size-6" />
        </span>
        <h3 className="mt-4 text-2xl">Request received</h3>
        <p className="mt-2 text-muted">
          Thank you. We will call you within one business day. If it is urgent,
          call{" "}
          <a href={`tel:${site.phone.e164}`} className="font-semibold underline">
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-ink bg-white p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className={label}>
            Name
          </label>
          <input id="q-name" name="name" required autoComplete="name" maxLength={120} className={field} />
        </div>
        <div>
          <label htmlFor="q-phone" className={label}>
            Phone
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="q-address" className={label}>
            Property address
          </label>
          <input
            id="q-address"
            name="address"
            required
            autoComplete="street-address"
            maxLength={240}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="q-type" className={label}>
            Project type
          </label>
          <select
            id="q-type"
            name="projectType"
            required
            defaultValue={defaultProjectType ?? ""}
            className={field}
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <fieldset>
          <legend className={label}>Is this an insurance claim?</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {["yes", "no"].map((v) => (
              <label
                key={v}
                className="flex cursor-pointer items-center justify-center gap-2 border border-ink/40 px-3 py-3 font-medium capitalize has-checked:border-ink has-checked:bg-ink has-checked:text-canvas"
              >
                <input type="radio" name="insuranceClaim" value={v} required className="sr-only" />
                {v}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="sm:col-span-2">
          <label htmlFor="q-details" className={label}>
            What happened or what do you want built?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea id="q-details" name="details" rows={3} maxLength={2000} className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="q-photos" className={label}>
            Photos <span className="font-normal text-muted">(optional, up to {MAX_PHOTOS})</span>
          </label>
          <input
            id="q-photos"
            name="photos"
            type="file"
            multiple
            accept={PHOTO_TYPES.join(",")}
            onChange={(e) => setPhotoCount(e.target.files?.length ?? 0)}
            className="mt-2 block w-full cursor-pointer border border-dashed border-ink/40 text-sm text-muted file:mr-4 file:cursor-pointer file:border-0 file:bg-ink file:px-4 file:py-3 file:font-semibold file:text-canvas"
          />
          <p className="mt-1.5 text-xs text-muted">
            {photoCount > 0
              ? `${photoCount} photo${photoCount === 1 ? "" : "s"} selected.`
              : "Photos of the damage or the space help us quote faster."}
          </p>
        </div>
        {/* Honeypot: hidden from people, tempting to bots */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label htmlFor="q-company">Company</label>
          <input id="q-company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-5 border border-accent bg-accent/10 px-4 py-3 text-sm font-medium text-accent-dark">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${btnPrimary} mt-7 w-full disabled:opacity-60`}
      >
        {status === "sending" ? "Sending…" : "Request my quote"}
      </button>
      <p className="label mt-4 text-center text-muted">
        No obligation. We use your details only to reply to this request.
      </p>
    </form>
  );
}
