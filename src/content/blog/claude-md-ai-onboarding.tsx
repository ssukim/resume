export default function ClaudeMdAiOnboarding() {
  return (
    <>
      <h2>Claude Code를 &quot;도구&quot;가 아닌 &quot;팀원&quot;으로</h2>
      <p>
        대부분의 개발자가 Claude Code를 이렇게 사용합니다. &quot;이 함수
        리팩토링해줘&quot;, &quot;테스트 코드 작성해줘&quot;. 물론 이것만으로도
        생산성은 올라갑니다. 하지만 저는 한 발 더 나아가고 싶었습니다.
      </p>
      <p>
        <strong>
          Claude가 우리 팀의 프로세스를 이해하고, 명령어 하나로 복잡한 워크플로를
          실행하게 만들 수 없을까?
        </strong>
      </p>
      <p>
        그 해답이 <code>CLAUDE.md</code>였습니다. 이 파일 하나로 Claude Code는
        코딩 도구에서 <strong>문서 자동화 엔진</strong>,{" "}
        <strong>QA 자동화 도구</strong>, <strong>PM 보조 시스템</strong>으로
        변했습니다.
      </p>

      <h2>CLAUDE.md란?</h2>
      <p>
        <code>CLAUDE.md</code>는 프로젝트 루트(또는 <code>.claude/</code>{" "}
        폴더)에 위치하는 마크다운 파일입니다. Claude Code가 세션을 시작할 때 이
        파일을 자동으로 읽고, 여기에 정의된 규칙과 컨텍스트를 따릅니다.
      </p>
      <p>
        쉽게 말하면, <strong>AI 팀원의 온보딩 문서</strong>입니다. 새 팀원이
        입사하면 위키를 읽게 하듯, Claude에게도 &quot;우리 팀은 이렇게
        일해&quot;라고 알려주는 겁니다.
      </p>

      <h2>실제 구조: 팀 프로젝트의 CLAUDE.md</h2>
      <p>
        저희 팀의 문서 허브에서 사용 중인
        CLAUDE.md의 핵심 구성을 소개합니다.
      </p>

      <h3>1. 폴더 구조 정의</h3>
      <p>
        Claude가 프로젝트의 전체 지도를 이해하도록 폴더 구조를 명시합니다.
      </p>
      <pre>
        <code>{`project-hub/
├── projects/                # 진행 중인 프로젝트
│   └── {project-name}/
│       ├── spec.md          # 피처 개요 + 현재 단계
│       ├── plan/            # 기획
│       ├── design/          # 디자인
│       ├── dev/             # 개발 스펙/로그/리뷰
│       └── qa/              # QA 체크리스트
├── history/                 # 완료된 프로젝트
├── meeting/                 # 회의록
└── templates/guides/        # 역할별 작성 가이드`}</code>
      </pre>
      <p>
        이 정의 덕분에 Claude는 &quot;auto-response 프론트 로그
        업데이트해줘&quot;라는 말만 듣고도{" "}
        <code>projects/auto-response/dev/frontend_log.md</code> 파일을 정확히
        찾아갑니다.
      </p>

      <h3>2. 프로세스 흐름 정의</h3>
      <p>
        팀의 개발 프로세스를 한 줄로 요약하고, 각 단계에서 어떤 문서를 작성하는지
        매핑합니다.
      </p>
      <pre>
        <code>{`미팅/토픽 → 기획(plan/) → 디자인(design/) → 개발(dev/) → QA(qa/) → 배포 → history/

| 단계   | 폴더      | 주요 문서                          |
|--------|-----------|-----------------------------------|
| 기획   | plan/     | scenario.md                       |
| 디자인 | design/   | handoff.md, review.md             |
| 개발   | dev/      | *_spec.md, *_log.md, *_review.md  |
| QA     | qa/       | checklist.md                      |`}</code>
      </pre>
      <p>
        Claude는 이 흐름을 이해하고 있기 때문에, &quot;이 피처 지금 어느
        단계야?&quot;라고 물으면 <code>spec.md</code>를 읽고 정확히 답합니다.
      </p>

      <h3>3. 명령어 체계</h3>
      <p>이게 핵심입니다. 자연어 명령어를 정의하면, Claude가 복잡한 워크플로를
        자동으로 실행합니다.</p>

      <h4>&quot;피처 생성해줘&quot;</h4>
      <pre>
        <code>{`"{meeting-file} 기반으로 {feature-name} 피처 생성해줘"`}</code>
      </pre>
      <p>
        이 한 마디로 Claude는 프로젝트 폴더 전체를 생성합니다. spec.md, plan/,
        design/, dev/, qa/ — 모든 문서를 템플릿 기반으로 초기화합니다. 미팅
        문서에서 요구사항을 추출해서 시나리오까지 작성해줍니다.
      </p>

      <h4>&quot;개발자료 최신화 해줘&quot;</h4>
      <pre>
        <code>{`실행 흐름:
1. 서브모듈(FE/BE)에서 최근 커밋 조회
2. 커밋을 scope 기반으로 자동 분류
   - feature/auto-response → projects/auto-response/dev/
   - 시스템 변경 → history/platform/
3. frontend_log.md, backend_log.md 업데이트
4. 변경 파일 분석 → review.md 업데이트
5. Git 커밋: "docs: 문서 최신화 (YYYY-MM-DD)"`}</code>
      </pre>
      <p>
        개발자가 코드만 쓰면, <strong>문서는 Claude가 알아서 동기화합니다</strong>.
        더 이상 &quot;문서 업데이트 해야 하는데...&quot;라고 미루지 않아도 됩니다.
      </p>

      <h4>&quot;핸드오프 만들어줘&quot;</h4>
      <pre>
        <code>{`"{project-name} 핸드오프 만들어줘: {Figma URL}"

실행 흐름:
1. Figma MCP로 프레임 목록 추출
2. 스크린샷 캡처
3. design/handoff.md 생성
4. dev/frontend_spec.md, backend_spec.md 생성`}</code>
      </pre>
      <p>
        Figma 링크 하나 던지면, 디자인 핸드오프 문서와 개발 스펙이 자동으로
        만들어집니다. 디자이너와 개발자 사이의 커뮤니케이션 비용이 크게
        줄었습니다.
      </p>

      <h3>4. 가이드 문서 참조 규칙</h3>
      <p>CLAUDE.md에 이런 규칙을 넣었습니다:</p>
      <pre>
        <code>{`문서 생성 시 반드시 templates/guides/ 문서를 먼저 읽고 작성할 것.

| 문서              | 참조할 가이드                           |
|-------------------|----------------------------------------|
| scenario.md       | guides/pm/scenario.md, scope.md        |
| handoff.md        | guides/design/handoff.md               |
| frontend_spec.md  | guides/frontend/overview.md, patterns.md|
| backend_spec.md   | guides/backend/overview.md, patterns.md |`}</code>
      </pre>
      <p>
        덕분에 Claude가 생성하는 모든 문서가{" "}
        <strong>팀의 컨벤션을 일관되게 따릅니다</strong>. 시나리오 문서는 항상
        페르소나/목표/흐름/예외 구조를 갖추고, 개발 스펙은 팀의 아키텍처 패턴을
        반영합니다.
      </p>

      <h3>5. 네이밍 규칙</h3>
      <pre>
        <code>{`| 대상       | 규칙        | 예시                    |
|------------|-------------|------------------------|
| 피처 폴더  | kebab-case  | auto-response          |
| dev 문서   | {역할}_{타입} | frontend_log.md       |
| 회의록     | 주차 기반    | W09-FEB-Week4.md      |`}</code>
      </pre>
      <p>
        사소해 보이지만, 이 규칙이 없으면 Claude가 생성하는 파일 이름이 매번
        달라집니다. 한 번 정의해두면 영원히 일관됩니다.
      </p>

      <h2>실제 효과</h2>

      <h3>Before: CLAUDE.md 없이</h3>
      <ul>
        <li>매번 프로젝트 구조를 설명해야 함</li>
        <li>생성되는 문서 형식이 매번 다름</li>
        <li>복잡한 작업은 단계별로 하나씩 지시해야 함</li>
        <li>새 세션마다 컨텍스트가 리셋</li>
      </ul>

      <h3>After: CLAUDE.md 적용 후</h3>
      <ul>
        <li>
          <strong>&quot;피처 생성해줘&quot;</strong> → 10개 파일이 담긴 프로젝트
          폴더가 즉시 생성
        </li>
        <li>
          <strong>&quot;개발자료 최신화 해줘&quot;</strong> → Git 커밋 분석 →
          문서 자동 업데이트 → 커밋까지 완료
        </li>
        <li>
          <strong>&quot;QA 해줘&quot;</strong> → Playwright로 체크리스트 자동 실행
          → 스크린샷 촬영 → 결과 문서화
        </li>
        <li>모든 문서가 팀 컨벤션을 일관되게 따름</li>
      </ul>

      <h2>CLAUDE.md 작성 팁</h2>

      <h3>1. 폴더 구조는 반드시 명시하세요</h3>
      <p>
        Claude는 파일 시스템을 탐색할 수 있지만, 미리 구조를 알려주면 탐색 없이
        바로 작업합니다. 속도와 정확도 모두 올라갑니다.
      </p>

      <h3>2. 명령어는 자연어로 정의하세요</h3>
      <p>
        &quot;개발자료 최신화 해줘&quot;처럼 팀에서 실제로 쓰는 말을 그대로
        명령어로 정의하세요. 특별한 문법이 필요 없습니다.
      </p>

      <h3>3. 워크플로를 단계별로 적으세요</h3>
      <p>
        &quot;커밋 조회 → 분류 → 로그 업데이트 → 리뷰 업데이트 →
        커밋&quot;처럼 실행 순서를 명시하면, Claude가 중간 단계를 건너뛰지
        않습니다.
      </p>

      <h3>4. 템플릿 참조를 강제하세요</h3>
      <p>
        &quot;반드시 guides/ 문서를 먼저 읽고 작성할 것&quot; — 이 한 줄이
        문서 품질의 일관성을 보장합니다.
      </p>

      <h2>다음 이야기</h2>
      <p>
        CLAUDE.md는 시작점입니다. 여기에{" "}
        <strong>MCP(Model Context Protocol)</strong>를 연동하면 Claude가 Figma,
        Jira, 브라우저까지 직접 제어할 수 있게 됩니다. 다음 글에서는 MCP로
        Claude를 슈퍼 도구로 만드는 방법을 다루겠습니다.
      </p>

      <blockquote>
        <p>
          AI에게 좋은 코드를 기대하기 전에, 좋은 컨텍스트를 줘야 합니다.
          CLAUDE.md는 그 컨텍스트의 시작입니다.
        </p>
      </blockquote>
    </>
  );
}
