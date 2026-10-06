import Image from "next/image";
import Link from "next/link";
import type { Area } from "@/content/areas";
import type { Project } from "@/content/projects";
import type { Service } from "@/content/services";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
    >
      <span className="flex size-11 items-center justify-center rounded-lg bg-ink text-accent">
        <ServiceIcon slug={service.slug} />
      </span>
      <h3 className="mt-4 text-xl font-bold group-hover:text-accent-dark">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
      <span className="mt-4 text-sm font-semibold">
        Learn more <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export function AreaLinks({ areas }: { areas: Area[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {areas.map((a) => (
        <li key={a.slug}>
          <Link
            href={`/areas/${a.slug}`}
            className="flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3.5 font-semibold hover:border-ink"
          >
            {a.name}
            <span aria-hidden="true" className="text-accent-dark">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Panel({ label, src, alt }: { label: string; src: string | null; alt: string }) {
  return (
    <div className="hatch relative aspect-[4/3] bg-paper">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
          className="object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-ink/40">
          Photo to come
        </span>
      )}
      <span className="absolute left-2 top-2 rounded bg-ink px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-white">
        {label}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
      <div className="grid grid-cols-2 gap-px bg-line">
        <Panel label="Before" src={project.before} alt={`Before: ${project.title}`} />
        <Panel label="After" src={project.after} alt={`After: ${project.title}`} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-dark">
          {project.category} · {project.area}
          {project.sample && (
            <span className="rounded bg-paper px-1.5 py-0.5 text-ink/60">Sample scope</span>
          )}
        </p>
        <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <dl className="mt-4 space-y-1 border-t border-line pt-4 text-sm">
          <div className="flex gap-2">
            <dt className="font-semibold">Trades:</dt>
            <dd className="text-muted">{project.scope.join(", ")}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">Typical duration:</dt>
            <dd className="text-muted">{project.duration}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4 rounded-xl border border-line bg-white p-5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink font-display text-lg font-extrabold text-accent">
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-1 leading-relaxed text-muted">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
