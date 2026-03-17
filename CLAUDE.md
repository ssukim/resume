# Resume 프로젝트

JeongSu Kim의 개인 이력서 + 블로그 사이트.

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript, React 19
- **스타일링**: Tailwind CSS v4 + shadcn/ui (Radix UI)
- **배포**: Vercel (`ssukim-resume.vercel.app`)

## 프로젝트 구조

```
src/
├── app/                  # Next.js App Router 페이지
│   ├── page.tsx          # 메인 이력서 페이지
│   └── blog/             # 블로그
│       ├── page.tsx      # 목록
│       └── [slug]/       # 상세
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── layout/           # 레이아웃 컴포넌트
├── content/blog/         # 블로그 포스트 (TSX 컴포넌트)
├── data/                 # 정적 데이터 (blog.ts 등)
└── lib/                  # 유틸리티
docs/projects/            # 프로젝트 기획 문서
public/images/            # 정적 이미지
```

## 개발 명령어

```bash
pnpm dev      # 로컬 개발 서버 (http://localhost:3000)
pnpm build    # 프로덕션 빌드
pnpm lint     # ESLint 실행
```

## 블로그 포스트 추가 방법

1. `src/content/blog/{slug}.tsx`에 TSX 컴포넌트 작성
2. `src/data/blog.ts`의 `blogPosts` 배열에 메타 정보 추가
3. 썸네일 이미지는 `public/images/blog/`에 배치

## 규칙

- 블로그 콘텐츠는 MDX가 아닌 **TSX 컴포넌트** 방식
- 커밋 메시지는 한국어로 작성, Conventional Commits 형식 (`feat:`, `fix:`, `refactor:` 등)
- main 브랜치에 직접 푸시 (Vercel 자동 배포)
- 회사 내부 프로젝트명(conma, conma-hub 등)은 블로그에 노출하지 않음
