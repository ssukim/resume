# JeongSu Kim — 개인 사이트 문서

> 이력서 + 기술 블로그 + 생각 정리 — 문서 허브

## 폴더 구조

```
docs/
├── projects/          # 진행 중인 프로젝트 (spec → plan → design → dev)
├── history/           # 완료된 프로젝트 + 플랫폼 변경 이력
├── templates/         # 문서 템플릿
└── README.md          # 이 파일
```

## 빠른 시작

### 새 프로젝트 시작

```bash
# 1. 프로젝트 폴더 생성
mkdir -p docs/projects/{project-name}/{plan,design,dev}

# 2. spec.md 작성 (템플릿 복사)
cp docs/templates/scenario.md docs/projects/{project-name}/plan/scenario.md

# 3. README.md 업데이트
# docs/projects/README.md에 프로젝트 추가
```

### 프로젝트 완료 시

```bash
# 1. history로 이동
mv docs/projects/{project-name} docs/history/projects/{project-name}

# 2. README 업데이트
# docs/projects/README.md에서 제거
# docs/history/README.md에 추가
```

## 프로세스 흐름

```
Spec → Plan → Design → Dev → History
```

| 단계 | 파일 | 담당 |
|------|------|------|
| Spec | `spec.md` | PM |
| Plan | `plan/scenario.md` | PM |
| Design | `design/handoff.md` | Designer |
| Dev | `dev/frontend_spec.md` | Frontend |

## 상태 아이콘

| 아이콘 | 의미 |
|--------|------|
| ✅ | 완료 |
| 🟡 | 진행 중 |
| 🔴 | 보류 / 블로커 |

## 기술 스택

- **Framework**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind 4, shadcn/ui
- **Content**: MDX (블로그 & 생각 정리)
- **Icons**: Lucide React
- **Deploy**: Vercel (예정)

## 사이트 구성

| 섹션 | 설명 |
|------|------|
| **이력서** | 경력, 프로젝트, 스킬, 케이스 스터디 |
| **기술 블로그** | 개발 경험, 기술 아티클 (MDX) |
| **생각 정리** | 에세이, 회고, 아이디어 노트 (MDX) |

## 관련 링크

- [진행 중인 프로젝트](./projects/README.md)
- [로드맵](./projects/roadmap.md)
- [완료된 프로젝트](./history/README.md)
