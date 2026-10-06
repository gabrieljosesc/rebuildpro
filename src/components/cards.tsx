import Image from "next/image";
import Link from "next/link";
import type { Area } from "@/content/areas";
import type { Project } from "@/content/projects";
import type { Service } from "@/content/services";
import { Arrow } from "./ui";

/** Numbered row in a hairline list, instead of an icon card. */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group grid gap-x-6 gap-y-2 border-t border-ink py-6 transition-colors hover:bg-white sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:px-3"
    >
      <span className="label text-muted">{String(index + 1).padStart(2, "0")}</span>
      <span>
        <span className="block font-display text-2xl group-hover:text-accent">{service.name}</span>
        <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-muted">
          {service.short}
        </span>
      </span>
      <Arrow className="mt-2 size-5 justify-self-end text-ink transition-transform group-hover:translate-x-1 group-hover:text-accent" />
    </Link>
  );
}

export function AreaLinks({ areas }: { areas: Area[] }) {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3">
      {areas.map((a) => (
        <li key={a.slug} className="border-b border-r border-line">
          <Link
            href={`/areas/${a.slug}`}
            className="flex h-full items-center justify-between gap-2 px-4 py-4 font-medium hover:bg-white hover:text-accent"
          >
            {a.name}
            <Arrow className="size-4 shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Panel({ label, src, alt }: { label: string; src: string | null; alt: string }) {
  return (
    <figure className="hatch relative aspect-[4/3] bg-paper">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
          className="object-cover"
        />
      ) : (
        <span className="label absolute inset-0 flex items-end justify-center pb-3 text-ink/35">
          Photo to come
        </span>
      )}
      <figcaption className="label absolute left-0 top-0 bg-ink px-2 py-1 text-canvas">
        {label}
      </figcaption>
    </figure>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col border border-ink bg-white">
      <div className="grid grid-cols-2 gap-px border-b border-ink bg-ink">
        <Panel label="Before" src={project.before} alt={`Before: ${project.title}`} />
        <Panel label="After" src={project.after} alt={`After: ${project.title}`} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <span className="text-accent">{project.category}</span>
          <span>{project.area}</span>
          {project.sample && <span className="border border-line px-1.5 py-0.5">Sample scope</span>}
        </p>
        <h3 className="mt-3 text-xl leading-snug">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <dl className="mt-5 grid gap-3 border-t border-line pt-4 text-sm">
          <div>
            <dt className="label text-muted">Trades</dt>
            <dd className="mt-1 text-ink/80">{project.scope.join(", ")}</dd>
          </div>
          <div>
            <dt className="label text-muted">Typical duration</dt>
            <dd className="mt-1 text-ink/80">{project.duration}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

/** Numbered steps as ruled entries with serif numerals. */
export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="border-t border-ink">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="grid gap-x-8 gap-y-2 border-b border-line py-6 sm:grid-cols-[4rem_1fr]"
        >
          <span className="font-display text-4xl leading-none text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
