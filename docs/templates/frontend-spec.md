# [프로젝트명] — 프론트엔드 스펙

| 항목 | 내용 |
|------|------|
| 작성일 | YYYY-MM-DD |
| 작성자 | - |
| 상태 | Draft / Review / Approved |
| 관련 스펙 | [spec.md](../spec.md) |

> 기술 스택: Next.js 16, React 19, TypeScript, Tailwind 4, shadcn/ui, MDX

## 파일 구조

```
src/
├── app/
│   ├── (resume)/         # 이력서 라우트 그룹
│   ├── blog/             # 기술 블로그
│   │   └── [slug]/
│   ├── thoughts/         # 생각 정리
│   │   └── [slug]/
│   └── layout.tsx
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── layout/           # 공통 레이아웃 (Header, Footer, Nav)
│   └── {domain}/         # 도메인별 컴포넌트
├── content/
│   ├── blog/             # MDX 블로그 글
│   └── thoughts/         # MDX 생각 정리 글
├── lib/
│   └── utils.ts
└── types/
    └── {domain}.d.ts
```

## 컴포넌트

### [컴포넌트명]
- **파일**: `{path}/{file}.tsx`
- **타입**: 클라이언트 / 서버 컴포넌트
- **Props**:
  ```typescript
  interface Props {
    // ...
  }
  ```
- **동작**: -

## 라우팅

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 메인 | - |
| `/blog` | 블로그 목록 | - |
| `/blog/[slug]` | 블로그 상세 | MDX 렌더링 |
| `/thoughts` | 생각 정리 목록 | - |
| `/thoughts/[slug]` | 생각 정리 상세 | MDX 렌더링 |

## MDX 콘텐츠 관리

### 파일 구조
```
content/
├── blog/
│   └── {slug}.mdx
└── thoughts/
    └── {slug}.mdx
```

### Frontmatter
```yaml
---
title: "글 제목"
description: "요약"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
published: true
---
```

## 타입 정의

```typescript
// types/{domain}.d.ts
interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  content: string;
}
```

## 구현 순서

1. 타입 정의
2. 공통 레이아웃 (Header, Footer, Nav)
3. 컴포넌트 구현
4. 페이지 연결
5. MDX 설정 및 콘텐츠 연동

## 체크리스트

- [ ] 반응형 확인 (Mobile / Tablet / Desktop)
- [ ] 다크모드 확인
- [ ] SEO 메타태그 확인
- [ ] OG 이미지 확인
- [ ] 접근성 확인 (키보드 탐색, 스크린 리더)
- [ ] Lighthouse 점수 확인
