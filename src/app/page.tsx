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
    url: "https://social.digitalog.ai",
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
        url: "https://social.digitalog.ai/",
        description: "인스타그램 댓글·DM 자동화·리포트 통합 관리 웹",
        tech: ["Next.js 16", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI", "AWS EKS", "Docker", "GitHub Actions"],
        subProjects: [
          {
            name: "Conma 플랫폼",
            period: "2025.09 ~ 현재",
            problem: "인플루언서, 브랜드, 마케팅 대행사가 Instagram 캠페인을 운영하는 과정에서 댓글 관리, DM 응대, 성과 확인 등이 수작업 중심으로 이루어져 반복 업무와 운영 비효율이 누적되는 문제",
            role: "Claude Code 기반 AI 개발 워크플로를 구축하고, 기획부터 프론트엔드 설계·인프라까지 제품 전반을 리드",
            contributions: [
              "Claude Code를 활용한 AI 기반 개발 환경 구축 — 기획서 분석, 코드 구현, Playwright MCP 연동 QA 자동화",
              "댓글 키워드 기반 DM 자동 응대 — 3-Step 자동화 플로우 설계, Zustand 멀티스텝 폼, Optimistic Update, LIVE 충돌 감지 UX 구현",
              "Instagram OAuth 계정 연동, 댓글 관리(검색·필터·CSV 내보내기·벌크 액션), 블로그 플랫폼(TipTap 에디터) 등 핵심 기능 설계·구현",
              "다국어(i18n) 지원, K8s 기반 개발·운영 환경 분리, 모니터링(Prometheus+Grafana+Loki) 구축",
              "SEO & AI 검색 최적화 — ISR 전환, 시맨틱 HTML 개선, AI 봇(GPTBot, ClaudeBot) 허용으로 AI 검색 노출 확보",
            ],
            achievements: [
              "DM 자동 응대 도입으로 마케터 댓글 응대 시간 하루 2시간 → 초기 설정 5분으로 단축",
              "댓글 벌크 액션 도입으로 100건 기준 관리 시간 30분 → 1분 이내로 단축",
              "AI 개발 워크플로 도입 후 MVP 이후 3개 핵심 피처 연속 출시, 누적 가입 유저 250명 확보",
              "AI 검색엔진(ChatGPT, Perplexity) 노출 달성",
            ],
          },
        ],
      },
      {
        name: "Biz Calendar",
        description: "마케팅 조직의 캠페인, 콘텐츠, 태스크, 일정을 한 워크스페이스에서 통합 관리 웹",
        serviceClosed: true,
        tech: ["Next.js 15", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI", "Toss Payments", "AWS EKS", "Docker", "GitHub Actions"],
        subProjects: [
          {
            name: "BizCalendar 플랫폼",
            period: "2024.08 ~ 2025.07",
            problem: "마케팅 팀이 개인 엑셀로 캠페인 일정을 관리해 팀 간 일정 충돌과 공유 누락이 반복되는 환경",
            role: "기획 단계부터 참여해 캘린더 뷰 체계 설계, 결제·인증 시스템 구현, GS 인증까지 프론트엔드 전반을 리드",
            contributions: [
              "Google Calendar·Jira 사용 패턴 분석 기반 7개 캘린더 뷰(연간·월간·주간·타임라인·플래너·분기·리스트) 설계 및 구현",
              "드래그 앤 드롭 시스템(일정 이동·리사이즈·크로스 뷰 DnD), 멀티 타임존 지원 구현",
              "Toss Payments 연동 결제 플로우, OAuth 소셜 로그인, GS 인증 테스트 환경 구축",
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
        tech: ["Next.js 14", "TypeScript", "Zustand", "SWR", "Mantine UI", "PostCSS", "pnpm", "SWC"],
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
        tech: ["Next.js 13", "TypeScript", "Zustand", "SWR", "PostCSS", "pnpm", "SWC"],
        subProjects: [
          {
            name: "입고 Admin 플랫폼 리뉴얼",
            period: "2023.03 ~ 2023.06",
            problem: "기존 입고 시스템의 복잡한 프로세스로 인해 처리 속도가 느리고 작업자 생산성 개선에 한계가 있는 상황",
            role: "스쿼드 프론트엔드 개발자로 입고 Admin 리뉴얼을 담당",
            contributions: [
              "기존 입고 프로세스를 신규 Admin 플랫폼으로 전면 리뉴얼",
              "2023.07.17 기준 전체 입고 프로세스 신규 플랫폼 전환 적용",
              "신규 플랫폼 기반으로 PO와 협업하며 기능 고도화",
            ],
            achievements: [
              "12PCS 처리 시간 3분 5초 → 2분 57초 단축",
              "PCS당 평균 처리 속도 15.4초 → 14.7초 개선",
              "실제 작업자 기준 13PCS 처리 가능 수준으로 생산성 향상",
            ],
          },
          {
            name: "요청사항 카테고리화 및 휴먼 에러 방지 시스템 구축",
            period: "2023.07 ~ 2023.08",
            problem: "작업자가 실수를 하더라도 고객 요청사항이 제대로 처리되었는지 확인할 수 없는 구조",
            role: "스쿼드 프론트엔드 개발자로 요청 유형을 정리하고, 누락을 방지하는 요청사항 관리 기능을 구현",
            contributions: [
              "모든 고객 요청사항에 대한 카테고리 체계 설계 및 구현",
              "유료 요청사항 대상 휴먼 에러 방지 프로세스 구축",
              "오류 발생 시 공장 매니저와 즉시 소통 가능한 처리 구조 설계",
            ],
            achievements: [
              "유료 요청사항 누락률 0.19% → 0.12% (약 34% 개선)",
              "기존 일 평균 14건 발생하던 크리티컬 휴먼 에러 방지",
            ],
          },
          {
            name: "요청사항 자동 매칭 및 추가 요청 처리 자동화",
            period: "2023.09 ~ 2023.11",
            problem: "작업자가 고객 요청사항을 직접 매칭하는 구조로, 매칭 실수가 발생해도 이를 확인하거나 감지할 수 없는 상황",
            role: "스쿼드 프론트엔드 개발자로 작업자 요청사항 매칭을 시스템 기반으로 전환하는 처리 기능을 구현",
            contributions: [
              "고객 요청사항 전체 스캔 기반 자동 매칭 시스템 설계, 구현",
              "추가 요청사항 반영 프로세스 자동화 설계 및 적용",
            ],
            achievements: ["추가 요청사항 반영률 56.16% → 93.28% 개선"],
          },
          {
            name: "데미지 등록 사전 안내 및 커뮤니케이션 프로세스 구축",
            period: "2024.01 ~ 2024.02",
            problem: "세탁물 데미지 발생 시 사후 안내 위주의 대응으로 고객 불만이 반복 발생",
            role: "스쿼드 프론트엔드 개발자로 고객 사전 안내 기준을 정리하고, 커뮤니케이션 화면을 구현",
            contributions: [
              "매니저 ↔ 고객 간 커뮤니케이션 흐름 구조화",
              "세탁물 데미지 사전 안내 프로세스 구축을 통한 컴플레인 예방 구조 설계, 구현",
            ],
            achievements: ["데미지 발생 시 사후 대응 중심이던 구조를 사전 안내, 확인 방식으로 전환하여 10% 고객 불만 감소"],
          },
        ],
      },
      {
        name: "Agent App",
        description: "세탁 서비스를 배송, 관리를 할 수 있는 앱 (iOS, Android)",
        tech: ["React Native 0.62.2", "JavaScript", "StyleSheet", "yarn", "Metro Bundler"],
        subProjects: [
          {
            name: "출고 바코드 패키지 스캔",
            period: "2023.07 ~ 2023.08",
            problem: "출고 패키징 과정이 수기 입력 방식으로 이루어져 휴먼 에러 발생 가능성이 높고 작업 효율이 낮은 상태",
            role: "스쿼드 단위 협업을 통해 스캔 기반 출고, 검증 프론트엔드 기능 설계 및 구현",
            contributions: [
              "기존 입력 방식 대신 QR / 바코드 스캔 기반 패키징 처리 화면 개발",
              "스캔을 통한 데이터 자동 입력으로 불필요한 수기 프로세스 제거",
            ],
            achievements: [
              "수기 입력으로 인한 휴먼 에러 방지",
              "패키징 처리 속도 향상 및 불필요한 작업 단계 제거를 통한 현장 생산성 개선",
            ],
          },
          {
            name: "오적재 방지 스캔",
            period: "2023.11 ~ 2023.12",
            problem: "출고 과정에서 고객에게 전달되는 의류가 잘못 적재되는 이슈 지속 발생",
            role: "스쿼드 단위 협업을 통해 출고 전 검증 단계의 스캔 기반 오적재 방지 프론트엔드 화면 및 로직 구현",
            contributions: [
              "출고 전 단계에서 스캔을 통해 상품 적재 여부를 검증하는 기능 개발",
              "잘못된 의류 적재 시 즉시 인지 가능한 UI 및 처리 흐름 구현",
            ],
            achievements: [
              "오적재 사전 방지 구조 확보",
              "출고 오류 감소로 고객 클레임 및 재작업 비용 절감에 기여",
            ],
          },
        ],
      },
      {
        name: "User App",
        description: "세탁 서비스를 신청, 결제를 할 수 있는 앱 (iOS, Android)",
        tech: ["React Native 0.72.1", "TypeScript", "Recoil", "React-Query", "Styled Components", "FCM", "APNS"],
        subProjects: [
          {
            name: "모바일 앱 리뉴얼",
            period: "2022.11 ~ 2023.03",
            problem: "기존 모바일 앱 구조가 복잡하고 확장성이 낮아 기능 추가 및 안정적인 운영에 한계. 딥링크·푸시 로직이 분산되어 있어 유지보수 및 운영 효율 저하",
            role: "프론트엔드 개발자(팀원)로 모바일 앱 리뉴얼 작업에 참여. 딥링크·푸시 등 앱 핵심 기능 구현 담당",
            contributions: [
              "앱 전반 리뉴얼 및 안정화 작업 수행",
              "iOS / Android 배포 심사 대응 및 2023.02.13 정식 런칭 지원",
              "딥링크, 앱 링크, 유니버설 링크, 푸시 알림(APNS, FCM), Code Push 구현",
              "딥링크, 푸시 처리 로직 모듈화 및 단일 인터페이스로 통합",
              "Server Driven UI 환경에서 jsonpath 기반 동적 라우팅 처리 구조 구현",
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
        tech: ["Next.js 12", "React", "JavaScript", "Styled Components", "yarn", "Webpack"],
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
        name: "탱고픽 App",
        description: "가상자산으로 주식, 투자를 기반으로 포트폴리오 생성이 가능하고 투자전략 공유가 가능한 앱",
        serviceClosed: true,
        tech: ["React Native 0.67.3", "TypeScript", "Jotai", "StyleSheet", "FCM", "APNS"],
        subProjects: [
          {
            name: "탱고픽 App v3.2 개발 및 유지보수",
            period: "2022.04 ~ 2022.10",
            problem: "앱 v3.2 신규 버전 출시를 위해, 기존 기능 개선과 외부 SDK 연동을 포함한 기능 확장이 요구됨",
            role: "외주 프로젝트의 프론트엔드 개발자로서 App v3.2 개발 및 운영 참여",
            contributions: [
              "탱고픽 App v3.2 버전 기능 개발 참여",
              "ebest SDK Native Android 연동을 통한 기능 구현",
              "앱 운영 중 발생하는 이슈 대응 및 지속적인 유지보수 수행",
            ],
          },
        ],
      },
      {
        name: "탱고픽 Web",
        description: "자신만의 투자전략 공유가 가능한 커뮤니티 웹",
        serviceClosed: true,
        tech: ["React 17", "TypeScript", "Jotai", "Scss", "npm", "Webpack"],
        subProjects: [
          {
            name: "신규 기획 페이지 개발 및 Web 유지보수 (외주)",
            period: "2022.04 ~ 2022.07",
            problem: "웹 개발자가 부재한 상황에서 앱 내 기획 페이지 및 웹 서비스 운영을 안정적으로 유지해야 하는 상황",
            role: "외주 프로젝트의 프론트엔드 개발자로서 기획 페이지 개발 및 웹 유지보수 담당",
            contributions: [
              "앱에 적용되는 신규 기획 페이지 개발",
              "탱고픽 Web 서비스 유지보수 및 이슈 대응",
            ],
          },
        ],
      },
      {
        name: "뭄무",
        url: "https://www.mummu.kr/",
        description: "디자인 등록, 스케줄관리, 납품, 발주, 사용자 관리를 제공하는 관리자/사용자/홈 웹",
        tech: ["Next.js 12", "TypeScript", "Mobx", "Styled Components", "Lerna", "Storybook"],
        subProjects: [
          {
            name: "Mono Repo 기반 멀티 사이트 개발 (외부 클라이언트)",
            period: "2021.12 ~ 2022.03",
            problem: "외부 클라이언트 요청에 따라 관리자, 고객사, 홈 사이트를 동시에 개발",
            role: "외부 클라이언트 요청 기반 프로젝트에서 프론트엔드 개발자(팀원)로 개발 참여",
            contributions: [
              "Lerna 기반 Mono Repo 구조로 관리자 / 고객사 / 홈 사이트 개발 참여",
              "Storybook을 활용한 공통 컴포넌트 개발 및 관리",
            ],
          },
        ],
      },
      {
        name: "포스트팩토리 2.0",
        description: "셀러와 리셀러 간 권한 기반 판매 구조와 수수료 정산을 제공하는 B2B2C 플랫폼/쇼핑몰/관리자 웹",
        serviceClosed: true,
        tech: ["Next.js 12", "TypeScript", "Mobx", "Styled Components", "Lerna", "Storybook"],
        subProjects: [
          {
            name: "Mono Repo 기반 멀티 사이트 개발 (외부 클라이언트)",
            period: "2021.07 ~ 2021.11",
            problem: "외부 클라이언트 요청에 따라 플랫폼, 쇼핑몰, 관리자 사이트를 동시에 개발",
            role: "외부 클라이언트 요청 사항을 반영하는 프론트엔드 개발자(팀원)로 개발 참여",
            contributions: [
              "Lerna 기반 Mono Repo 구조로 플랫폼 / 쇼핑몰 / 관리자 사이트 개발 참여",
              "Atomic Design 패턴을 적용한 컴포넌트 설계 및 구현",
              "Storybook 기반 공통 컴포넌트 관리",
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
        name: "리포트 테스트 웹 페이지",
        description: "GS인증 1등급을 받기위해 리포트 프로그램과 연동한 테스트 웹",
        tech: ["React", "JavaScript", "Redux", "Styled Components", "npm"],
        subProjects: [
          {
            name: "GS 인증 대응 페이지 개발",
            period: "2020.09 ~ 2020.12",
            problem: "GS 인증 획득을 위해 인증 항목별 요구사항을 충족하는 전용 기능 및 검증 페이지가 필요",
            role: "프론트엔드 개발자로서 GS 인증 대응 페이지 개발 담당",
            contributions: [
              "GS 인증 요구사항에 맞춰 로그인 페이지, 파일 업로드 페이지, 그리드 입력 페이지 개발",
              "인증 검증을 위한 테스트 전용 페이지 개발 및 인증 기관 제공",
            ],
            achievements: ["GS 1등급 인증 획득"],
          },
        ],
      },
      {
        name: "ERP 리포트 연동",
        description: "뉴젠솔루션에서 기존에 개발된 ERP프로그램과 리포트프로그램 연동",
        tech: ["C++", "MFC"],
        subProjects: [
          {
            name: "ERP 연동 인쇄 리포트 기능 개발",
            period: "2020.04 ~ 2020.08",
            problem: "ERP 시스템의 인쇄 기능이 외부 솔루션에 의존하고 있어 운영·유지보수 및 비용 측면에서 개선이 필요",
            role: "프론트엔드 개발자로서 ERP 연동 인쇄 리포트 기능 개발 담당",
            contributions: [
              "ERP 프로그램의 인쇄 버튼과 연동하여 리포트 프로그램을 통해 인쇄 양식을 렌더링하는 기능 구현",
              "기존 외부 인쇄 솔루션 사용 방식에서 자사 인쇄 솔루션으로 전환",
            ],
            achievements: ["외부 솔루션 의존 없이 자사 시스템 내에서 인쇄 기능을 운영할 수 있는 구조 확보"],
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
        name: "해군 잠수함 프로젝트",
        description: "선원들이 잠수함에서 워치를 착용하고있는 워치에서 보내는 이벤트를 실시간으로 관리하는 관리자 웹",
        tech: ["JavaScript", "jQuery"],
        subProjects: [
          {
            name: "해군 군수현황관리 시스템 개발",
            period: "2019.06 ~ 2019.11",
            problem: "군수 자산의 현황을 분산 관리하여 부서·임무별 현황 파악과 사용량 분석이 어려운 상황",
            role: "프론트엔드 개발자로서 군수현황 관리 화면 개발 담당",
            contributions: [
              "군수현황 기본 조회 및 날짜별 조회 기능 구현",
              "임무, 부서별 조회 기능 및 군수 데이터 등록, 수정 기능 개발",
              "평균 사용량을 확인할 수 있는 통계 조회 페이지 개발",
            ],
          },
        ],
      },
      {
        name: "SKB STB (SKBroadBand 셋톱박스)",
        description: "SK BroadBand 셋탑박스에서의 화면 영역",
        tech: ["C++", "Lua", "Shell Script", "SK Framework"],
        subProjects: [
          {
            name: "셋톱박스 v5.0 서비스 기능 개발",
            period: "2017.11 ~ 2019.11",
            problem: "셋톱박스 메이저 버전 업데이트 과정에서, 다양한 사용자 시나리오를 반영한 서비스 기능 확장이 요구됨",
            role: "STB 개발자로서 셋톱박스 서비스 기능 개발 참여",
            contributions: [
              "셋톱박스 v5.0 설정 화면 개발",
              "VOD 재생 중 노출되는 중간 광고 기능 개발",
              "키즈 전용 VOD 서비스 화면 개발",
            ],
            achievements: ["약 100만 사용자 대상 셋톱박스 v5.0 업데이트 화면 제공"],
          },
        ],
      },
    ],
  },
];

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "C++"] },
  { category: "Frontend", items: ["React", "Next.js", "React Native"] },
  { category: "State Management", items: ["Zustand", "SWR", "Recoil", "Jotai", "Mobx"] },
  { category: "Styling", items: ["TailwindCSS", "Shadcn UI", "Mantine UI", "Styled Components"] },
  { category: "AI Tools", items: ["Claude Code", "Cursor", "Figma MCP", "Playwright MCP"] },
  { category: "DevOps", items: ["Docker", "AWS EKS", "GitHub Actions", "Kubernetes"] },
  { category: "Tools", items: ["Git", "pnpm", "Storybook", "Lerna"] },
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
            유저 인터뷰에서 마케터가 댓글 응대에 하루 평균 2시간 이상을
            소모한다는 문제를 발견하고, 댓글 키워드 기반 DM 자동 응대 기능을
            기획·설계·구현해 수동 응대를 완전 자동화한 프로덕트 엔지니어입니다.
          </p>
          <p className="pl-1">
            Claude Code를 개발 파트너로 활용해 기획서 분석, 코드 구현, QA
            자동화까지 AI 기반 개발 워크플로를 구축하고, 이를 통해 빠른
            피처 사이클을 유지하며 제품을 만들고 있습니다.
          </p>
          <p className="pl-1">
            AI 검색엔진(ChatGPT, Perplexity) 최적화, AI 봇 크롤링 허용
            설정 등 AI 시대에 맞는 제품 노출 전략까지 설계하고 구현합니다.
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
