# Claude Code Rules - Resume

JeongSu Kim의 개인 이력서 + 블로그 사이트.

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS 4 + shadcn/ui (Radix UI)
- **Content**: TSX 컴포넌트 방식 블로그 (MDX 로더 설정 있음)
- **Icons**: Lucide React
- **Deploy**: Vercel (`ssukim-resume.vercel.app`)

## 프로젝트 구조

```
resume/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # 메인 이력서 페이지
│   │   └── blog/             # 블로그
│   │       ├── page.tsx      # 목록
│   │       └── [slug]/       # 상세
│   ├── components/
│   │   ├── ui/               # shadcn/ui 컴포넌트
│   │   └── layout/           # 레이아웃 컴포넌트
│   ├── content/blog/         # 블로그 포스트 (TSX 컴포넌트)
│   ├── data/                 # 정적 데이터 (blog.ts 등)
│   └── lib/                  # 유틸리티
├── docs/                     # 프로젝트 문서
│   ├── projects/             # 진행 중인 프로젝트
│   ├── history/              # 완료된 프로젝트
│   └── templates/            # 문서 템플릿
└── public/images/            # 정적 이미지
```

## 규칙

### 패키지 매니저
- **pnpm 사용** (`pnpm dev`, `pnpm build`)

### 블로그 포스트 추가
1. `src/content/blog/{slug}.tsx`에 TSX 컴포넌트 작성
2. `src/data/blog.ts`의 `blogPosts` 배열에 메타 정보 추가
3. 썸네일 이미지는 `public/images/blog/`에 배치

### 커밋
- 한국어 커밋 메시지, Conventional Commits 형식 (`feat:`, `fix:`, `refactor:` 등)
- main 브랜치에 직접 푸시 (Vercel 자동 배포)

### 콘텐츠
- 블로그 콘텐츠는 MDX가 아닌 **TSX 컴포넌트** 방식
- 회사 내부 프로젝트명(conma, conma-hub 등)은 블로그에 노출하지 않음

## 개발 명령어

```bash
pnpm dev      # 로컬 개발 서버 (http://localhost:3000)
pnpm build    # 프로덕션 빌드
pnpm lint     # ESLint 실행
```
