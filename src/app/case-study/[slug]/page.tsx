import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getCaseStudyBySlug, getAllSlugs } from "@/lib/case-studies";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.title} | JeongSu Kim`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const { default: MdxContent } = await import(
    `@/content/case-study/${slug}.mdx`
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
      {/* Back Link */}
      <Link
        href="/case-study"
        aria-label="케이스 스터디 목록으로 돌아가기"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        목록으로
      </Link>

      {/* Header */}
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{study.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{study.subtitle}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {study.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-medium">
            {tag}
          </Badge>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted-foreground/60">{study.date}</p>

      <Separator className="my-10" />

      {/* MDX Body */}
      <article className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-foreground prose-blockquote:border-primary/40 prose-blockquote:text-muted-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-img:rounded-lg prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        <MdxContent />
      </article>

      <footer className="mt-20 pt-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; 2026 JeongSu Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}
