import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, PhoneLink } from "./ui";

/** Keeps call and quote one tap away on phones. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgb(15_29_43/0.08)] md:hidden">
      <PhoneLink className="flex h-12 items-center justify-center gap-2 rounded-md bg-ink font-semibold text-white">
        <PhoneIcon className="size-4" />
        Call now
        <span className="sr-only">: {site.phone.display}</span>
      </PhoneLink>
      <Link
        href="/contact#quote"
        className="flex h-12 items-center justify-center rounded-md bg-accent font-semibold text-ink"
      >
        Get a quote
      </Link>
    </div>
  );
}
