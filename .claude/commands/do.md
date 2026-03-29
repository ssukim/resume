---
description: "Resume 사이트 명령어 허브 - 할 일을 선택하세요"
---

아래 목록에서 번호를 선택해주세요. 사용자가 번호를 답하면 해당 작업을 실행합니다.

---

## 배포
1. 배포 — Vercel 배포

## 콘텐츠
2. 블로그 추가 — 새 블로그 포스트 생성 (TSX + 메타데이터)
   - 2-1. 자유 주제 — 직접 주제를 입력해서 작성
   - 2-2. 프로젝트 기반 — conma-hub 프로젝트에서 소재 추출

## 동기화
3. 이력서 동기화 — Resume 사이트 최신 내용을 외부 플랫폼(원티드/잡코리아/LinkedIn)에 반영 (Playwright MCP)
3-1. 노션 동기화 — Resume 사이트 최신 내용을 Notion 이력서 페이지에 반영 (Notion API)

## 점검
4. 이력서 점검 — 이력서 내용이 최신 상태인지 검증
5. 프로젝트 문서 점검 — 핵심 문서가 현재 코드베이스와 일치하는지 검증

---

사용자가 번호를 선택하면:
- 1번(배포): `npx vercel deploy --prod` 실행 전 사용자 확인
- 2번(블로그 추가):
  - 2-1(자유 주제): 사용자에게 주제를 질문 후 `src/content/blog/{slug}.tsx` 파일과 `src/data/blog.ts` 메타데이터 추가
  - 2-2(프로젝트 기반): `/Users/admin/Documents/digitalog/conma-hub` 프로젝트 문서를 스캔하여 블로그 소재를 추출. 프로젝트 선택 → 앵글 선택 → 초안 생성 → 메타데이터 + 썸네일 생성. ⚠️ 회사 내부 프로젝트명(conma, conma-hub, imp-sns, digitalog)은 블로그에 노출하지 않고 기술적 인사이트에 집중
- 3번(이력서 동기화): `/sync-resume` 스킬을 실행합니다
- 3-1번(노션 동기화): 아래 절차로 진행:
  1. 사용자에게 "노션 페이지 기존 내용 삭제해주세요" 요청
  2. 사용자가 삭제 완료를 확인하면 `pnpm notion-sync` 실행
  3. 스크립트는 `page.tsx`에서 이력서 데이터를 자동 추출하여 Notion API로 동기화
  4. 환경변수는 `.env.local`에 저장됨 (NOTION_TOKEN, NOTION_PAGE_ID)
- 4번(이력서 점검): `src/app/page.tsx`의 이력서 데이터를 읽고 아래 항목을 검증:
  - **경력 기간** — 현재 재직 중인 회사의 기간이 오늘 날짜 기준으로 맞는지
  - **프로젝트 내용** — 아래 실제 프로젝트 코드베이스와 비교하여 누락된 프로젝트나 outdated 성과가 있는지
  - **기술 스택** — skills 배열이 실제 사용 중인 기술과 일치하는지 (각 프로젝트의 package.json 참고)
  - **자기소개** — 최신 프로젝트 성과가 반영되어 있는지
  - **링크** — 외부 링크(회사 URL 등)가 유효한지
  - **일관성** — 같은 기술/프로젝트명이 여러 곳에서 다르게 표기되진 않는지
  - 점검 결과를 항목별로 정리하고, 수정이 필요한 부분은 사용자 확인 후 반영
  - **참고 프로젝트 경로**:
    - 디지털로그 Conma: `/Users/admin/Documents/digitalog/conma-hub` (문서 허브), 프론트엔드는 서브모듈 `imp-sns-web`
    - 디지털로그 BizCalendar: `/Users/admin/Documents/digitalog/biz-calendar-web`
    - 세탁특공대 입고 Admin: `/Users/admin/Documents/wash-swat/appsmith-admin`
    - 세탁특공대 MFE Admin: `/Users/admin/Documents/wash-swat/works`
    - 세탁특공대 User App: `/Users/admin/Documents/wash-swat/granada-user-app`
    - 세탁특공대 Agent App: `/Users/admin/Documents/wash-swat/WashswatAdmin`
- 5번(프로젝트 문서 점검): 아래 문서들을 읽고 실제 코드베이스와 비교하여 불일치/누락/outdated 항목을 리포트:
  - `CLAUDE.md` — 프로젝트 규칙, 구조, 기술 스택이 실제와 맞는지
  - `README.md` — 프로젝트 설명이 현재 상태와 맞는지
  - `docs/README.md` — 문서 허브 설명이 정확한지
  - `docs/projects/README.md` — 진행 중/완료 프로젝트 목록이 실제 폴더와 일치하는지
  - 점검 결과를 항목별로 정리하고, 수정이 필요한 부분은 사용자 확인 후 반영
- 필요한 추가 정보가 있으면 사용자에게 질문

번호를 선택해주세요.
