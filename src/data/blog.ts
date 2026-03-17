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
    slug: "domain-migration-with-claude",
    title: "프론트엔드 개발자가 Claude와 도메인 마이그레이션한 이야기",
    subtitle: "AWS EKS + Istio 환경에서 무중단 도메인 전환을 이틀 만에 완료한 과정",
    date: "2026-03-14",
    tags: ["DevOps", "AI"],
    description:
      "프론트엔드 개발자가 Claude Code를 활용해 AWS EKS, Istio, ALB, Route 53까지 건드리는 도메인 마이그레이션을 DEV+PROD 환경 모두 무중단으로 완료한 경험을 공유합니다.",
    author: "JeongSu Kim",
    readingTime: "8분",
    thumbnail: "/images/blog/domain-migration-with-claude.svg",
  },
  {
    slug: "design-token-migration",
    title: "420개 Tailwind 클래스를 깨지 않고 마이그레이션한 방법",
    subtitle: "Claude Code와 함께한 디자인 토큰 리팩토링 3-Phase 전략",
    date: "2026-03-07",
    tags: ["Frontend", "Design System"],
    description:
      "CSS 변수 20개, Tailwind 클래스 420개, 컴포넌트 110개. Claude Code로 분석부터 자동화까지 처리하면서 대규모 Color System을 안전하게 리팩토링한 과정을 공유합니다.",
    author: "JeongSu Kim",
    readingTime: "10분",
    thumbnail: "/images/blog/design-token-migration.svg",
  },
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
