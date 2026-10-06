import Link from "next/link";
import { btnOutline, btnPrimary, container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className={`${container} py-24 text-center`}>
      <p className="label text-accent">404</p>
      <h1 className="mt-2 text-4xl">This page is not here</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        The page may have moved. Try the services list or head back home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={btnPrimary}>
          Back to home
        </Link>
        <Link href="/services" className={btnOutline}>
          View services
        </Link>
      </div>
    </section>
  );
}
