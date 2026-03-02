import { Suspense } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getAllTags } from "@/data/blog";
import { TagFilter } from "./_components/tag-filter";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "블로그 | JeongSu Kim",
  description:
    "프로덕트 엔지니어 김정수의 기술 블로그. 프론트엔드, AI, 생산성에 대한 글을 공유합니다.",
};

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = getAllPosts();
  const tags = getAllTags();

  const filteredPosts = tag
    ? posts.filter((p) => p.tags.includes(tag))
    : posts;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      {/* Hero */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          블로그
        </h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          개발하며 배우고 느낀 것들을 기록합니다.
        </p>
      </div>

      {/* Tags */}
      <Suspense fallback={null}>
        <TagFilter tags={tags} />
      </Suspense>

      {/* Post List */}
      <div className="mt-8 divide-y divide-border">
        {filteredPosts.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            해당 태그의 포스트가 없습니다.
          </p>
        ) : (
          filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-6 first:pt-0 last:pb-0"
            >
              <article className="space-y-3">
                {/* Tag */}
                <div className="flex items-center gap-2">
                  {post.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-[11px] font-medium text-primary border-primary/30"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Title + Arrow */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors sm:text-xl">
                    {post.title}
                  </h3>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" />
                </div>

                {/* Subtitle */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.subtitle}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground/60">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
              </article>
            </Link>
          ))
        )}
      </div>

      <footer className="mt-20 pt-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; 2026 JeongSu Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}
