import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const SECTIONS = [
  {
    title: '제1조 (개인정보의 처리 목적)',
    content: `ShannonManifold(이하 "서비스")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.\n\n① 회원 가입 및 관리\n이용자의 본인 확인, 개인 식별, 불량 회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 민원 처리, 고지·통지를 위해 처리합니다.\n\n② 서비스 제공\n증명 공유, 검증, Q&A, 튜토리얼 등 서비스 제공을 위해 처리합니다.\n\n③ 마케팅 및 광고 활용\n신규 서비스 안내, 이벤트 및 광고성 정보 제공(동의자에 한함)을 위해 처리합니다.`,
  },
  {
    title: '제2조 (처리하는 개인정보의 항목)',
    content: `① 서비스는 회원가입, 원활한 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.\n\n필수 항목:\n  - 이메일 주소, 비밀번호, 닉네임\n\n선택 항목:\n  - 프로필 사진, 소속 기관, 연구 분야\n\n② 서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 방문 기록 등이 자동으로 생성·수집될 수 있습니다.\n\n③ GitHub 또는 Google 소셜 로그인 이용 시 해당 서비스로부터 이메일, 닉네임, 프로필 이미지 등의 정보가 수집될 수 있습니다.`,
  },
  {
    title: '제3조 (개인정보의 처리 및 보유 기간)',
    content: `① 서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.\n\n② 회원 탈퇴 시 개인정보는 즉시 삭제됩니다. 단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보존됩니다.\n\n관련 법령에 의한 보존 기간:\n  - 계약 또는 청약철회에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)\n  - 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (동법)\n  - 로그인 기록: 3개월 (통신비밀보호법)`,
  },
  {
    title: '제4조 (개인정보의 제3자 제공)',
    content: `① 서비스는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.\n\n② 현재 서비스는 개인정보를 제3자에게 제공하고 있지 않습니다.`,
  },
  {
    title: '제5조 (개인정보처리의 위탁)',
    content: `① 서비스는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁할 수 있습니다.\n\n수탁자: 클라우드 인프라 제공업체 (AWS 등)\n위탁 업무: 서버 운영 및 데이터 저장\n\n② 서비스는 위탁 계약 시 개인정보 보호법 제26조에 따라 위탁 업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한 등 사항을 계약서에 명시하고 있습니다.`,
  },
  {
    title: '제6조 (정보주체의 권리·의무 및 행사 방법)',
    content: `① 정보주체는 서비스에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.\n  - 개인정보 열람 요구\n  - 오류 등이 있을 경우 정정 요구\n  - 삭제 요구\n  - 처리 정지 요구\n\n② 제1항에 따른 권리 행사는 서비스에 대해 개인정보 보호법 시행령 제41조 제1항에 따라 서면, 전자우편 등을 통하여 할 수 있으며 서비스는 이에 대해 지체 없이 조치하겠습니다.\n\n③ 권리 행사 문의: privacy@shannonmanifold.io`,
  },
  {
    title: '제7조 (개인정보의 파기)',
    content: `① 서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.\n\n② 파기 방법\n  - 전자적 파일 형태로 기록·저장된 개인정보: 기록을 재생할 수 없도록 기술적 방법으로 파기\n  - 종이 문서에 기록·저장된 개인정보: 분쇄기로 분쇄하거나 소각`,
  },
  {
    title: '제8조 (개인정보의 안전성 확보조치)',
    content: `서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.\n\n기술적 조치:\n  - 개인정보 처리 시스템에 대한 접근 권한 관리\n  - 개인정보의 암호화 (비밀번호는 단방향 암호화하여 저장)\n  - 보안 프로그램 설치 및 주기적 갱신·점검\n  - 개인정보의 암호화 전송 (HTTPS)\n\n관리적 조치:\n  - 개인정보 취급 직원의 최소화 및 교육\n  - 개인정보 보호 지침 수립 및 시행`,
  },
  {
    title: '제9조 (쿠키의 설치·운영 및 거부)',
    content: `① 서비스는 이용자에게 개별화된 서비스를 제공하기 위해 이용자의 정보를 저장하고 수시로 불러오는 쿠키(cookie)를 사용합니다.\n\n② 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.\n\n③ 다만 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부 서비스는 이용에 어려움이 있을 수 있습니다.`,
  },
  {
    title: '제10조 (개인정보 보호책임자)',
    content: `① 서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n개인정보 보호책임자\n  - 성명: ShannonManifold 운영팀\n  - 이메일: privacy@shannonmanifold.io\n\n② 정보주체께서는 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.`,
  },
  {
    title: '제11조 (개인정보 처리방침의 변경)',
    content: `① 이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행일로부터 7일 전부터 공지사항을 통하여 고지합니다.\n\n② 다만, 이용자의 권리에 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.\n\n시행일: 2026년 1월 1일\n최종 수정: 2026년 5월 1일`,
  },
];

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-gray-900 flex items-center justify-center text-sm font-bold text-white">∀</div>
          <span className="text-sm font-semibold text-gray-900">ShannonManifold</span>
        </Link>
        <Link to="/register" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          돌아가기
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10 pb-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">개인정보 처리방침</h1>
          <p className="text-sm text-gray-500">시행일: 2026년 1월 1일 · 최종 수정: 2026년 5월 1일</p>
        </div>

        <div className="mb-10 p-5 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">목차</p>
          <ol className="space-y-1">
            {SECTIONS.map((s, i) => (
              <li key={i}>
                <a href={`#section-${i}`} className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <section key={i} id={`section-${i}`}>
              <h2 className="text-base font-semibold text-gray-900 mb-3">{s.title}</h2>
              <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{s.content}</div>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-xs text-gray-400">
          문의: privacy@shannonmanifold.io
        </div>
      </div>
    </div>
  );
}
