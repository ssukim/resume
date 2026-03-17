# 케이스 스터디 MDX 블로그화 — 프론트엔드 스펙

| 항목 | 내용 |
|------|------|
| 작성일 | 2026-03-02 |
| 작성자 | Frontend |
| 상태 | Draft |
| 관련 스펙 | [spec.md](../spec.md) |
| 디자인 핸드오프 | [handoff.md](../design/handoff.md) |

> 기술 스택: Next.js 16, React 19, TypeScript, Tailwind 4, shadcn/ui, @next/mdx

## 의존성 추가

```
@next/mdx, @mdx-js/loader, @mdx-js/react, @types/mdx
gray-matter
rehype-pretty-code, shiki
@tailwindcss/typography
```

## 파일 구조

```
src/
├── app/
│   ├── page.tsx                      # 이력서 (케이스스터디 탭/데이터 제거)
│   ├── case-study/
│   │   ├── page.tsx                  # 목록 페이지 (서버 컴포넌트)
│   │   └── [slug]/
│   │       └── page.tsx              # 상세 페이지 (서버 컴포넌트)
│   ├── layout.tsx                    # 기존 유지
│   └── globals.css                   # prose 스타일 추가
├── components/
│   └── layout/
│       └── sidebar.tsx               # Sidebar 분리 (page.tsx에서 추출)
├── lib/
│   └── case-studies.ts               # MDX 파싱 유틸리티
content/
├── case-study/
│   ├── dm-automation.mdx
│   ├── claude-code-workflow.mdx
│   └── ai-seo.mdx
mdx-components.tsx                    # MDX 컴포넌트 매핑 (프로젝트 루트)
next.config.ts                        # MDX 설정
```

## 구현 순서

1. 의존성 설치
2. next.config.ts MDX 설정
3. mdx-components.tsx 생성
4. content/case-study/*.mdx 콘텐츠 작성 (기존 데이터 이관)
5. lib/case-studies.ts 유틸리티
6. /case-study 목록 페이지
7. /case-study/[slug] 상세 페이지
8. page.tsx에서 케이스스터디 탭 → Link 전환, 관련 코드 정리
9. Sidebar를 layout에서 공유하도록 구조 변경

## 체크리스트

- [ ] MDX 파일 3개 정상 렌더링
- [ ] 목록 페이지 카드 → 상세 페이지 이동
- [ ] 상세 페이지 뒤로가기 → 목록
- [ ] 사이드바 네비게이션 활성 상태 (pathname 기반)
- [ ] SSG (pnpm build에서 정적 생성 확인)
- [ ] SEO 메타태그 (title, description)
- [ ] 모바일 반응형 정상
- [ ] 빌드 에러 없음
