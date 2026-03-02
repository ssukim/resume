# 블로그 시리즈: Claude Code 활용기

## 개요

| 항목 | 내용 |
|------|------|
| 상태 | 🟡 진행 중 |
| 담당 | @jeongsu |
| 태그 | AI |

## 시리즈 목록

| # | slug | 제목 | 읽기 시간 | 상태 |
|---|------|------|----------|------|
| 1 | `claude-md-ai-onboarding` | CLAUDE.md 하나로 AI를 팀원으로 만든 방법 | 7분 | ✅ 발행 |
| 2 | `mcp-super-tool` | MCP로 Claude를 슈퍼 도구로 만들기 | 6분 | ⏳ 예정 |
| 3 | `dev-docs-auto-sync` | Git 커밋 → 개발 문서 자동 최신화 | 5분 | ⏳ 예정 |
| 4 | `claude-code-qa-automation` | Claude Code로 QA 자동화 구축하기 | 7분 | ⏳ 예정 |
| 5 | `ai-project-management` | 기획→디자인→개발→QA, AI로 프로젝트 관리하기 | 8분 | ⏳ 예정 |
| 6 | `blog-auto-publishing` | Claude Code로 블로그 자동 발행 시스템 만들기 | 5분 | ⏳ 예정 |

## 각 포스트 핵심 내용

### #2 MCP로 Claude를 슈퍼 도구로 만들기
- Figma MCP: 디자인 → 코드 변환, 스크린샷, 메타데이터 조회
- Atlassian MCP: Confluence 문서 검색, Jira 이슈 조회/생성
- Playwright MCP: 브라우저 자동화, QA, 블로그 발행
- 실제 팀 프로젝트에서의 MCP 설정 방법과 활용 사례

### #3 Git 커밋 → 개발 문서 자동 최신화
- "개발자료 최신화 해줘" 한 마디로 동작하는 워크플로
- 서브모듈 커밋을 scope 기반으로 자동 분류
- frontend_log.md, backend_log.md 자동 업데이트
- 변경 파일 분석으로 코드 리뷰 문서 자동 생성

### #4 Claude Code로 QA 자동화 구축하기
- Playwright MCP + 체크리스트 기반 QA 자동화
- "QA 해줘" 명령어로 전체 시나리오 자동 실행
- 각 항목별 스크린샷 촬영 → 결과 문서화
- 버그 발견 시 자동 분류 및 목록 업데이트

### #5 AI로 프로젝트 관리하기
- 팀 프로젝트의 전체 프로세스 흐름 소개
- 미팅 → 기획 → 디자인 → 개발 → QA → 배포 → 아카이빙
- 각 단계에서 Claude가 수행하는 역할
- 피처 생성 자동화: 미팅 문서 → 프로젝트 폴더 자동 생성

### #6 블로그 자동 발행 시스템 만들기
- "블로그 써줘" 한 마디로 작성부터 발행까지
- Playwright MCP로 DEV 환경 폼 자동 입력
- 사용자 확인 후 PROD 발행
- 실제 팀 블로그 발행 사례
