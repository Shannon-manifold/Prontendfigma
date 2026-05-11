import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const SECTIONS = [
  {
    title: '제1조 (목적)',
    content: `이 약관은 ShannonManifold(이하 "서비스")가 제공하는 수학 증명 커뮤니티 플랫폼의 이용과 관련하여 서비스와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.`,
  },
  {
    title: '제2조 (정의)',
    content: `① "서비스"란 ShannonManifold가 제공하는 증명 공유, 검증, Q&A, 튜토리얼 등 일체의 서비스를 의미합니다.\n② "이용자"란 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.\n③ "회원"이란 서비스에 접속하여 이 약관에 동의하고 계정을 등록한 자를 말합니다.\n④ "증명"이란 회원이 Lean 4, Coq, Isabelle, Agda 등 증명 보조기로 작성·검증하여 서비스에 제출한 수학적 증명 파일 및 관련 설명을 말합니다.`,
  },
  {
    title: '제3조 (약관의 게시와 개정)',
    content: `① 서비스는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.\n② 서비스는 관련 법령을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.\n③ 약관을 개정하는 경우 적용 일자 및 개정 사유를 명시하여 현행 약관과 함께 서비스 공지사항에 게시합니다. 중요한 내용의 변경인 경우 이메일로도 고지합니다.\n④ 개정 약관은 적용 일자 이후 최초 이용 시점부터 적용됩니다.`,
  },
  {
    title: '제4조 (회원가입)',
    content: `① 이용자는 서비스가 정한 절차에 따라 회원가입 신청을 합니다.\n② 서비스는 다음에 해당하는 경우 가입을 거절할 수 있습니다.\n  - 실명이 아닌 가명 또는 타인의 정보를 도용한 경우\n  - 허위 정보를 기재한 경우\n  - 이전에 이 약관 위반으로 서비스 이용이 제한된 경우\n③ 회원가입은 만 14세 이상인 자가 신청할 수 있습니다.`,
  },
  {
    title: '제5조 (서비스의 제공 및 변경)',
    content: `① 서비스는 다음 업무를 수행합니다.\n  - 증명 보조기로 검증된 수학 증명의 등록 및 공유\n  - 증명에 대한 커뮤니티 리뷰 및 토론\n  - 수학 관련 질문과 답변(Q&A)\n  - 증명 보조기 튜토리얼 제공\n  - 미해결 난제 후원 및 추적\n② 서비스는 기술적 필요 또는 운영상 필요에 따라 제공하는 서비스의 내용을 변경할 수 있습니다.`,
  },
  {
    title: '제6조 (이용자의 의무)',
    content: `이용자는 다음 행위를 하여서는 안 됩니다.\n  - 타인의 정보 도용\n  - 서비스에서 얻은 정보를 서비스의 사전 승낙 없이 복제·유통하는 행위\n  - 서비스의 저작권 등 지식재산권을 침해하는 행위\n  - 허위 또는 검증되지 않은 증명을 고의로 제출하는 행위\n  - 다른 이용자를 비방하거나 명예를 훼손하는 행위\n  - 기타 불법적이거나 부당한 행위`,
  },
  {
    title: '제7조 (콘텐츠의 저작권)',
    content: `① 회원이 서비스에 게시한 증명, 답변, 댓글 등 콘텐츠의 저작권은 해당 회원에게 귀속됩니다.\n② 회원은 서비스에 콘텐츠를 게시함으로써 서비스가 해당 콘텐츠를 서비스 내에서 사용·복제·수정·배포할 수 있도록 비독점적이고 무상의 라이선스를 부여합니다.\n③ 서비스가 게시한 증명·튜토리얼 등 서비스 자체 콘텐츠의 저작권은 서비스에 귀속됩니다.`,
  },
  {
    title: '제8조 (서비스 이용 제한)',
    content: `서비스는 회원이 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해하는 경우 서비스 이용을 경고, 일시정지, 영구정지 등으로 제한할 수 있습니다.`,
  },
  {
    title: '제9조 (면책조항)',
    content: `① 서비스는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.\n② 서비스는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대해 책임지지 않습니다.\n③ 서비스에 게시된 증명의 수학적 정확성은 증명 보조기에 의해 검증되나, 그 수학적 해석 및 적용에 대한 책임은 이용자에게 있습니다.`,
  },
  {
    title: '제10조 (준거법 및 관할)',
    content: `이 약관과 관련한 분쟁은 대한민국 법을 준거법으로 하며, 서비스 본사 소재지를 관할하는 법원을 합의 관할 법원으로 합니다.`,
  },
];

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 상단 바 */}
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
        {/* 헤더 */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">이용약관</h1>
          <p className="text-sm text-gray-500">시행일: 2026년 1월 1일 · 최종 수정: 2026년 5월 1일</p>
        </div>

        {/* 목차 */}
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

        {/* 본문 */}
        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <section key={i} id={`section-${i}`}>
              <h2 className="text-base font-semibold text-gray-900 mb-3">{s.title}</h2>
              <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{s.content}</div>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-xs text-gray-400">
          문의: legal@shannonmanifold.io
        </div>
      </div>
    </div>
  );
}
