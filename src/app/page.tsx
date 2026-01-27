import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Heart,
  Award,
  ExternalLink,
} from "lucide-react";

const careers = [
  {
    company: "디지털로그",
    url: "https://social.digitalog.ai",
    role: "Frontend Developer Lead",
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
    items: [
      {
        name: "Conma",
        description:
          "인스타그램 댓글·이벤트·리포트 통합 관리 웹",
        tech: ["Next.js 16", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI"],
        period: "2025.09 ~ 현재",
        achievements: [
          "유저 인터뷰 기반 기획에 참여해 플랫폼 프론트엔드 구조 설계와 주요 기능 개발 리드",
          "2026년 1월 기준 누적 유저 250명 확보",
        ],
      },
      {
        name: "Biz Calendar",
        description:
          "마케팅 조직의 캠페인, 콘텐츠, 태스크, 일정을 통합 관리하는 웹",
        tech: ["Next.js 15", "React 19", "TypeScript", "Zustand", "SWR", "TailwindCSS", "Shadcn UI"],
        period: "2024.08 ~ 2025.07",
        achievements: [
          "기획 단계부터 참여해 프론트엔드 구조 설계와 주요 기능 개발 리드",
          "BizCalendar MVP를 기반으로 TIPS 투자 유치 성공",
          "GS 1등급 인증 획득",
        ],
      },
    ],
  },
  {
    company: "워시스왓 (세탁특공대)",
    items: [
      {
        name: "Micro Frontend Admin",
        description:
          "레거시 Admin 시스템을 Micro Frontend 기반 멀티 레포 구조로 재설계",
        tech: ["Next.js 14", "TypeScript", "Zustand", "SWR", "Mantine UI"],
        period: "2023.12 ~ 2024.07",
        achievements: [
          "레거시 Admin 분석 기반 Micro Frontend 아키텍처 설계",
          "CS, Factory 등 약 70명 규모의 실사용 조직 신규 Admin 구조로 전환",
        ],
      },
      {
        name: "입고 Admin",
        description: "고객이 맡긴 세탁물 입고 단계 Admin 웹",
        tech: ["Next.js 13", "TypeScript", "Zustand", "SWR"],
        period: "2023.03 ~ 2024.02",
        achievements: [
          "12PCS 처리 시간 3분 5초 → 2분 57초 단축",
          "유료 요청사항 누락률 0.19% → 0.12% (약 34% 개선)",
          "추가 요청사항 반영률 56.16% → 93.28% 개선",
          "데미지 사전 안내 프로세스 구축으로 10% 고객 불만 감소",
        ],
      },
      {
        name: "User App",
        description: "세탁 서비스 신청, 결제 앱 (iOS, Android)",
        tech: ["React Native", "TypeScript", "Recoil", "React-Query"],
        period: "2022.11 ~ 2023.06",
        achievements: [
          "약 60개 이상 딥링크·푸시 시나리오 안정적 운영 구조 확보",
          "세특패스 도입 후 약 1개월 내 30% 구독 전환 성공",
        ],
      },
    ],
  },
  {
    company: "코레토",
    items: [
      {
        name: "탱고픽 App / Web",
        description: "가상자산 기반 투자 포트폴리오 및 전략 공유 플랫폼",
        tech: ["React Native", "React", "TypeScript", "Jotai"],
        period: "2022.04 ~ 2022.10",
        achievements: [
          "App v3.2 개발 및 ebest SDK Native Android 연동",
          "신규 기획 페이지 개발 및 Web 유지보수",
        ],
      },
      {
        name: "포스트팩토리 2.0 / 뭄무",
        description: "Mono Repo 기반 B2B2C 플랫폼 및 멀티 사이트 개발",
        tech: ["Next.js 12", "TypeScript", "Mobx", "Lerna", "Storybook"],
        period: "2021.07 ~ 2022.03",
        achievements: [
          "Atomic Design 패턴을 적용한 컴포넌트 설계 및 구현",
          "Storybook 기반 공통 컴포넌트 관리",
        ],
      },
    ],
  },
  {
    company: "뉴젠솔루션",
    items: [
      {
        name: "ERP 리포트 연동",
        description: "ERP 프로그램과 리포트 프로그램 연동 개발",
        tech: ["C++", "MFC", "React", "Redux"],
        period: "2020.03 ~ 2020.12",
        achievements: [
          "자사 인쇄 솔루션으로 전환하여 외부 의존 제거",
          "GS 1등급 인증 획득",
        ],
      },
    ],
  },
  {
    company: "오픈오브젝트",
    items: [
      {
        name: "SKB 셋톱박스 v5.0",
        description: "SK BroadBand 셋톱박스 서비스 기능 개발",
        tech: ["C++", "Lua", "Shell Script"],
        period: "2017.11 ~ 2019.11",
        achievements: [
          "약 100만 사용자 대상 셋톱박스 v5.0 업데이트 화면 제공",
          "설정 화면, VOD 중간 광고, 키즈 전용 VOD 서비스 개발",
        ],
      },
    ],
  },
];

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "C++"] },
  { category: "Frontend", items: ["React", "Next.js", "React Native"] },
  { category: "State Management", items: ["Zustand", "SWR", "Recoil", "Jotai"] },
  { category: "Styling", items: ["TailwindCSS", "Shadcn UI", "Mantine UI"] },
  { category: "DevOps", items: ["Docker", "AWS EKS", "GitHub Actions"] },
  { category: "Tools", items: ["Git", "pnpm", "Storybook"] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <p className="mb-2 text-sm text-muted-foreground">
            Last Updated. 2026/01/25
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            운영을 전제로 구현하는 개발자
          </h1>
          <h2 className="mb-6 text-3xl font-semibold text-primary">
            JeongSu Kim
          </h2>

          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <a
              href="tel:010-8743-9512"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              010-8743-9512
            </a>
            <a
              href="mailto:ssukim0930@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              ssukim0930@gmail.com
            </a>
          </div>
        </header>

        <Separator className="my-8" />

        {/* Introduction */}
        <section className="mb-12">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <span className="text-2xl">🎤</span> 자기소개
          </h3>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              신규 프로젝트의 초기 기획과 설계 단계부터 참여해 프론트엔드 구조
              설계와 구축을 주도해왔습니다.
            </p>
            <p>
              레거시 플랫폼을 분석해 확장 가능한 아키텍처를 설계하고, 신규
              플랫폼으로의 전환을 이끌며 서비스 전반의 구조를 개선했습니다.
            </p>
            <p>
              기획, 개발, 운영 전반에 참여해 사용자 경험을 개선했으며, 개선
              효과를 실제 사용자 사용과 운영 지표로 효과를 확인했습니다.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Career */}
        <section className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Briefcase className="h-5 w-5" /> 경력
          </h3>
          <div className="space-y-4">
            {careers.map((career) => (
              <Card key={career.company} className="border-l-4 border-l-primary">
                <CardContent className="py-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <a
                        href={career.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                      >
                        {career.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-sm text-muted-foreground">
                        {career.role}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {career.period}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Projects */}
        <section className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <FolderOpen className="h-5 w-5" /> 프로젝트
          </h3>
          <div className="space-y-8">
            {projects.map((group) => (
              <div key={group.company}>
                <h4 className="mb-4 text-lg font-semibold text-primary">
                  {group.company}
                </h4>
                <div className="space-y-4">
                  {group.items.map((project) => (
                    <Card key={project.name}>
                      <CardHeader className="pb-3">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <CardTitle className="text-base">
                              {project.name}
                            </CardTitle>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                          <Badge variant="outline" className="w-fit shrink-0">
                            {project.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <Badge
                              key={t}
                              variant="secondary"
                              className="text-xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-primary">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Skills */}
        <section className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Heart className="h-5 w-5" /> Skills
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <Card key={skill.category}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Education & ETC */}
        <section className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <GraduationCap className="h-5 w-5" /> Education
            </h3>
            <Card>
              <CardContent className="py-4">
                <p className="font-medium">서일대학교</p>
                <p className="text-sm text-muted-foreground">
                  컴퓨터공학 학사 졸업
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <Award className="h-5 w-5" /> ETC
            </h3>
            <Card>
              <CardContent className="space-y-2 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm">육군 병장 만기 전역</p>
                  <Badge variant="outline" className="text-xs">
                    2011.06 - 2013.03
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">정보처리산업기사</p>
                  <Badge variant="outline" className="text-xs">
                    2017.05.26
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2026 JeongSu Kim. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
