export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  description: string;
  author: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "claude-code-productivity",
    title: "Claude Code로 개발 생산성 3배 높이기",
    subtitle: "AI 코딩 어시스턴트를 실무 워크플로에 통합한 경험",
    date: "2026-03-01",
    tags: ["AI"],
    description:
      "Claude Code를 실무 개발 워크플로에 도입하고, 생산성을 극적으로 개선한 방법과 팁을 정리했습니다.",
    author: "JeongSu Kim",
    readingTime: "5분",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((p) => p.tags)));
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
