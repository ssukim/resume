export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  description: string;
  author: string;
  readingTime: string;
  thumbnail: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "claude-md-ai-onboarding",
    title: "CLAUDE.md 하나로 AI를 팀원으로 만든 방법",
    subtitle: "Claude Code를 문서 자동화 엔진으로 활용한 실무 사례",
    date: "2026-03-02",
    tags: ["AI"],
    description:
      "CLAUDE.md 파일에 명령어 체계와 프로세스를 정의해서 Claude Code를 팀의 실질적인 팀원으로 만든 경험을 공유합니다.",
    author: "JeongSu Kim",
    readingTime: "7분",
    thumbnail: "/images/blog/claude-md-ai-onboarding.svg",
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
