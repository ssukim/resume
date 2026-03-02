# 레이아웃 리뉴얼 — 프론트엔드 스펙

| 항목 | 내용 |
|------|------|
| 작성일 | 2026-03-02 |
| 작성자 | Frontend |
| 상태 | Retroactive (소급 작성) |
| 관련 스펙 | [spec.md](../spec.md) |
| 디자인 핸드오프 | [handoff.md](../design/handoff.md) |

> 이 문서는 구현 완료 후 코드 기반으로 소급 작성되었습니다.

> 기술 스택: Next.js 16, React 19, TypeScript, Tailwind 4, shadcn/ui

## 수정 파일

| 파일 | 변경 내용 |
|------|----------|
| `src/app/page.tsx` | Home 컴포넌트 JSX를 사이드바 레이아웃으로 변경, Sidebar 컴포넌트 추가 |

## 추가 import

| 모듈 | 항목 |
|------|------|
| `react` | `useRef`, `useCallback` |
| `lucide-react` | `Menu`, `X` |

## 추가 컴포넌트

### Sidebar
- **파일**: `src/app/page.tsx` (인라인 정의)
- **타입**: 클라이언트 컴포넌트
- **Props**:
  ```typescript
  {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
  }
  ```
- **동작**: 프로필, 네비게이션, Core Skills, 연락처를 세로로 배치. 연락처는 flex spacer로 하단 고정.

## Home 컴포넌트 상태

| 상태 | 타입 | 용도 |
|------|------|------|
| `activeTab` | `Tab` | 이력서/케이스 스터디 전환 |
| `sidebarOpen` | `boolean` | 모바일 사이드바 토글 |
| `mainRef` | `RefObject<HTMLElement>` | 탭 전환 시 스크롤 초기화 |

## handleTabChange 헬퍼

```typescript
const handleTabChange = useCallback((tab: Tab) => {
  setActiveTab(tab);
  setSidebarOpen(false);
  if (mainRef.current) {
    mainRef.current.scrollTop = 0;
  }
}, []);
```

## JSX 구조

```
<div min-h-screen>
  <div mobile-top-bar />         ← lg:hidden, sticky
  <div mobile-overlay />         ← lg:hidden, fixed
  <aside sidebar />              ← fixed, w-72, translate-x 전환
  <main ref={mainRef}>           ← lg:ml-72, lg:overflow-y-auto
    <div max-w-4xl>
      {tab content}
      <footer />
    </div>
  </main>
</div>
```

## 반응형 브레이크포인트

| 클래스 | 적용 |
|--------|------|
| `lg:hidden` | 모바일 상단 바 (데스크톱에서 숨김) |
| `lg:translate-x-0` | 사이드바 (데스크톱에서 항상 표시) |
| `-translate-x-full` | 사이드바 (모바일에서 숨김) |
| `lg:ml-72` | 메인 콘텐츠 (데스크톱에서 사이드바 공간 확보) |
| `lg:h-screen lg:overflow-y-auto` | 메인 콘텐츠 (데스크톱 독립 스크롤) |

## 체크리스트

- [x] 데스크톱 사이드바 고정, 메인 독립 스크롤
- [x] 모바일 상단 바 + 햄버거 메뉴
- [x] 모바일 사이드바 슬라이드인/아웃
- [x] 오버레이 클릭 시 사이드바 닫힘
- [x] 탭 전환 시 스크롤 초기화 + 사이드바 닫힘
- [x] 기존 콘텐츠 정상 렌더링
- [x] 빌드 에러 없음
