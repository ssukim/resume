# 진행 중인 프로젝트

## 프로젝트 구조

각 프로젝트는 다음 폴더 구조를 따릅니다:

```
projects/{project-name}/
├── spec.md                    # 프로젝트 스펙 (목표, 범위, 기능 목록)
├── plan/
│   └── scenario.md            # PM 시나리오 (사용자 스토리, 우선순위)
├── design/
│   └── handoff.md             # 디자인 핸드오프
└── dev/
    └── frontend_spec.md       # FE 개발 스펙
```

## 프로세스 흐름

```
1. Spec 작성 → 2. Plan 시나리오 → 3. Design 핸드오프
                                         ↓
              4. Dev 스펙 작성 → 5. 구현 → 6. History로 이동
```

## 진행 중인 프로젝트

| 상태 | 프로젝트 | 설명 | 단계 |
|------|----------|------|------|
| 🟡 | [case-study-mdx](./case-study-mdx/spec.md) | 케이스 스터디 MDX 블로그화 | Plan |

### 블로그 시리즈: Claude Code 활용기

| 프로젝트 | 시리즈 | 상태 |
|----------|--------|------|
| [blog-mcp-super-tool](./blog-mcp-super-tool/) | #2 MCP로 Claude를 슈퍼 도구로 | ⏳ 예정 |
| [blog-dev-docs-sync](./blog-dev-docs-sync/) | #3 Git 커밋 → 문서 자동 최신화 | ⏳ 예정 |
| [blog-qa-automation](./blog-qa-automation/) | #4 Claude Code로 QA 자동화 | ⏳ 예정 |
| [blog-ai-project-management](./blog-ai-project-management/) | #5 AI로 프로젝트 관리하기 | ⏳ 예정 |
| [blog-auto-publishing](./blog-auto-publishing/) | #6 블로그 자동 발행 시스템 | ⏳ 예정 |

## 네이밍 규칙

- **폴더명**: `kebab-case` (예: `site-renewal`, `blog-setup`)
- **파일명**: `snake_case.md` (예: `frontend_spec.md`)
- **spec.md**: 프로젝트 루트에 위치, 프로젝트의 핵심 정의 문서
