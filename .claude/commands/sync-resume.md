---
description: "외부 이력서 플랫폼(원티드/잡코리아/LinkedIn)을 Resume 사이트 최신 내용으로 동기화"
---

Resume 사이트(`src/app/page.tsx`)의 최신 이력서 데이터를 외부 이력서 플랫폼에 동기화합니다.

## 플랫폼 선택

사용자에게 동기화할 플랫폼을 선택하도록 합니다:

1. **원티드** — wanted.co.kr 이력서 업데이트
2. **잡코리아** — jobkorea.co.kr 이력서 업데이트
3. **LinkedIn** — linkedin.com 경력 업데이트
4. **전체** — 원티드 + 잡코리아 + LinkedIn 모두 업데이트

## 플랫폼별 URL 및 편집 방식

### 원티드
- 편집 URL: `https://www.wanted.co.kr/cv/fFlXVE8GAwUGDwYFSEc=?focus=career&from=profile`
- 텍스트박스: 각 회사 섹션 아래 "주요 성과" 텍스트박스 (placeholder: "업무 경험을 성과 기반으로 작성해 보세요.")
- 저장: "임시 저장" 버튼 클릭
- 회사별 텍스트박스는 `projects[].items[]` 단위 (프로젝트별 1개)

### 잡코리아
- 편집 URL: `https://www.jobkorea.co.kr/User/Resume/Edit?RNo=30202224`
- 텍스트박스: 각 회사 경력의 "담당업무" 텍스트박스 (placeholder: "담당하신 업무와 성과에 대해 간단명료하게 적어주세요.")
- 저장: "이력서저장" 버튼 클릭
- 회사별 텍스트박스 1개에 모든 프로젝트를 `---` 구분자로 이어서 작성

### LinkedIn
- 경력 상세 URL: `https://www.linkedin.com/in/jeongsu-kim-276047253/details/experience/`
- 편집: 각 회사 옆 "수정" 링크 클릭 → 모달 내 "설명" 텍스트박스 수정
- 저장: 모달 내 "저장" 버튼 클릭
- 제목(포지션)도 이력서와 동기화 (예: Product Engineer)
- 설명은 LinkedIn 권장 형식: 1줄 회사 소개 + 3~5개 bullet point + Tech 1줄 (간결하게)
- fill_form으로 입력 (slowly 옵션 사용 시 타임아웃 발생하므로 fill 사용)
- 제목 변경 후 자동완성 드롭다운이 저장 버튼을 가릴 수 있으므로, 다른 필드 클릭 후 저장
- 회사별 편집 폼 ID:
  - Digitalog: 2719368064
  - WASHSWAT: 2120151580
  - Corretto: 2051605896
  - NewZen Solution: 2173040760
  - Openobject: 2173045266

## 사전 조건

- Playwright MCP가 `--browser chrome` 모드로 설정되어 있어야 합니다 (시스템 Chrome 사용, CDP 불필요)
- MCP 설정 확인: `claude mcp list` → playwright 서버가 `npx @playwright/mcp@latest --browser chrome`으로 등록되어 있어야 함
- 설정이 안 되어 있으면: `claude mcp add playwright -- npx @playwright/mcp@latest --browser chrome`
- 로그인이 필요하면 사용자에게 로그인 요청 후 대기

## 텍스트 변환 규칙

Resume 사이트의 프로젝트 데이터를 텍스트 포맷으로 변환할 때:

```
사용 기술: {tech 배열을 ", "로 join}

{subProject.name} ({subProject.period})

[문제 정의]
{subProject.problem}

[주요 역할]
{subProject.role}

[기여 범위]
· {contributions[0]}
· {contributions[1]}
...

[성과]
· {achievements[0]}
· {achievements[1]}
...
```

- 같은 프로젝트(items) 아래 여러 subProject가 있으면 `---`로 구분하여 이어서 작성
- problem이 없는 subProject는 [문제 정의] 섹션 생략
- achievements가 없는 subProject는 [성과] 섹션 생략

## 회사-프로젝트 매칭

- 디지털로그: Conma, BizCalendar
- 세탁특공대: MFE Admin, 입고 Admin, Agent App, User App, 마케팅 페이지
- 코레토: 탱고픽 App, 탱고픽 Web, 뭄무, 포스트팩토리
- 뉴젠솔루션: 리포트 테스트 웹, ERP 리포트 연동
- 오픈오브젝트: 해군 잠수함, SKB STB

## 업데이트 방식

1. 스냅샷에서 해당 텍스트박스의 ref를 찾습니다
2. 텍스트박스를 클릭하여 활성화
3. `Meta+a` → `Backspace`로 기존 내용 삭제
4. `keyboard.type()`으로 새 내용 입력 (delay: 3~5)
5. 모든 텍스트박스 업데이트 완료 후 사용자에게 확인 요청
6. 확인되면 저장 버튼 클릭

## 주의사항

- 원티드 텍스트박스는 5000자 제한이 있습니다. 초과 시 사용자에게 알림
- 변경 전 현재 내용과 Resume 사이트 내용을 비교하여 **실제로 변경된 프로젝트만** 업데이트합니다
- 전체 업데이트가 아닌 특정 프로젝트만 업데이트하고 싶으면 사용자에게 확인
