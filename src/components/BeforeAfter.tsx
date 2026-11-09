import Image from "next/image";
import type { Photo } from "@/content/service-types";

function Panel({
  label,
  photo,
  priority,
  sizes,
}: {
  label: string;
  photo: Photo;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure className="relative aspect-[4/3] overflow-hidden bg-paper">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={70}
        className="object-cover"
      />
      <figcaption className="absolute left-3 top-3 rounded bg-ink/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
        {label}
      </figcaption>
    </figure>
  );
}

/**
 * Side-by-side before and after photos. `stock` adds the disclosure line
 * that the photos are representative rather than a Rebuild Pro job.
 */
export function BeforeAfter({
  before,
  after,
  stock,
  priority,
  caption,
}: {
  before: Photo;
  after: Photo;
  stock: boolean;
  priority?: boolean;
  caption?: string;
}) {
  // Each panel is half the width of the pair.
  const sizes = "(min-width: 1024px) 18rem, 50vw";
  return (
    <div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
        <Panel label="Before" photo={before} priority={priority} sizes={sizes} />
        <Panel label="After" photo={after} priority={priority} sizes={sizes} />
      </div>
      {(caption || stock) && (
        <p className="mt-2 text-xs text-muted">
          {caption}
          {caption && stock ? " " : ""}
          {stock && "Representative photos of this kind of work; project photos from our own jobs are added as they are completed."}
        </p>
      )}
    </div>
  );
}
