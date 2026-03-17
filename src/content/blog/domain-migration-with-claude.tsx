export default function DomainMigrationWithClaude() {
  return (
    <>
      <h2>프론트엔드 개발자가 인프라를 건드리게 된 사연</h2>
      <p>
        <code>social.oldbrand.com</code>에서 서비스하던 프로덕트를{" "}
        <code>newbrand.com</code>으로 이전해야 했습니다. 단순한 URL 변경이 아니라 AWS
        EKS 클러스터, Istio VirtualService, ALB 인증서, Route 53 DNS, OAuth 연동,
        CORS 설정까지 — 인프라 전반을 건드려야 하는 작업이었습니다.
      </p>
      <p>
        문제는 저는 <strong>프론트엔드 개발자</strong>라는 것. Kubernetes{" "}
        <code>kubectl</code> 명령어도 낯설고, Istio Gateway와 VirtualService의
        관계도 잘 몰랐습니다. 그런데 이 작업을{" "}
        <strong>Claude Code와 함께 이틀 만에</strong> DEV + PROD 환경 모두
        완료했습니다.
      </p>

      <h2>작업 범위: 생각보다 훨씬 넓었다</h2>
      <p>처음에는 &quot;도메인만 바꾸면 되겠지&quot;라고 생각했습니다. 하지만 실제로는:</p>
      <pre>
        <code>{`1. ACM SSL 인증서 확인 및 ALB 등록
2. Route 53 DNS A 레코드 (Alias) 생성
3. Istio VirtualService 생성 (newbrand.com → prod-web-service)
4. 기존 도메인 301 리다이렉트 설정
5. 프론트엔드 코드 변경 (7개 파일)
6. 외부 서비스 설정 (Cognito, Google OAuth, Instagram OAuth, reCAPTCHA)
7. 백엔드 CORS 업데이트
8. PROD 전용 서비스 (GA4, Hotjar, Search Console)`}</code>
      </pre>
      <p>
        체크리스트만 30개가 넘었습니다. 한 곳이라도 빠지면 로그인이 안 되거나
        CORS 에러가 터지거나 SEO 점수가 날아갑니다.
      </p>

      <h2>Claude가 한 일: 분석부터 실행까지</h2>
      <h3>1단계: 영향 범위 분석</h3>
      <p>
        Claude에게 &quot;프로젝트에서 <code>oldbrand.com</code> 도메인이 사용되는
        모든 곳을 찾아줘&quot;라고 요청했습니다.{" "}
        <code>grep</code>으로 프론트엔드·백엔드·인프라 설정 파일을 전수 조사해서
        변경이 필요한 파일 목록과 각각의 변경 내용을 정리했습니다.
      </p>
      <pre>
        <code>{`// 변경 전
return isDevMode
  ? 'https://dev-social.oldbrand.com'
  : 'https://social.oldbrand.com';

// 변경 후
return isDevMode
  ? 'https://dev.newbrand.com'
  : 'https://newbrand.com';`}</code>
      </pre>

      <h3>2단계: 인프라 체크리스트 생성</h3>
      <p>
        도메인 마이그레이션에 필요한 모든 단계를 Claude가 문서화했습니다. 각
        단계마다 <strong>&quot;왜 필요한가?&quot;</strong>를 설명해서, 인프라를
        잘 모르는 저도 각 명령어의 의미를 이해하면서 작업할 수 있었습니다.
      </p>
      <pre>
        <code>{`### 3단계: Ingress 인증서 업데이트

#### 왜 필요한가?
- ALB가 새 도메인의 HTTPS 요청을 처리하기 위해 필요
- SNI(Server Name Indication) 지원: 하나의 ALB에서 여러 도메인 서비스
- 기존 인증서 유지: 리다이렉트 시에도 HTTPS 필요`}</code>
      </pre>

      <h3>3단계: 실행 — DEV 먼저, PROD 다음</h3>
      <p>
        DEV 환경에서 먼저 전체 프로세스를 검증한 뒤, PROD에 동일하게 적용했습니다.
        Claude가 각 단계의 <code>kubectl</code> 명령어를 생성하고, 실행 전 백업
        명령어까지 포함해서 롤백 가능한 상태를 유지했습니다.
      </p>
      <pre>
        <code>{`# Ingress 백업 → 인증서 추가 → VirtualService 생성 → 리다이렉트 설정
kubectl get ingress istio-ingress -n istio-system -o yaml > backup.yaml
kubectl patch ingress istio-ingress -n istio-system --type='json' -p='[...]'`}</code>
      </pre>

      <h2>트래픽 흐름: 결과물</h2>
      <pre>
        <code>{`사용자 → DNS(Route 53) → ALB(ACM 인증서) → Istio Gateway → VirtualService → Pod

기존 도메인 접속 시:
social.oldbrand.com → 301 Redirect → newbrand.com`}</code>
      </pre>
      <p>
        기존 도메인으로 접속하면 301 영구 리다이렉트로 새 도메인으로 안내됩니다.
        SEO 점수도 이전되고, 기존 북마크도 정상 동작합니다.
      </p>

      <h2>외부 서비스: 하나도 빠짐없이</h2>
      <p>
        도메인 변경은 코드만의 문제가 아닙니다. OAuth 콜백 URL, reCAPTCHA 도메인,
        GA4 스트림 URL 등 <strong>외부 서비스 설정도 모두 업데이트</strong>해야
        합니다.
      </p>
      <p>
        Claude가 서비스별 체크리스트를 만들어서, 콘솔에서 어디를 클릭해야 하는지까지
        정리해줬습니다. 덕분에 하나도 빠뜨리지 않고 작업할 수 있었습니다.
      </p>

      <h2>배운 점</h2>
      <p>
        이 경험에서 가장 큰 교훈은{" "}
        <strong>
          &quot;모르는 영역이라도 AI와 함께라면 안전하게 해낼 수 있다&quot;
        </strong>
        는 것입니다.
      </p>
      <p>
        Claude는 단순히 명령어를 알려주는 것이 아니라, 각 단계의 &quot;왜&quot;를
        설명하고, 롤백 방법을 준비하고, 테스트 명령어까지 제공했습니다. 프론트엔드
        개발자가 인프라 작업을 하면서도 불안하지 않았던 이유입니다.
      </p>
      <p>
        결과적으로 DEV + PROD 모두 무중단으로 마이그레이션을 완료했고, 작업 전체가
        문서화되어 있어서 나중에 비슷한 작업이 생겨도 즉시 참조할 수 있습니다.
      </p>
    </>
  );
}
