import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, PhoneLink } from "./ui";

/** Keeps call and quote one tap away on phones. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink bg-canvas pb-[env(safe-area-inset-bottom)] md:hidden">
      <PhoneLink className="flex h-14 items-center justify-center gap-2 border-r border-ink font-semibold">
        <PhoneIcon className="size-4 text-accent" />
        Call now
        <span className="sr-only">: {site.phone.display}</span>
      </PhoneLink>
      <Link href="/contact#quote" className="flex h-14 items-center justify-center bg-ink font-semibold text-canvas">
        Get a quote
      </Link>
    </div>
  );
}
