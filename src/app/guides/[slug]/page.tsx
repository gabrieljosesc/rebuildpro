import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, FaqList, JsonLd, PageHero, Prose, QuoteCard, container } from "@/components/ui";
import { guideBySlug, guides } from "@/content/guides";
import { articleSchema, faqSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const guide = guideBySlug((await params).slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      publishedTime: guide.published,
      modifiedTime: guide.updated,
    },
  };
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const guide = guideBySlug((await params).slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: guide.title,
            description: guide.metaDescription,
            path,
            published: guide.published,
            updated: guide.updated,
          }),
          faqSchema(guide.faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Guides", path: "/guides" },
          { name: guide.title, path },
        ]}
        eyebrow="Guide"
        title={guide.title}
        lead={guide.answer}
        updated={guide.updated}
        cta={false}
      />
      <div className={`${container} grid gap-12 py-14 lg:grid-cols-[1fr_20rem]`}>
        <article>
          <Prose sections={guide.sections} />
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">Frequently asked questions</h2>
            <div className="mt-5">
              <FaqList faqs={guide.faqs} />
            </div>
          </section>
          <p className="mt-8 text-sm text-muted">
            This guide is general information for Ontario homeowners. Coverage
            depends on your own policy; confirm details with your insurer or
            broker.
          </p>
        </article>
        <div>
          <QuoteCard />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
