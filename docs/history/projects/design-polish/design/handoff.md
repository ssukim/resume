# 디자인 폴리싱 — 디자인 핸드오프

| 항목 | 내용 |
|------|------|
| 작성일 | 2026-03-02 |
| 디자이너 | Designer |
| 상태 | Draft |
| 관련 스펙 | [spec.md](../spec.md) |

---

## 1. 액센트 컬러

### 변경 사항
다크모드 `--primary`를 무채색에서 블루 계열 액센트로 변경한다.

### 색상 정의 (다크모드)

| 변수 | 현재 | 변경 |
|------|------|------|
| `--primary` | `oklch(0.922 0 0)` (회색) | `oklch(0.7 0.15 250)` (소프트 블루) |
| `--primary-foreground` | `oklch(0.205 0 0)` | `oklch(0.15 0 0)` (유지) |
| `--ring` | `oklch(0.556 0 0)` | `oklch(0.6 0.1 250)` (블루 틴트) |

### 적용 대상
- 사이드바 네비게이션 활성 탭 텍스트
- 경력 카드 `border-l-4`
- 섹션 제목 아이콘
- 외부 링크 hover
- 서브프로젝트 `border-l-2`

### 주의
- 라이트모드 `--primary`는 변경하지 않음 (현재 다크모드 고정)
- 과하지 않게 — 포인트로만 사용, 배경색에는 적용하지 않음

---

## 2. 사이드바 프로필 영역

### 변경 전
```
AI와 함께        ← text-xs, br 강제 줄바꿈
제품을 만드는
프로덕트
엔지니어

JeongSu Kim      ← text-2xl bold
Last Updated...
```

### 변경 후
```
┌──────────────────────┐
│  ┌────┐              │
│  │ JS │  JeongSu Kim │  ← 이니셜 아바타(40x40) + 이름(text-lg bold)
│  └────┘              │
│                      │
│  Product Engineer    │  ← text-sm, text-muted-foreground
│  AI와 함께 제품을 만드는 │  ← text-xs, 한 줄로
│                      │
│  Last Updated...     │
└──────────────────────┘
```

### 상세
- 이니셜 아바타: `w-10 h-10 rounded-full bg-primary text-primary-foreground` 안에 "JS" 텍스트
- 이름과 아바타를 `flex items-center gap-3`으로 배치
- 타이틀("Product Engineer")을 이름 아래에 `text-sm text-muted-foreground`
- 한 줄 소개("AI와 함께 제품을 만드는")를 `text-xs text-muted-foreground/70`으로 추가
- br 강제 줄바꿈 완전 제거

---

## 3. 시각적 계층 구조

### 섹션 구분
- `<Separator>` 유지하되, 섹션 간 여백을 `my-12` → `my-16`으로 확대
- 각 섹션 제목에 `mb-8` 통일 (현재 `mb-4` ~ `mb-8` 혼재)

### 카드 스타일 통일
| 카드 타입 | 현재 | 변경 |
|-----------|------|------|
| 경력 카드 | `border-l-4 border-l-primary` | 유지 |
| 프로젝트 카드 | 없음 | `border-l-4 border-l-primary/30` 추가 |
| 서브프로젝트 | `border-l-2 border-primary/40` | `border-l-2 border-primary/30` (톤 다운) |

### 서브프로젝트 깊이 표현
- 현재: `border-l-2`만으로 구분
- 변경: `border-l-2` + `bg-muted/30 rounded-lg p-4` 추가하여 영역감 부여

---

## 4. 타이포그래피

### 본문 가독성
| 요소 | 현재 | 변경 |
|------|------|------|
| 본문 텍스트 | `text-primary/90` | `text-foreground/80` |
| 서브 텍스트 | `text-muted-foreground` | 유지 |
| 성과 텍스트 | `text-primary/90` | `text-foreground/80` |

### 섹션 제목 크기
| 섹션 | 현재 | 변경 |
|------|------|------|
| 자기소개, 경력, 프로젝트 | `text-xl sm:text-2xl` | 유지 |
| 스킬, 교육, ETC | `text-xl sm:text-2xl` | `text-lg sm:text-xl` |

---

## 5. 인터랙션

### 탭 전환
- 콘텐츠 교체 시 `animate-fade-in` 적용 (globals.css에 이미 정의됨)
- 적용 방법: 탭 콘텐츠 래퍼에 `key={activeTab}` + `className="animate-fade-in"`

### 케이스 스터디 아코디언
- 현재: `{isOpen && <CardContent>}` (즉시 표시)
- 변경: `grid` 트릭 사용 — `grid-rows-[0fr]` → `grid-rows-[1fr]` 트랜지션
- `transition-[grid-template-rows] duration-300 ease-out`

---

## 6. 여백/밀도

### 사이드바
| 요소 | 현재 | 변경 |
|------|------|------|
| 전체 패딩 | `px-6 py-8` | `px-5 py-6` |
| 섹션 간 구분선 | `my-6` | `my-5` |

### Badge 밀집 구간
- 기술 스택 Badge가 10개 이상인 프로젝트 카드에서 `gap-1.5` → `gap-2` 확대
- 사이드바 Core Skills Badge도 `gap-1.5` → `gap-2`

---

## 반응형

| 뷰포트 | 변경 사항 |
|---------|-----------|
| Desktop (lg+) | 위 변경사항 모두 적용 |
| Mobile (<lg) | 동일하게 적용. 사이드바 프로필 아바타 크기 유지 |

## 접근성

- 색상 대비: 액센트 블루(`oklch(0.7 0.15 250)`)가 다크 배경(`oklch(0.145 0 0)`) 위에서 WCAG AA 충족 확인 필요
- 아코디언 트랜지션: `prefers-reduced-motion` 미디어 쿼리 대응
