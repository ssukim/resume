export default function DesignTokenMigration() {
  return (
    <>
      <h2>420개 Tailwind 클래스, 110개 컴포넌트를 깨지 않고 바꾸기</h2>
      <p>
        프로젝트가 성장하면 디자인 시스템과 코드 사이의 간극이 벌어집니다.
        Figma에서는 <code>Primary/Strong</code>이라고 부르는 색상을, 코드에서는{" "}
        <code>bg-brand-2</code>로 쓰고 있었습니다. 어느 날 세어보니 — CSS 변수
        20개 변경, Tailwind 클래스 참조 약 420개, 영향 받는 컴포넌트 110개.
      </p>
      <p>
        이 작업을 혼자 했다면 일주일은 걸렸을 겁니다. 하지만{" "}
        <strong>Claude Code를 분석부터 실행까지 전 과정에 활용</strong>하면서,
        분석 2일 + 실행 반나절로 끝낼 수 있었습니다. 3-Phase 전략과 함께 AI를
        어떻게 활용했는지 공유합니다.
      </p>

      <h2>문제: 이름이 뜻을 잃었다</h2>
      <p>
        기존 Color System의 가장 큰 문제는{" "}
        <strong>네이밍이 기능을 설명하지 못한다</strong>는 것이었습니다.
      </p>
      <pre>
        <code>{`// 기존: 이름만 보고는 용도를 알 수 없음
text-text-primary    // 텍스트의 텍스트? 프라이머리?
bg-brand-1           // brand-1이 뭐지? 2는? 3은?
text-error-1         // error-1과 error-2의 차이는?
bg-[#F9F5FF]         // 토큰에 없어서 하드코딩...`}</code>
      </pre>
      <p>
        Claude Code에게 &quot;프로젝트 전체에서 색상 관련 Tailwind 클래스 사용량을
        분석해줘&quot;라고 요청했습니다. <code>grep</code> 기반으로 전수 조사한
        결과가 즉시 나왔습니다.
      </p>
      <pre>
        <code>{`text-text-* 패턴     → 369개 사용
bg-brand-* 패턴      → 18개 사용
text-error-* 패턴    → 24개 사용
border-neutral-* 패턴 → 30개 사용
하드코딩 색상         → 25개+`}</code>
      </pre>
      <p>
        사람이 직접 세었다면 하루는 걸렸을 작업입니다. 여기에 Claude는 CSS 변수
        미정의 버그까지 발견했습니다. <code>globals.css</code>에서 chart 색상 2개가
        존재하지 않는 변수를 참조하고 있었는데, 육안으로는 놓치기 쉬운 부분이었습니다.
      </p>

      <h2>설계: Claude와 함께 Semantic Token 구조 잡기</h2>
      <p>
        분석 결과를 바탕으로, Claude에게 Figma 디자인 시스템과 코드 양쪽을
        비교하면서 신규 토큰 구조를 설계하게 했습니다. 핵심 원칙은{" "}
        <strong>&quot;이 색상이 무엇인가&quot;가 아니라 &quot;이 색상이 무엇을 하는가&quot;</strong>
        로 분류를 바꾸는 것. 6개 기능 섹션으로 재구성했습니다.
      </p>
      <pre>
        <code>{`| 섹션       | 용도               | 예시                          |
|------------|--------------------|-----------------------------|
| Primary    | 브랜드 액션 (CTA)   | bg-primary, text-primary     |
| Label      | 텍스트 & 아이콘     | text-label, text-label-alt   |
| Background | 배경               | bg-normal, bg-elevated       |
| Line       | 보더 & 구분선       | border-line, border-line-alt |
| Status     | 상태 피드백         | text-negative, bg-positive   |
| Chart      | 차트 전용 8색       | bg-chart-1 ~ bg-chart-8     |`}</code>
      </pre>
      <p>
        이제 &quot;에러 상태의 배경색은?&quot;이라는 질문에{" "}
        <code>bg-negative-light</code>라고 바로 답할 수 있습니다.{" "}
        <code>bg-error-1</code>이었는지 <code>bg-red-200</code>이었는지 고민할
        필요가 없어졌습니다.
      </p>

      <h2>Token Mapping: Claude가 만든 마이그레이션 지도</h2>
      <p>
        가장 중요한 작업은 기존 토큰과 신규 토큰 사이의{" "}
        <strong>1:1 매핑 테이블</strong>을 만드는 것이었습니다. Claude에게
        &quot;기존 코드의 모든 색상 토큰을 신규 Semantic 토큰으로 매핑해줘&quot;라고
        요청하면, 코드 사용량 분석 결과를 기반으로 28개 토큰의 매핑 테이블을
        자동 생성합니다. 이 테이블이 마이그레이션 전체의 범위를 정의합니다.
      </p>
      <pre>
        <code>{`// Text → Label
text-text-primary     → text-label
text-text-secondary   → text-label-neutral
text-text-tertiary    → text-label-alt
text-text-disabled    → text-label-disable

// Brand → Primary
bg-brand-1            → bg-primary
bg-brand-2            → bg-primary-strong
bg-brand-3            → bg-primary-heavy

// Error → Status
text-error-1          → text-negative
text-error-2          → text-negative-strong
bg-[#F9F5FF]          → bg-purple-50  (하드코딩 제거)`}</code>
      </pre>

      <h2>3-Phase 전략: 한 번에 바꾸지 않는다</h2>
      <p>
        420개의 클래스 참조를 한 번에 바꾸면? 무조건 깨집니다. 핵심은{" "}
        <strong>Backward Compatibility를 유지하면서 점진적으로 전환</strong>하는
        것이었습니다.
      </p>

      <h3>Phase 1: CSS 변수 정의 + Alias 추가</h3>
      <p>
        신규 Semantic 토큰을 정의하면서, 기존 토큰을 Alias로 유지합니다. 이
        단계에서는 <strong>기존 코드가 전혀 깨지지 않습니다</strong>.
      </p>
      <pre>
        <code>{`/* globals.css */

/* 신규 Semantic 토큰 */
--color-primary: var(--color-blue-600);
--color-primary-strong: var(--color-blue-700);
--color-label: var(--color-neutral-900);
--color-label-neutral: var(--color-neutral-700);

/* Backward Compat Aliases (Phase 3에서 제거) */
--color-brand-1: var(--color-primary);
--color-brand-2: var(--color-primary-strong);
--color-text-primary: var(--color-label);
--color-text-secondary: var(--color-label-neutral);`}</code>
      </pre>
      <p>
        Alias 덕분에 <code>bg-brand-1</code>을 쓰던 코드도,{" "}
        <code>bg-primary</code>를 쓰는 새 코드도 동일한 색상을 렌더링합니다.
      </p>

      <h3>Phase 2: Claude가 작성한 자동화 스크립트로 일괄 치환</h3>
      <p>
        Token Mapping 테이블을 기반으로, Claude에게 &quot;이 매핑대로 전체
        컴포넌트를 치환하는 bash 스크립트를 만들어줘&quot;라고 요청했습니다.
        18개의 Find &amp; Replace 규칙이 담긴 스크립트가 나왔습니다.
      </p>
      <pre>
        <code>{`#!/bin/bash
cd src

# Label (369개 참조)
find . -name '*.tsx' -o -name '*.ts' | \\
  xargs sed -i '' 's/text-text-primary/text-label/g'
find . -name '*.tsx' -o -name '*.ts' | \\
  xargs sed -i '' 's/text-text-secondary/text-label-neutral/g'

# Primary (18개 참조)
find . -name '*.tsx' -o -name '*.ts' | \\
  xargs sed -i '' 's/bg-brand-1/bg-primary/g'
find . -name '*.tsx' -o -name '*.ts' | \\
  xargs sed -i '' 's/bg-brand-2/bg-primary-strong/g'

# Status (24개 참조)
find . -name '*.tsx' -o -name '*.ts' | \\
  xargs sed -i '' 's/text-error-1/text-negative/g'

# 하드코딩 제거
find . -name '*.tsx' -o -name '*.ts' | \\
  xargs sed -i '' 's/bg-\\[#F9F5FF\\]/bg-purple-50/g'

echo "Done. 수동 확인 필요: border-neutral-*, 동적 클래스"`}</code>
      </pre>
      <p>
        대부분의 치환은 자동화가 가능하지만,{" "}
        <strong>
          <code>border-neutral-*</code>처럼 문맥에 따라 매핑이 달라지는 경우는
          수동 검증이 필수
        </strong>
        입니다. <code>border-neutral-400</code>이 강조 보더인지, 인풋 보더인지는
        코드를 봐야 알 수 있습니다.
      </p>
      <p>
        또한 동적 클래스(템플릿 리터럴)가 25개 이상 존재했는데, <code>sed</code>로
        치환은 가능하지만 <code>git diff</code>로 전수 검토가 필요했습니다.
      </p>

      <h3>Phase 3: Alias 제거 + 레거시 정리</h3>
      <p>
        Phase 2 완료 후 QA를 통과하면, Backward Compat Alias를 전부 제거합니다.
        미사용 변수(레거시 Interactive States, 미사용 Status 등)도 함께 정리합니다.
      </p>

      <h2>함정: shadcn UI와의 네임스페이스 충돌</h2>
      <p>
        Phase 1을 설계하던 중, Claude가 먼저 경고를 올렸습니다. &quot;shadcn UI도{" "}
        <code>--color-primary</code>를 사용하고 있어서 충돌이 발생합니다&quot;.
        직접 <code>globals.css</code>를 분석하면서 shadcn의 CSS 변수 선언과 우리
        토큰의 이름이 겹치는 것을 발견한 것입니다.
      </p>
      <pre>
        <code>{`/* shadcn이 정의한 값 */
--color-primary: var(--primary);        /* #2563EB */

/* 우리가 정의한 값 */
--color-primary: var(--color-blue-600); /* #3B82F6 */`}</code>
      </pre>
      <p>
        해결은 Tailwind v4의 <code>@theme inline</code> 블록에서{" "}
        <strong>선언 순서를 제어</strong>하는 것이었습니다. 신규 토큰 선언을
        shadcn 선언 이후에 배치하면 덮어씌워집니다.
      </p>
      <pre>
        <code>{`/* :root에서 shadcn 컴포넌트용 값 설정 */
:root {
  --primary: var(--color-primary-strong);  /* #2563EB */
}

/* @theme inline에서 Tailwind 유틸리티용 값 설정 */
/* shadcn 선언 → 신규 선언 순서로 배치 */
/* 결과: bg-primary는 #3B82F6, shadcn Button은 #2563EB */`}</code>
      </pre>
      <p>
        이렇게 하면 <code>bg-primary</code> 유틸리티 클래스는 우리의 Normal
        색상(#3B82F6)을, shadcn 내부 컴포넌트는 Strong 색상(#2563EB)을 각각
        올바르게 참조합니다.
      </p>

      <h2>디자인 리뷰: Claude가 찾아낸 빈 곳들</h2>
      <p>
        Claude에게 &quot;Figma 디자인 토큰과 코드의 실제 사용을 비교해서 누락된
        토큰을 찾아줘&quot;라고 요청했습니다. Figma의 Color Style과 코드의{" "}
        <code>globals.css</code>, 그리고 110개 컴포넌트를 교차 검증한 결과,
        7개의 블로킹 이슈가 발견되었습니다.
      </p>
      <ul>
        <li>
          <strong>Positive/Success 토큰 부재</strong> — 코드에서 성공 상태
          색상이 8곳 이상 하드코딩되어 있었지만, Figma 토큰이 없었음.{" "}
          <code>text-positive</code>, <code>bg-positive-light</code> 추가.
        </li>
        <li>
          <strong>Secondary 버튼 토큰 부재</strong> — Figma에 Secondary 버튼
          스타일은 있지만 Semantic 토큰이 없었음.{" "}
          <code>bg-secondary</code> 추가.
        </li>
        <li>
          <strong>Link 텍스트 토큰 누락</strong> — <code>text-link</code>가
          7곳에서 사용 중이었지만 신규 매핑이 빠져 있었음.{" "}
          <code>text-label-link</code> 추가.
        </li>
      </ul>
      <p>
        사람이 리뷰했다면 &quot;코드에서 안 쓰니까 괜찮겠지&quot;하고 넘어갔을
        부분입니다. Claude는 <code>grep</code> 결과를 근거로{" "}
        <strong>&quot;코드에서 8곳이 하드코딩되어 있으니 토큰이 필요합니다&quot;</strong>
        라고 정량적으로 제안했습니다. 코드 사용량 분석이 디자인 시스템의 빈 곳을
        채우는 역할까지 한 셈입니다.
      </p>

      <h2>AI에게도 한계는 있다</h2>
      <p>
        Claude가 작성한 <code>sed</code> 스크립트는 대부분의 치환을 자동화하지만,
        몇 가지 케이스는 사람의 판단이 필요했습니다.
      </p>
      <ul>
        <li>
          <strong>다의성 있는 클래스</strong>:{" "}
          <code>border-neutral-300</code>이 인풋 보더인지(→{" "}
          <code>border-line-neutral</code>) 구분선인지(→{" "}
          <code>border-line-alt</code>) 문맥을 봐야 판단 가능
        </li>
        <li>
          <strong>동적 클래스</strong>: 템플릿 리터럴 안의 클래스는{" "}
          <code>sed</code>로 치환되더라도 런타임 동작 검증 필요
        </li>
        <li>
          <strong>hover/active 변형</strong>:{" "}
          <code>hover:bg-brand-1</code> 같은 Tailwind 변형도 함께 치환되는지
          확인 필요
        </li>
      </ul>
      <p>
        결국 <strong>Claude가 스크립트를 실행하고 → <code>git diff</code>를 보여주고 →
        사람이 문맥을 판단하는</strong> 3단계 협업이 가장 안전한 패턴이었습니다.
        AI가 반복 작업을 처리하고, 사람이 의미를 판단하는 역할 분담입니다.
      </p>

      <h2>Claude 활용 요약: 어디에 어떻게 썼나</h2>
      <pre>
        <code>{`| 단계              | Claude가 한 일                        | 사람이 한 일          |
|-------------------|---------------------------------------|---------------------|
| 현황 분석          | grep으로 420개 토큰 사용량 전수 조사     | 결과 확인             |
| 버그 발견          | CSS 변수 미정의 2건 + 색상값 불일치 3건   | 수정 방향 결정        |
| 토큰 설계          | 6섹션 Semantic 구조 + 28개 매핑 테이블   | 네이밍 최종 승인      |
| 디자인 리뷰        | Figma ↔ 코드 교차 검증, 7개 이슈 발견    | 디자이너와 논의       |
| 자동화 스크립트     | sed 기반 18개 치환 규칙 작성             | —                   |
| 클래스 치환         | 스크립트 실행 + git diff 제시            | 문맥 기반 수동 검증    |
| shadcn 충돌 해결   | 충돌 사전 감지 + 선언 순서 해결책 제안     | 최종 구조 결정        |`}</code>
      </pre>

      <h2>정리: AI와 함께하는 대규모 리팩토링 체크리스트</h2>
      <p>이번 경험에서 얻은 실전 체크리스트입니다.</p>
      <ol>
        <li>
          <strong>AI로 정량화</strong> — Claude에게 <code>grep</code> 분석을
          시키세요. 사람이 하루 걸릴 전수 조사를 몇 분에 끝냅니다.
        </li>
        <li>
          <strong>Token Mapping 테이블</strong> — 기존 → 신규 1:1 매핑을
          문서화하세요. 이 테이블이 모든 작업의 기준점이 됩니다.
        </li>
        <li>
          <strong>Backward Compat 레이어</strong> — 신규 토큰을 추가하면서 기존
          토큰을 Alias로 유지하세요. 점진적 전환이 가능해집니다.
        </li>
        <li>
          <strong>자동화 + 수동 검증</strong> — 단순 치환은 스크립트로, 다의성
          있는 케이스는 수동으로. 둘 다 필요합니다.
        </li>
        <li>
          <strong>서드파티 충돌 사전 검토</strong> — shadcn UI 같은 라이브러리가
          같은 변수명을 쓰는지 반드시 확인하세요.
        </li>
        <li>
          <strong>Phase 분리</strong> — 변수 정의 → 클래스 치환 → 레거시
          제거. 한 번에 하지 않는 것이 핵심입니다.
        </li>
      </ol>

      <blockquote>
        <p>
          AI와 대규모 리팩토링을 할 때 핵심은 역할 분담입니다. AI가 전수 조사하고,
          스크립트를 만들고, 반복 실행합니다. 사람은 설계를 결정하고, 문맥을
          판단하고, 최종 승인합니다. &quot;AI가 다 해줘&quot;가 아니라
          &quot;AI와 함께 더 빠르고 안전하게&quot;가 맞는 표현입니다.
        </p>
      </blockquote>
    </>
  );
}
