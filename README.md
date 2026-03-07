# Resume

JeongSu Kim의 개인 이력서 + 기술 블로그 사이트입니다.

## 기술 스택

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS 4** + shadcn/ui
- **Vercel** 배포

## 시작하기

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## 프로젝트 구조

```
src/
├── app/                  # Next.js App Router
│   ├── page.tsx          # 메인 이력서 페이지
│   └── blog/             # 블로그 (목록 + 상세)
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── layout/           # 레이아웃 컴포넌트
├── content/blog/         # 블로그 포스트 (TSX)
├── data/                 # 정적 데이터
└── lib/                  # 유틸리티
```

## 블로그 포스트 추가

1. `src/content/blog/{slug}.tsx` 작성
2. `src/data/blog.ts`에 메타 정보 추가
3. 썸네일: `public/images/blog/`

## 문서

프로젝트 문서는 [`docs/README.md`](docs/README.md)를 참조하세요.
