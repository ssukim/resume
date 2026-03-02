import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | JeongSu Kim`,
    description: post.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { default: PostContent } = await import(
    `@/content/blog/${slug}.tsx`
  );

  const relatedPosts = getRelatedPosts(slug, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        블로그
      </Link>

      {/* Header */}
      <header className="mt-8">
        <div className="flex items-center gap-2">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[11px] font-medium text-primary border-primary/30"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          {post.subtitle}
        </p>

        <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground/70">
          <span className="font-medium text-foreground/80">{post.author}</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mt-8 overflow-hidden rounded-xl border border-border">
        <div className="relative aspect-[1200/630] w-full bg-muted">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
            priority
          />
        </div>
      </div>

      <Separator className="my-8" />

      {/* Article Body */}
      <article className="prose prose-invert max-w-none prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/80 prose-p:leading-[1.8] prose-strong:text-foreground prose-blockquote:border-l-2 prose-blockquote:border-primary/40 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[oklch(0.18_0_0)] prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-li:text-foreground/80 prose-li:leading-[1.8] prose-img:rounded-lg prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:text-left prose-th:text-foreground/90 prose-th:font-semibold prose-th:pb-2 prose-th:border-b prose-th:border-border prose-td:py-2 prose-td:text-foreground/70 prose-td:border-b prose-td:border-border/50">
        <PostContent />
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <>
          <Separator className="my-12" />
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              다른 글 둘러보기
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group overflow-hidden rounded-lg border border-border transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                >
                  <div className="relative aspect-[1200/630] w-full overflow-hidden bg-muted">
                    <Image
                      src={rp.thumbnail}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="360px"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {rp.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-[10px] font-medium text-muted-foreground border-border"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                      {rp.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {rp.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      <footer className="mt-20 pt-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; 2026 JeongSu Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}
