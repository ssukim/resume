# 케이스 스터디 MDX 블로그화 — 디자인 핸드오프

| 항목 | 내용 |
|------|------|
| 작성일 | 2026-03-02 |
| 디자이너 | Designer |
| 상태 | Draft |
| 관련 스펙 | [spec.md](../spec.md) |

---

## 1. 목록 페이지 (`/case-study`)

### 데스크톱 레이아웃

```
┌───────────┬────────────────────────────────────────────┐
│ Sidebar   │                                            │
│ (기존)     │  케이스 스터디                               │
│           │  ═══════════════                            │
│           │  "왜, 어떻게 했는가"를 보여줍니다.              │
│           │                                            │
│           │  ┌────────────────────────────────────┐     │
│           │  │  마케터의 2시간을 5분으로              │     │
│           │  │  댓글 키워드 기반 DM 자동 응대 설계 과정  │     │
│           │  │  [Product Design] [UX] [Automation] │     │
│           │  │  2026.03.02                         │     │
│           │  └────────────────────────────────────┘     │
│           │                                            │
│           │  ┌────────────────────────────────────┐     │
│           │  │  Claude Code로 제품 만들기            │     │
│           │  │  AI 개발 워크플로 구축기               │     │
│           │  │  [AI] [DX] [Productivity]           │     │
│           │  │  2026.03.02                         │     │
│           │  └────────────────────────────────────┘     │
│           │                                            │
│           │  ┌────────────────────────────────────┐     │
│           │  │  AI 검색엔진에 노출되기까지            │     │
│           │  │  SEO & AI 검색 최적화 여정             │     │
│           │  │  [SEO] [Growth] [AI]                │     │
│           │  │  2026.03.02                         │     │
│           │  └────────────────────────────────────┘     │
│           │                                            │
│           │  Footer                                    │
└───────────┴────────────────────────────────────────────┘
```

### 목록 카드 상세

- 기존 `CaseStudyCard`에서 아코디언 제거
- 카드 전체가 링크 (`<Link href="/case-study/{slug}">`)
- hover 시 `shadow-lg` + 미세한 이동 (`hover:-translate-y-0.5`)
- 구성: 제목(`text-lg font-semibold`) + 부제목(`text-sm text-muted-foreground`) + Badge + 날짜
- 날짜 추가: `text-xs text-muted-foreground/60`
- ChevronDown 제거, 대신 우측에 화살표 또는 없음

---

## 2. 상세 페이지 (`/case-study/[slug]`)

### 데스크톱 레이아웃

```
┌───────────┬────────────────────────────────────────────┐
│ Sidebar   │                                            │
│ (기존)     │  ← 목록으로 돌아가기                         │
│           │                                            │
│           │  마케터의 2시간을 5분으로                      │
│           │  ═══════════════════════                    │
│           │  댓글 키워드 기반 DM 자동 응대 설계 과정         │
│           │                                            │
│           │  [Product Design] [UX] [Automation]         │
│           │  2026.03.02                                │
│           │                                            │
│           │  ── Separator ──────────────────────        │
│           │                                            │
│           │  ## 배경                                    │
│           │                                            │
│           │  유저 인터뷰에서 인스타그램 마케터들이...         │
│           │                                            │
│           │  ## 접근법                                   │
│           │                                            │
│           │  핵심 인사이트는...                            │
│           │                                            │
│           │  (MDX 콘텐츠: 이미지, 코드 블록 가능)          │
│           │                                            │
│           │  ...                                       │
│           │                                            │
│           │  Footer                                    │
└───────────┴────────────────────────────────────────────┘
```

### 상세 페이지 헤더

```
┌──────────────────────────────────────────┐
│                                          │
│  ← 목록으로                               │  ← text-sm text-muted-foreground
│                                          │     hover:text-foreground
│  마케터의 2시간을 5분으로                    │  ← text-3xl sm:text-4xl font-bold
│  댓글 키워드 기반 DM 자동 응대 설계 과정      │  ← text-lg text-muted-foreground mt-3
│                                          │
│  [Product Design] [UX] [Automation]      │  ← Badge variant="secondary" mt-4
│  2026.03.02                              │  ← text-sm text-muted-foreground/60 mt-3
│                                          │
│  ── Separator ──────────────────────     │  ← my-10
│                                          │
└──────────────────────────────────────────┘
```

### MDX 본문 타이포그래피

prose 클래스 기반 (`@tailwindcss/typography`):

| 요소 | 스타일 |
|------|--------|
| `h2` | `text-2xl font-bold mt-12 mb-4` — 섹션 제목 (배경, 접근법, 핵심 구현, 결과, 배운 점) |
| `h3` | `text-xl font-semibold mt-8 mb-3` |
| `p` | `text-base leading-relaxed mb-4 text-foreground/80` |
| `blockquote` | `border-l-4 border-primary/40 pl-4 italic text-muted-foreground` |
| `code` (인라인) | `bg-muted px-1.5 py-0.5 rounded text-sm` |
| `pre` (코드 블록) | rehype-pretty-code 렌더링, `rounded-lg` |
| `img` | `rounded-lg my-6` |
| `strong` | `text-foreground font-semibold` |
| `ul/ol` | `space-y-2 pl-6` |

### 본문 최대 너비

- `max-w-3xl` (기존 이력서 `max-w-4xl`보다 좁게 — 긴 글 가독성)

---

## 3. 사이드바 변경

### 네비게이션

현재:
```
[이력서]          ← onClick → setActiveTab("resume")
[케이스 스터디]    ← onClick → setActiveTab("case-study")
```

변경:
```
[이력서]          ← Link href="/"
[케이스 스터디]    ← Link href="/case-study"
```

- `usePathname()`으로 활성 상태 판단
- `/` → 이력서 활성
- `/case-study`, `/case-study/*` → 케이스 스터디 활성

---

## 4. MDX Frontmatter

```yaml
---
title: "마케터의 2시간을 5분으로"
subtitle: "댓글 키워드 기반 DM 자동 응대 설계 과정"
date: "2026-03-02"
tags: ["Product Design", "UX", "Automation"]
description: "유저 인터뷰에서 발견한 문제를 3-Step 자동화로 해결한 과정"
---
```

- `description`은 SEO meta description + OG description에 사용
- `date`는 목록/상세에서 표시

---

## 5. 색상 & 스타일

기존 디자인 시스템 유지. 추가 없음.

| 요소 | 토큰 |
|------|------|
| 본문 텍스트 | `text-foreground/80` |
| 뒤로가기 링크 | `text-muted-foreground hover:text-foreground` |
| 태그 Badge | `variant="secondary"` |
| 섹션 구분선 | `<Separator />` |
| 인용구 border | `border-primary/40` |

---

## 6. 반응형

| 뷰포트 | 변경 사항 |
|---------|-----------|
| Desktop (lg+) | 사이드바 + 본문 max-w-3xl |
| Mobile (<lg) | 풀 너비, 기존 모바일 레이아웃 유지 |

---

## 7. 접근성

- 뒤로가기 링크: `aria-label="케이스 스터디 목록으로 돌아가기"`
- 목록 카드: 전체가 클릭 가능한 링크
- 코드 블록: 적절한 `lang` 속성
