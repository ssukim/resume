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
  Rocket,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────

const careers = [
  {
    company: "디지털로그",
    url: "https://conma.ai",
    role: "Product Engineer (Full-stack)",
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
        techGroups: [
          { label: "FE", items: ["Next.js 16", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI", "TipTap"] },
          { label: "BE", items: ["NestJS", "MongoDB", "Supabase", "Python"] },
          { label: "Infra", items: ["AWS EKS", "ECS Fargate", "SQS", "Athena", "Prometheus", "Grafana", "Loki", "Docker", "GitHub Actions"] },
          { label: "AI", items: ["Claude Code", "Anthropic API", "Claude Haiku 4.5", "Batch API", "Prompt Caching"] },
        ],
        subProjects: [
          {
            name: "Conma 플랫폼",
            period: "2025.09 ~ 현재",
            problem: "신규 플랫폼을 소수 인원으로 빠르게 만들어야 해서, 개발 환경·인프라·협업 방식을 처음부터 세워야 했던 상황",
            role: "프론트엔드 초기 설계와 AWS 인프라 구축을 맡고, AI 기반 개발 워크플로를 설계",
            contributions: [
              "프로젝트 구조·디자인 시스템·인증 기반을 세팅해 팀 개발 환경 마련",
              "AWS EKS 기반 개발·운영 환경 분리와 모니터링(Prometheus+Grafana+Loki) 체계 구축",
              "회의 → 시나리오 → 개발로 이어지는 문서 규격과 Claude Code 자동화로, 기획부터 배포까지 1인 단위로 완주하는 개발 사이클 구축",
            ],
            achievements: [
              "시작 11개월 만에 유저 1,670명이 워크스페이스 818곳에서 인스타그램 계정 1,038곳을 연동, 누적 1,373만 건의 댓글 데이터를 처리하는 플랫폼으로 성장",
              "2026.05 유료 플랜 출시 후 3개월 만에 유료 고객 63명·워크스페이스 64곳 확보, 누적 결제 331건 발생",
              "DNS·인증서·OAuth까지 얽힌 서비스 도메인 이전을 개발·운영 환경 모두 다운타임 0으로 완료",
            ],
          },
          {
            name: "자동 DM",
            period: "2026.02 ~ 2026.03",
            problem: "인플루언서·브랜드가 게시물 댓글에 일일이 반응해 DM을 보내야 해서, 캠페인 규모가 커질수록 응대가 물리적으로 불가능해지는 상황",
            role: "기능 리드로 기획·디자인 리뷰·프론트엔드 개발·QA·배포를 담당",
            contributions: [
              "게시물 선택 → 발송 조건 → 메시지 구성의 3단계 생성 플로우 설계",
              "키워드 댓글에 자동 DM, 팔로우 인증 후 링크 전달까지 구현",
              "여러 자동화가 한 게시물에 겹칠 때의 충돌 규칙을 정의",
            ],
            achievements: [
              "유료 워크스페이스 64곳 중 46곳(72%)이 자동 DM을 실제 운영 — 누적 자동 DM 대화 7.4만 건, 발송 21만 건",
              "사내에서 '이 고객이 서비스를 실제로 쓰고 있는가'를 판단하는 기준 지표로 채택될 만큼 핵심 기능으로 자리잡음",
            ],
          },
          {
            name: "인사이트 v2 — 지표 재정의와 자체 애널리틱스",
            period: "2026.03 ~ 2026.06",
            problem: "성과 데이터가 여러 수집 경로로 흩어져 같은 지표가 화면마다 다르게 보이고, 시중 분석 도구로는 우리 서비스에만 있는 지표(요금 소모량, 단계별 이탈)를 볼 수 없던 상황",
            role: "프로젝트 리더로 기획·지표 설계를 주도하고 프론트엔드·백엔드 구현에 참여. 사내 분석 도구는 단독 설계·구현 (NestJS + Next.js)",
            contributions: [
              "흩어져 있던 데이터 수집 경로를 인스타그램 공식 API 하나로 통합",
              "유저가 자기 계정 성과를 스스로 해석할 수 있는 분석 화면으로 재설계",
              "유저 행동 기록 기반 사내 애널리틱스를 직접 구축, 탭 전환·기간 변경 등 실사용 측정까지 연결",
            ],
            achievements: [
              "'몇 명이 봤나'는 부풀려진 숫자임을 확인하고, '실제로 조작했나·다시 왔나'로 활성 지표를 재정의",
              "분석 화면 방문자 484명 중 247명(51%)이 기간 변경·탭 전환 등 실제 조작까지 이어짐, 수집 경로 통합으로 데이터 불일치 0건",
              "분석 도구를 구매하지 않고 월 $1 미만(S3+Athena 실비)으로 운영하며 이후 리포트 프로젝트의 KPI 측정 기반으로 활용",
            ],
          },
          {
            name: "리포트 자동 생성 — LLM 파이프라인",
            period: "2026.05 ~ 현재",
            problem: "고객에게 보내는 주간·월간 리포트가 사무실 PC가 켜져 있어야만 나갔고, 리포트의 해설 문장을 AI가 쓰는 데 계정당 2분씩 걸려 계정이 늘수록 생성 시간이 그대로 늘어나던 상황",
            role: "데이터 수집부터 AI 해설 작성, 자동 발송까지 리포트 생성 전 과정을 단독 설계·구현",
            contributions: [
              "개발 중에는 상위 모델(Claude Opus)에 파이프라인 감독을 맡겨 오류 유형을 찾아내고, 그 판단을 결정론 코드와 검증 게이트로 옮겨 운영은 소형 모델(Claude Haiku 4.5) 하나로 완주하게 만듦",
              "실시간성이 필요 없는 배치 특성을 이용해 요청을 묶어 보내고 공통 지시문을 캐싱해 건당 단가를 낮춤",
              "잘못된 데이터가 문장으로 만들어지기 전에 걸러내고, 생성된 문장은 원본 수치와 다시 대조하는 검증 단계를 앞뒤에 배치",
              "AI가 게시물 캡션만 읽으면 내용을 잘못 이해하는 걸 발견하고, 영상·이미지까지 직접 보게 해 정확도를 높임",
              "PC에서 수동으로 돌리던 생성을 클라우드로 옮겨 매일 정해진 시각에 자동 실행하고, 유저가 기간을 골라 요청하면 대기열에 쌓아 순서대로 처리 — 요금 차감·예외 상황까지 자동 반영",
            ],
            achievements: [
              "매일 새벽 370여 개 계정의 데이터를 자동 수집·가공하고, 유료·체험 90개 계정에 주간·월간 리포트를 자동 발행 — 누적 397건",
              "유저 73명이 요청한 온디맨드 리포트 484건을 자동 처리 — 계정당 2분씩 쌓여 1시간을 넘던 해설 작성을 요청 후 평균 2분 내 완성으로 단축",
              "생성 가능한 요청 기준 성공률 99.5%, 시스템 오류는 484건 중 2건 — 나머지는 '해당 기간에 게시물이 없다'를 유저에게 안내하고 요금을 차감하지 않도록 처리",
            ],
          },
        ],
      },
      {
        name: "Biz Calendar",
        description: "마케팅 조직의 캠페인, 콘텐츠, 태스크, 일정을 한 워크스페이스에서 통합 관리 웹",
        serviceClosed: true,
        techGroups: [
          { label: "FE", items: ["Next.js 15", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI"] },
          { label: "Infra", items: ["AWS EKS", "Docker", "GitHub Actions"] },
        ],
        subProjects: [
          {
            name: "BizCalendar 플랫폼",
            period: "2024.08 ~ 2025.07",
            problem: "마케팅 팀이 개인 엑셀로 캠페인 일정을 관리해 팀 간 일정 충돌과 공유 누락이 반복되는 환경",
            role: "기획 단계부터 참여해 캘린더 뷰 체계 설계, 결제·인증 시스템 구현, GS 인증까지 프론트엔드 전반을 리드",
            contributions: [
              "팀 규모·업무 성격에 맞게 고를 수 있는 7가지 캘린더 화면을 설계",
              "엑셀에서 하던 일정 수정을 마우스로 끌어 옮기고 늘리는 방식으로 전환",
              "결제·인증·GS 인증 등 상용화에 필요한 기반 구축",
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
    company: "세탁특공대 (워시스왓)",
    companyDescription: "고객의 세탁물을 수거, 세탁, 배송을 해주는 비대면 세탁 서비스",
    items: [
      {
        name: "Micro Frontend 기반 Admin",
        description: "CS·공장 등 70여 명이 매일 사용하는 사내 운영 시스템을, 팀별로 따로 개발·배포할 수 있도록 3개로 나눠 재설계",
        tech: ["Next.js 14", "TypeScript", "Zustand", "SWR", "Mantine UI"],
        subProjects: [
          {
            name: "사내 운영 시스템 구조 전환",
            period: "2023.12 ~ 2024.07",
            problem: "여러 팀이 하나의 운영 시스템을 함께 쓰고 있어, 한 팀의 기능을 고치려면 전체를 같이 배포해야 하고 팀별로 독립적인 개선이 어려운 상황",
            role: "프론트엔드 리드로 구조 전환을 설계하고 구현",
            contributions: [
              "기존 시스템을 분석해 업무 영역별로 나누는 새 구조를 설계",
              "운영 시스템을 3개의 독립된 애플리케이션으로 분리해, 팀별로 따로 개발·배포·운영할 수 있게 전환",
              "기존 10개 화면을 새 구조로 이전하고, 신규 9개 화면 개발",
            ],
            achievements: [
              "CS·공장 등 약 70명이 매일 쓰는 시스템을 중단 없이 새 구조로 전환",
              "설계한 구조가 퇴사 후 2년 이상 유지·확장되며 지금도 운영 중 — 조직이 커지는 동안 견딘 설계로 검증",
            ],
          },
        ],
      },
      {
        name: "입고 Admin",
        description: "물류 센터 작업자가 매일 사용하는 세탁물 입고 처리 운영 시스템",
        tech: ["Next.js 13", "TypeScript", "Zustand", "SWR"],
        subProjects: [
          {
            name: "입고 Admin 플랫폼 리뉴얼",
            period: "2023.03 ~ 2023.06",
            problem: "입고 처리 단계가 복잡해 작업자 한 명이 소화할 수 있는 물량에 한계가 있던 상황",
            role: "프론트엔드 개발자로, 현장 작업자의 처리 동선을 분석해 입고 화면 전면 개편을 담당",
            contributions: [
              "기존 입고 절차를 새 화면으로 전면 개편하고 현장 전체에 적용",
              "기획자와 함께 실사용 피드백을 반영하며 기능을 개선",
            ],
            achievements: [
              "세탁물 12벌 처리 시간 3분 5초 → 2분 57초, 한 벌당 15.4초 → 14.7초로 단축",
            ],
          },
          {
            name: "입고 절차 개선 — 작업자 실수 방지와 자동화",
            period: "2023.07 ~ 2024.02",
            problem: "작업자 실수로 고객 요청사항이 빠지거나 엉뚱한 세탁물에 붙는 일이 반복되고, 옷이 손상돼도 사후에야 알려 불만이 이어지던 구조",
            role: "프론트엔드 개발자로 요청사항 관리·자동 연결·사전 안내 기능을 설계하고 구현",
            contributions: [
              "고객 요청사항을 유형별로 정리하고, 작업자가 실수하기 어려운 절차로 재설계",
              "요청사항을 해당 세탁물에 자동으로 연결해 손으로 맞추던 작업을 제거",
              "세탁물 손상을 사후 통보가 아니라 작업 중에 미리 안내하는 흐름으로 전환",
            ],
            achievements: [
              "하루 평균 14건씩 발생하던 치명적인 작업자 실수를 사전에 차단",
              "유료 요청사항 누락률 0.19% → 0.12%, 추가 요청 반영률 56.16% → 93.28% 개선, 고객 불만 10% 감소",
            ],
          },
        ],
      },
      {
        name: "Agent App",
        description: "배송 기사가 수거·배송 현장에서 사용하는 앱 (iOS, Android)",
        tech: ["React Native", "JavaScript"],
        subProjects: [
          {
            name: "출고 검증 자동화 — 바코드 스캔으로 오배송 방지",
            period: "2023.07 ~ 2023.12",
            problem: "출고할 때 작업자가 손으로 입력하다 보니 실수가 잦고, 다른 고객의 옷이 섞여 나가는 일이 반복되던 상황",
            role: "스캔 기반 출고 검증 기능을 설계하고 구현",
            contributions: [
              "QR·바코드 스캔으로 포장 처리를 대체해 손 입력 절차를 제거",
              "출고 직전 스캔으로 한 번 더 확인하는 단계를 넣어 잘못 실린 옷을 미리 걸러냄",
            ],
            achievements: [
              "손 입력 실수와 오배송을 줄여 고객 클레임과 재작업 비용 절감",
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
            problem: "앱 구조가 복잡해 기능 추가가 어렵고, 알림·링크 처리 코드가 여기저기 흩어져 있어 마케팅 요청 하나에도 개발자가 매번 붙어야 하던 상황",
            role: "프론트엔드 개발자로 앱 개편에 참여, 알림·링크 처리 등 핵심 기능 구현을 담당",
            contributions: [
              "앱 전반 개편과 안정화, iOS·Android 심사 대응 후 2023.02.13 정식 출시",
              "흩어져 있던 알림·링크 처리를 한곳으로 모아, 마케터가 개발자 없이 직접 발송할 수 있는 구조로 전환",
              "서버에서 화면 구성을 내려주는 방식을 도입해, 앱 업데이트 없이도 화면을 바꿀 수 있게 함",
            ],
            achievements: [
              "마케터가 직접 알림·링크를 만들고 발송까지 하는 흐름을 구축해, 개발자 개입을 없앰",
              "60개 이상의 알림·링크 시나리오를 안정적으로 운영할 수 있는 구조 확보",
            ],
          },
          {
            name: "구독 상품 전환 · 제휴 이벤트 페이지",
            period: "2023.02 ~ 2023.09",
            role: "프론트엔드 개발자로 구독 화면 개편과 마케팅 페이지 개발을 담당",
            contributions: [
              "새 구독 상품(세특패스)에 맞춰 가입·설정·해지 화면을 개발하고 복잡하던 기존 흐름을 단순화",
              "야놀자·배달의민족 등 제휴 프로모션과 자체 이벤트 페이지를 개발하고 앱과 연동",
            ],
          },
        ],
      },
    ],
  },
];

const earlyCareer = [
  {
    company: "코레토",
    period: "2021.06 - 2022.10",
    role: "Frontend Developer",
    tech: "React Native · React · TypeScript · Next.js · Mobx · Lerna · Storybook",
    points: [
      "가상자산 투자 플랫폼 '탱고픽' 앱 v3.2 개발과 외부 SDK 네이티브 연동, 웹 유지보수",
      "Lerna 기반 Mono Repo로 관리자·고객사·홈·쇼핑몰 멀티 사이트 개발, Atomic Design + Storybook 공통 컴포넌트 체계 구축",
    ],
  },
  {
    company: "뉴젠솔루션",
    period: "2020.03 - 2021.03",
    role: "C++ · Frontend Developer",
    tech: "React · JavaScript · C++ · MFC",
    points: [
      "세무회계 ERP의 GS 인증 대응 웹 개발과 외부 인쇄 솔루션의 자사 전환 — GS 1등급 인증 획득",
    ],
  },
  {
    company: "오픈오브젝트",
    period: "2017.11 - 2019.11",
    role: "C · C++ Developer",
    tech: "C++ · Lua · JavaScript · jQuery",
    points: [
      "SK브로드밴드 셋톱박스 v5.0 설정·광고·키즈 VOD 화면 개발 (약 100만 사용자 대상)",
      "해군 군수현황 관리 시스템의 조회·등록·통계 화면 개발",
    ],
  },
];

const sideProjects: ProjectItem[] = [
  {
    name: "Sync Block",
    url: "https://sync-block.app",
    description: "Google·Outlook 캘린더를 한 화면에 통합하는 일정·할 일 관리 웹 (운영 중)",
    techGroups: [
      { label: "FE", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Shadcn UI", "Zustand", "SWR", "next-intl"] },
      { label: "BE", items: ["NestJS 11", "Prisma 7", "PostgreSQL", "OAuth (Google·Microsoft)"] },
      { label: "Infra", items: ["Railway", "Cloudflare"] },
    ],
    subProjects: [
      {
        name: "Sync Block 플랫폼",
        period: "2025.03 ~ 현재",
        role: "기획·디자인·프론트엔드·백엔드·인프라 전 영역을 단독 개발·운영",
        contributions: [
          "Google·Outlook·로컬 캘린더를 한 화면에 통합 — 양방향 동기화와 겹치는 일정 자동 감지 구현",
          "일정에서 바로 할 일을 만들어 잇는 태스크 관리와 월간·주간·일간·타임라인 뷰 구현",
          "다국어(한/영)·자체 디자인 시스템 구축, Railway·Cloudflare 기반 도메인·SSL 직접 운영",
        ],
        achievements: [
          "기획부터 프론트엔드·백엔드·DB 설계·인증·배포까지 전 과정을 단독 구축해 실서비스로 운영 중",
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
  { category: "Backend", items: ["NestJS", "MongoDB", "Python"] },
  { category: "Data", items: ["AWS Athena", "S3", "SQS"] },
  { category: "AI", items: ["Claude Code", "Anthropic API", "Cursor"] },
  { category: "DevOps", items: ["Docker", "AWS EKS", "ECS Fargate", "GitHub Actions"] },
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

interface TechGroup {
  label: string;
  items: string[];
}

interface ProjectItem {
  name: string;
  url?: string;
  description: string;
  serviceClosed?: boolean;
  tech?: string[];
  techGroups?: TechGroup[];
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
        {project.techGroups ? (
          <div className="mb-5 space-y-2">
            {project.techGroups.map((group) => (
              <div key={group.label} className="flex flex-wrap items-baseline gap-2">
                <span className="w-10 shrink-0 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {group.label}
                </span>
                {group.items.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-medium">
                    {t}
                  </Badge>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech?.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs font-medium">
                {t}
              </Badge>
            ))}
          </div>
        )}
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
            유저의 문제를 프로덕트로 만드는 데 집중하는 엔지니어입니다.
            프론트엔드를 중심으로 물류 현장의 운영 시스템부터 마케팅 자동화
            플랫폼까지 유저의 문제를 풀어왔습니다. 지금은 Claude Code 기반
            AI 워크플로를 직접 만들어 쓰면서 백엔드·데이터 파이프라인·LLM
            파이프라인, 인프라까지 혼자 감당하는 범위를 넓혔고, 빠르게
            배포하고 지표를 보며 다음 개선을 정합니다.
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

          {/* Early career — 요약 */}
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-primary flex items-center gap-2 sm:text-xl">
                이전 경력
                <span className="text-lg">💼</span>
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                프론트엔드로 자리 잡기까지 — C·C++ 기반 시스템 개발에서 시작해 웹·앱으로 넘어온 기간
              </p>
            </div>
            <div className="space-y-3">
              {earlyCareer.map((c) => (
                <Card key={c.company} className="transition-all hover:shadow-md hover:shadow-primary/5">
                  <CardContent className="py-5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <p className="font-semibold text-base">{c.company}</p>
                        <p className="text-sm text-muted-foreground">{c.role}</p>
                      </div>
                      <Badge variant="outline" className="w-fit shrink-0 text-xs font-medium">
                        {c.period}
                      </Badge>
                    </div>
                    <div className="mt-3 space-y-1">
                      {c.points.map((p, i) => (
                        <p key={i} className="text-sm text-foreground/80 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                    <p className="mt-3 font-mono text-xs text-muted-foreground">{c.tech}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Side Projects */}
      <section className="mb-16">
        <h3 className="mb-2 flex items-center gap-3 text-xl font-semibold sm:text-2xl">
          <Rocket className="h-5 w-5 text-primary" /> 사이드 프로젝트
        </h3>
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
          본업 밖에서 기획부터 배포·운영까지 혼자 완주하는 개인 프로젝트
        </p>
        <div className="space-y-5">
          {sideProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
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
            <CardContent className="space-y-3 py-5">
              <p className="font-semibold text-base">서일대학교</p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  컴퓨터소프트웨어 학사 (전공심화) 졸업
                </p>
                <Badge variant="outline" className="shrink-0 text-xs font-medium">
                  2020.03 - 2021.02
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  컴퓨터전자시스템공학 전문학사 졸업
                </p>
                <Badge variant="outline" className="shrink-0 text-xs font-medium">
                  2015.03 - 2018.02
                </Badge>
              </div>
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
