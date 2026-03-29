import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  GraduationCap,
  FolderOpen,
  Heart,
  Award,
  ExternalLink,
  User,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────

const careers = [
  {
    company: "디지털로그",
    url: "https://conma.ai",
    role: "Product Engineer",
    period: "2024.08 - 현재",
  },
  {
    company: "워시스왓",
    url: "https://www.getwashswat.com/",
    role: "Frontend Developer",
    period: "2022.10 - 2024.08",
  },
  {
    company: "코레토",
    url: "https://insideweb.kr/",
    role: "Frontend Developer",
    period: "2021.06 - 2022.10",
  },
  {
    company: "뉴젠솔루션",
    url: "https://newzensolution.co.kr/",
    role: "C++ Developer, Frontend Developer",
    period: "2020.03 - 2021.03",
  },
  {
    company: "오픈오브젝트",
    url: "http://www.openobject.net/",
    role: "C, C++ Developer",
    period: "2017.11 - 2019.11",
  },
];

const projects = [
  {
    company: "디지털로그",
    companyDescription: "인스타그램 마케팅 운영 과정의 반복 업무를 자동화하는 SNS 마케팅 플랫폼",
    items: [
      {
        name: "Conma",
        url: "https://conma.ai/",
        description: "인스타그램 댓글·DM 자동화·리포트 통합 관리 웹",
        tech: ["Next.js 16", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI", "AWS EKS", "Docker", "GitHub Actions"],
        subProjects: [
          {
            name: "Conma 플랫폼",
            period: "2025.09 ~ 현재",
            problem: "인플루언서, 브랜드, 마케팅 대행사가 Instagram 캠페인을 운영하는 과정에서 댓글 관리, DM 응대, 성과 확인 등이 수작업 중심으로 이루어져 반복 업무와 운영 비효율이 누적되는 문제",
            role: "Claude Code 기반 AI 개발 워크플로를 구축하고, 기획부터 프론트엔드 설계·인프라까지 제품 전반을 리드",
            contributions: [
              "Claude Code 기반 AI 개발 생태계 구축 — CLAUDE.md 계층, 커스텀 커맨드·Agent·Rules·Skills 설계로 팀원 누구나 기획→개발→QA를 AI와 함께 수행할 수 있는 워크플로 구축",
              "마케터의 반복 업무(DM 응대·댓글 관리·추첨)를 자동화하고, 4개 국어 지원으로 글로벌 사용자 온보딩 기반 마련",
              "블로그 플랫폼 구축(TipTap + Supabase, ISR) — JSON-LD·AI 봇 허용 등 SEO 최적화로 AI 검색엔진 노출 확보",
              "AWS EKS 개발·운영 환경 분리, 모니터링(Prometheus+Grafana+Loki), 도메인 무중단 마이그레이션",
            ],
            achievements: [
              "플랫폼 출시 후 누적 가입 유저 650명 확보",
              "Claude Code 생태계를 팀 공용 워크플로로 정착, 제품 개발·출시 속도 향상",
            ],
          },
        ],
      },
      {
        name: "Biz Calendar",
        description: "마케팅 조직의 캠페인, 콘텐츠, 태스크, 일정을 한 워크스페이스에서 통합 관리 웹",
        serviceClosed: true,
        tech: ["Next.js 15", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI", "AWS EKS", "Docker", "GitHub Actions"],
        subProjects: [
          {
            name: "BizCalendar 플랫폼",
            period: "2024.08 ~ 2025.07",
            problem: "마케팅 팀이 개인 엑셀로 캠페인 일정을 관리해 팀 간 일정 충돌과 공유 누락이 반복되는 환경",
            role: "기획 단계부터 참여해 캘린더 뷰 체계 설계, 결제·인증 시스템 구현, GS 인증까지 프론트엔드 전반을 리드",
            contributions: [
              "사용자 워크플로 분석 기반 7개 캘린더 뷰 체계 설계로, 팀 규모·업무 성격에 맞는 일정 관리 경험 제공",
              "직관적 일정 조작 UX(DnD 이동·리사이즈·크로스 뷰)로 기존 클릭 기반 대비 일정 편집 동선 단축",
              "결제·인증·GS 인증 등 서비스 상용화에 필요한 전체 인프라 구축",
            ],
            achievements: [
              "BizCalendar MVP를 기반으로 TIPS 투자 유치 성공 (정부 기술창업 프로그램)",
              "엑셀 기반 일정 관리를 팀 단위 마케팅 캘린더 SaaS로 전환, 3개 협업사 파일럿 운영 / GS 1등급 인증 획득",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "세탁특공대",
    companyDescription: "고객의 세탁물을 수거, 세탁, 배송을 해주는 비대면 세탁 서비스",
    items: [
      {
        name: "Micro Frontend 기반 Admin",
        description: "레거시 Admin 시스템을 Micro Frontend 개념을 적용한 멀티 레포 구조로 재설계하여, 도메인 단위로 독립적인 개발, 배포 가능한 Admin 웹",
        tech: ["Next.js 14", "TypeScript", "Zustand", "SWR", "Mantine UI"],
        subProjects: [
          {
            name: "Micro Frontends 기반 Admin 플랫폼 구조 전환",
            period: "2023.12 ~ 2024.07",
            problem: "단일 레거시 Admin 구조로 인해 기능 확장, 도메인별 독립 개발 및 운영이 어려운 상황",
            role: "프론트엔드 리드로 참여해 스쿼드 단위 협업 환경에서 Micro Frontends 기반 Admin 구조 전환을 설계, 구현",
            contributions: [
              "레거시 Admin 분석을 기반으로 Micro Frontend 아키텍처 관점의 신규 Admin 구조 설계",
              "Admin 영역을 3개의 도메인 단위 프론트엔드 애플리케이션으로 분리하여 독립 개발, 배포, 운영 가능한 구조 구축",
              "레거시 Admin 기존 10개 페이지 마이그레이션",
              "신규 Admin 페이지 9개 개발",
            ],
            achievements: ["CS, Factory 등 약 70명 규모의 실사용 조직을 신규 도메인 Admin 구조로 성공적으로 전환"],
          },
        ],
      },
      {
        name: "입고 Admin",
        description: "고객이 맡긴 세탁물을 입고 단계 Admin 웹",
        tech: ["Next.js 13", "TypeScript", "Zustand", "SWR"],
        subProjects: [
          {
            name: "입고 Admin 플랫폼 리뉴얼",
            period: "2023.03 ~ 2023.06",
            problem: "기존 입고 시스템의 복잡한 프로세스로 인해 처리 속도가 느리고 작업자 생산성 개선에 한계가 있는 상황",
            role: "스쿼드 프론트엔드 개발자로 입고 Admin 전면 리뉴얼을 담당",
            contributions: [
              "기존 입고 프로세스를 신규 Admin 플랫폼으로 전면 리뉴얼, 전체 입고 프로세스 전환 적용",
              "신규 플랫폼 기반으로 PO와 협업하며 기능 고도화",
            ],
            achievements: [
              "12PCS 처리 시간 3분 5초 → 2분 57초 단축, PCS당 평균 처리 속도 15.4초 → 14.7초 개선",
            ],
          },
          {
            name: "입고 프로세스 고도화 — 휴먼 에러 방지 및 자동화",
            period: "2023.07 ~ 2024.02",
            problem: "작업자 실수로 고객 요청사항 누락·매칭 오류가 반복되고, 데미지 발생 시 사후 대응으로 고객 불만이 지속되는 구조",
            role: "스쿼드 프론트엔드 개발자로 요청사항 관리·자동 매칭·사전 안내 시스템을 설계, 구현",
            contributions: [
              "고객 요청사항 카테고리 체계 설계 및 휴먼 에러 방지 프로세스 구축",
              "요청사항 자동 매칭 시스템 도입으로 수작업 매칭 제거",
              "데미지 사전 안내 프로세스로 사후 대응 → 사전 예방 구조 전환",
            ],
            achievements: [
              "유료 요청사항 누락률 0.19% → 0.12%, 추가 요청 반영률 56.16% → 93.28% 개선, 고객 불만 10% 감소",
            ],
          },
        ],
      },
      {
        name: "Agent App",
        description: "세탁 서비스를 배송, 관리를 할 수 있는 앱 (iOS, Android)",
        tech: ["React Native", "JavaScript"],
        subProjects: [
          {
            name: "출고 검증 자동화 — 바코드 스캔 및 오적재 방지",
            period: "2023.07 ~ 2023.12",
            problem: "출고 과정이 수기 입력 기반으로 휴먼 에러가 빈번하고, 의류 오적재 이슈가 지속 발생",
            role: "스쿼드 단위 협업을 통해 스캔 기반 출고 검증 프론트엔드 기능 설계 및 구현",
            contributions: [
              "QR/바코드 스캔 기반 패키징 처리로 수기 입력 프로세스 제거",
              "출고 전 스캔 검증 단계 도입으로 오적재 사전 방지 구조 확보",
            ],
            achievements: [
              "수기 입력 휴먼 에러 방지 및 출고 오류 감소로 고객 클레임·재작업 비용 절감",
            ],
          },
        ],
      },
      {
        name: "User App",
        description: "세탁 서비스를 신청, 결제를 할 수 있는 앱 (iOS, Android)",
        tech: ["React Native", "TypeScript", "Recoil", "React-Query", "Styled Components"],
        subProjects: [
          {
            name: "모바일 앱 리뉴얼",
            period: "2022.11 ~ 2023.03",
            problem: "기존 모바일 앱 구조가 복잡하고 확장성이 낮아 기능 추가 및 안정적인 운영에 한계. 딥링크·푸시 로직이 분산되어 있어 유지보수 및 운영 효율 저하",
            role: "프론트엔드 개발자(팀원)로 모바일 앱 리뉴얼 작업에 참여. 딥링크·푸시 등 앱 핵심 기능 구현 담당",
            contributions: [
              "앱 전반 리뉴얼 및 안정화, iOS / Android 배포 심사 대응 후 2023.02.13 정식 런칭",
              "분산되어 있던 딥링크·푸시 로직을 단일 모듈로 통합, 마케터가 Admin에서 직접 운영 가능한 구조로 전환",
              "Server Driven UI 기반 동적 라우팅으로 앱 업데이트 없이 화면 구성 변경 가능한 구조 확보",
            ],
            achievements: [
              "마케터가 직접 사용할 수 있는 Admin 기반 딥링크·앱 푸시 요청 → 처리 → 전송 파이프라인 구축",
              "약 60개 이상 딥링크·푸시 시나리오를 안정적으로 운영 가능한 구조 확보",
            ],
          },
          {
            name: "세특패스 도입",
            period: "2023.05 ~ 2023.06",
            problem: "기존 자체 구독 서비스 구조가 기능 대비 운영 비용이 과도하게 발생하는 상황",
            role: "프론트엔드 개발자(팀원)로 구독 처리 페이지 개발 담당",
            contributions: ["세특패스 도입에 따른 구독 가입, 설정, 해지 페이지 프론트엔드 개발"],
            achievements: [
              "신규 구독 처리 페이지 도입 이후 약 1개월 내 30% 수준의 구독 전환 성공",
              "복잡했던 기존 구독 흐름을 개선하여 실제 사용자 전환율 향상에 기여",
            ],
          },
        ],
      },
      {
        name: "마케팅 페이지",
        description: "고객이 유저앱으로 볼 수 있는 제휴협의, 이벤트 웹 페이지",
        tech: ["Next.js 12", "React", "JavaScript", "Styled Components"],
        subProjects: [
          {
            name: "마케팅 제휴·이벤트 웹뷰 페이지 개발",
            period: "2023.02 ~ 2023.09",
            role: "마케팅 제휴 및 이벤트용 웹뷰 페이지 프론트엔드 개발 담당",
            contributions: [
              "마케팅 요청에 따라 제휴사(야놀자, 배달의민족 등) 프로모션 페이지 개발",
              "세특 자체 이벤트 진행을 위한 웹뷰 페이지 개발 및 앱 내 노출 연동",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "코레토",
    companyDescription: "클라이언트의 비즈니스 성격에 맞게 반응형 웹, 모바일 앱(iOS, Android)을 제작",
    items: [
      {
        name: "탱고픽 App · Web",
        description: "가상자산 투자 포트폴리오 및 투자전략 공유 플랫폼 (외주)",
        tech: ["React Native", "React", "TypeScript", "Jotai"],
        subProjects: [
          {
            name: "탱고픽 App v3.2 개발 및 Web 유지보수",
            period: "2022.04 ~ 2022.10",
            problem: "앱 신규 버전 출시와 웹 서비스 안정 운영이 동시에 요구되는 상황",
            role: "프론트엔드 개발자로서 App v3.2 개발, 외부 SDK 연동, Web 유지보수 담당",
            contributions: [
              "앱 v3.2 기능 개발 및 ebest SDK Native Android 연동",
              "웹 서비스 유지보수 및 신규 기획 페이지 개발",
            ],
          },
        ],
      },
      {
        name: "뭄무 · 포스트팩토리 2.0",
        url: "https://www.mummu.kr/",
        description: "외부 클라이언트 대상 Mono Repo 기반 멀티 사이트 개발 (관리자/고객사/홈/쇼핑몰)",
        tech: ["Next.js 12", "TypeScript", "Mobx", "Styled Components", "Lerna", "Storybook"],
        subProjects: [
          {
            name: "Mono Repo 기반 멀티 사이트 개발",
            period: "2021.07 ~ 2022.03",
            problem: "외부 클라이언트 요청에 따라 복수의 사이트를 동시에 개발·운영해야 하는 환경",
            role: "프론트엔드 개발자(팀원)로 2개 프로젝트에 걸쳐 멀티 사이트 개발 참여",
            contributions: [
              "Lerna 기반 Mono Repo 구조로 관리자/고객사/홈/쇼핑몰 등 멀티 사이트 개발",
              "Atomic Design + Storybook 기반 공통 컴포넌트 설계 및 관리",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "뉴젠솔루션",
    companyDescription: "개인 세무회계사에서 가장 많이 사용하는 ERP솔루션 업체",
    items: [
      {
        name: "ERP 솔루션 개발",
        description: "GS 인증 대응 웹 페이지 개발 및 ERP 리포트 연동",
        tech: ["React", "JavaScript", "C++", "MFC"],
        subProjects: [
          {
            name: "GS 인증 대응 및 ERP 리포트 연동",
            period: "2020.04 ~ 2020.12",
            role: "프론트엔드·C++ 개발자로서 GS 인증 페이지 개발 및 ERP 인쇄 기능 연동 담당",
            contributions: [
              "GS 인증 요구사항에 맞춘 테스트 웹 페이지 개발 및 인증 기관 제공",
              "ERP 시스템의 외부 인쇄 솔루션 의존을 자사 솔루션으로 전환",
            ],
            achievements: ["GS 1등급 인증 획득"],
          },
        ],
      },
    ],
  },
  {
    company: "오픈오브젝트",
    companyDescription: "대기업과 협업을 통해서 프로젝트를 진행하는 개발 에이전시",
    items: [
      {
        name: "SKB 셋톱박스 · 해군 시스템",
        description: "SK BroadBand 셋톱박스 서비스 화면 개발 및 해군 군수현황 관리 시스템 개발",
        tech: ["C++", "Lua", "JavaScript", "jQuery"],
        subProjects: [
          {
            name: "셋톱박스 v5.0 및 군수현황관리 시스템 개발",
            period: "2017.11 ~ 2019.11",
            role: "STB 개발자 및 프론트엔드 개발자로 대기업 협업 프로젝트 참여",
            contributions: [
              "SK BroadBand 셋톱박스 v5.0 설정·광고·키즈 VOD 화면 개발 (약 100만 사용자 대상)",
              "해군 군수현황 관리 시스템의 조회·등록·통계 화면 개발",
            ],
          },
        ],
      },
    ],
  },
];

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "React Native"] },
  { category: "State Management", items: ["Zustand", "SWR", "Jotai"] },
  { category: "Styling", items: ["TailwindCSS", "Shadcn UI"] },
  { category: "AI Tools", items: ["Claude Code", "Cursor"] },
  { category: "DevOps", items: ["Docker", "AWS EKS", "GitHub Actions"] },
];


// ─── Types ────────────────────────────────────────────────────

interface SubProject {
  name: string;
  period: string;
  problem?: string;
  role: string;
  contributions: string[];
  achievements?: string[];
}

interface ProjectItem {
  name: string;
  url?: string;
  description: string;
  serviceClosed?: boolean;
  tech: string[];
  subProjects: SubProject[];
}

// ─── Resume Components ───────────────────────────────────────

function SubProjectCard({ subProject }: { subProject: SubProject }) {
  return (
    <div className="border-l-2 border-primary/30 rounded-lg bg-muted/30 p-4 transition-colors hover:border-primary/50">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h6 className="font-semibold text-base text-foreground">{subProject.name}</h6>
        <Badge variant="outline" className="w-fit text-xs font-medium shrink-0">
          {subProject.period}
        </Badge>
      </div>

      <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
        {subProject.problem && (
          <div className="mb-3">
            <span className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5 block">
              문제 정의
            </span>
            <p className="pl-5">{subProject.problem}</p>
          </div>
        )}

        <div className="mb-3">
          <span className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5 block">
            주요 역할
          </span>
          <p className="pl-5">{subProject.role}</p>
        </div>

        <div className="mb-3">
          <span className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5 block">
            기여 범위
          </span>
          <div className="pl-5 space-y-1 mt-1">
            {subProject.contributions.map((contribution, i) => (
              <p key={i}>{contribution}</p>
            ))}
          </div>
        </div>

        {subProject.achievements && subProject.achievements.length > 0 && (
          <div className="mb-3">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5 block">
              성과
            </span>
            <div className="pl-5 space-y-1 mt-1">
              {subProject.achievements.map((achievement, i) => {
                const formatAchievement = (text: string) => {
                  let formatted = text.replace(
                    /(\d+\.?\d*[%초분]?\s*→\s*\d+\.?\d*[%초분초]?)/g,
                    '<strong>$1</strong>'
                  );
                  formatted = formatted.replace(
                    /(\d+\.?\d*[만명건개%PCS주간]+)/g,
                    '<strong>$1</strong>'
                  );
                  formatted = formatted.replace(
                    /(약\s+\d+[만명건개%PCS주간]+)/g,
                    '<strong>$1</strong>'
                  );
                  formatted = formatted.replace(
                    /(크리티컬 휴먼 에러|마케터가 직접 사용할 수 있는 Admin|최근 2주간 로그 조회 가능 환경 확보)/g,
                    '<strong>$1</strong>'
                  );
                  formatted = formatted.replace(
                    /(\d+% 수준의)/g,
                    '<strong>$1</strong>'
                  );
                  formatted = formatted.replace(
                    /(\d+% 고객 불만 감소)/g,
                    '<strong>$1</strong>'
                  );
                  return formatted;
                };

                return (
                  <p
                    key={i}
                    className="text-foreground/80"
                    dangerouslySetInnerHTML={{ __html: formatAchievement(achievement) }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="group border-l-4 border-l-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <CardTitle className="text-base flex flex-wrap items-center gap-2 sm:text-lg">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1.5 transition-all hover:gap-2"
                >
                  {project.name}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                </a>
              ) : (
                project.name
              )}
              {project.serviceClosed && (
                <Badge variant="destructive" className="text-xs font-medium">
                  Service Closed
                </Badge>
              )}
            </CardTitle>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs font-medium">
              {t}
            </Badge>
          ))}
        </div>
        <div className="space-y-5">
          {project.subProjects.map((subProject, i) => (
            <SubProjectCard key={i} subProject={subProject} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Resume Content ──────────────────────────────────────────

function ResumeContent() {
  return (
    <>
      {/* Introduction */}
      <section className="mb-16">
        <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold sm:text-2xl">
          <User className="h-5 w-5 text-primary" /> 자기소개
        </h3>
        <div className="space-y-4 text-foreground/80 leading-relaxed sm:text-base">
          <p className="pl-1">
            6년차 프론트엔드 엔지니어로, 유저의 문제를 파악하고 프로덕트로
            만들어가는 데 집중합니다. SaaS 플랫폼 기획부터 출시까지 리드한
            경험이 있으며, Claude Code 기반 AI 워크플로로 개발 사이클을 빠르게
            반복합니다. 물류 현장의 생산성 개선부터 마케팅 자동화 플랫폼까지,
            실사용자의 업무를 실질적으로 바꾸는 제품을 만들어왔습니다.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Career */}
      <section className="mb-16">
        <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold sm:text-2xl">
          <Briefcase className="h-5 w-5 text-primary" /> 경력
        </h3>
        <div className="space-y-3">
          {careers.map((career) => (
            <Card
              key={career.company}
              className="group border-l-4 border-l-primary transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="py-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <a
                      href={career.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-primary transition-all hover:gap-2 hover:underline"
                    >
                      {career.company}
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {career.role}
                    </p>
                  </div>
                  <Badge variant="secondary" className="w-fit shrink-0 font-medium">
                    {career.period}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Projects */}
      <section className="mb-16">
        <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold sm:text-2xl">
          <FolderOpen className="h-5 w-5 text-primary" /> 프로젝트
        </h3>
        <div className="space-y-12">
          {projects.map((group) => (
            <div key={group.company}>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary flex items-center gap-2 sm:text-xl">
                  {group.company}
                  <span className="text-lg">💼</span>
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {group.companyDescription}
                </p>
              </div>
              <div className="space-y-5">
                {group.items.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Skills */}
      <section className="mb-16">
        <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold sm:text-xl">
          <Heart className="h-5 w-5 text-primary" /> Favorite Skills
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.category} className="transition-all hover:shadow-md hover:shadow-primary/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {skill.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs font-medium">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Education & ETC */}
      <section className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold sm:text-xl">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </h3>
          <Card className="transition-all hover:shadow-md hover:shadow-primary/5">
            <CardContent className="py-5">
              <p className="font-semibold text-base">서일대학교</p>
              <p className="mt-1 text-sm text-muted-foreground">
                컴퓨터공학 학사 졸업
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold sm:text-xl">
            <Award className="h-5 w-5 text-primary" /> ETC
          </h3>
          <Card className="transition-all hover:shadow-md hover:shadow-primary/5">
            <CardContent className="space-y-3 py-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">육군 병장 만기 전역</p>
                <Badge variant="outline" className="text-xs font-medium">
                  2011.06 - 2013.03
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">정보처리산업기사</p>
                <Badge variant="outline" className="text-xs font-medium">
                  2017.05.26
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

// ─── Main Page ───────────────────────────────────────────────

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
      <ResumeContent />

      {/* Footer */}
      <footer className="mt-20 pt-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; 2026 JeongSu Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}
