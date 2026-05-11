import { Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import { Header } from "../components/Header";

export function RootLayout() {
  const location = useLocation();
  const isChallengePage = location.pathname.startsWith("/challenges");

  const footerLinkClass = isChallengePage
    ? "text-neutral-400 hover:text-amber-200 transition"
    : "hover:text-indigo-600";

  return (
    <div
      className={`min-h-screen transition-colors duration-[1800ms] ease-in-out ${
        isChallengePage ? "bg-neutral-950" : "bg-white"
      }`}
    >
      {isChallengePage && (
        <motion.div
          key="challenge-theme-reveal"
          aria-hidden="true"
          className="fixed inset-0 z-[80] pointer-events-none"
          initial={{
            opacity: 1,
            background:
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.96), rgba(255,255,255,0.9) 36%, rgba(251,191,36,0.22) 68%, rgba(5,5,5,0.86) 100%)",
          }}
          animate={{
            opacity: 0,
            background:
              "radial-gradient(circle at 50% 20%, rgba(251,191,36,0.28), rgba(23,18,10,0.74) 42%, rgba(5,5,5,0.98) 100%)",
          }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      )}
      <Header />
      <Outlet />

      {/* Footer */}
      <footer
        className={`border-t transition-colors duration-[1800ms] ease-in-out ${
          isChallengePage
            ? "mt-0 border-amber-300/20 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_34%),linear-gradient(180deg,#0a0a0a_0%,#17120a_55%,#050505_100%)] text-neutral-300"
            : "mt-16 border-gray-200 bg-gradient-to-b from-white to-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center text-sm font-bold ${
                    isChallengePage
                      ? "bg-gradient-to-br from-amber-200 via-yellow-500 to-stone-700 text-neutral-950"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  ∀
                </div>
                <h3
                  className={`font-bold ${
                    isChallengePage ? "text-amber-100" : "text-gray-900"
                  }`}
                >
                  ProofHub
                </h3>
              </div>
              <p
                className={`text-sm ${
                  isChallengePage ? "text-neutral-400" : "text-gray-600"
                }`}
              >
                {isChallengePage
                  ? "난제 후원과 검증을 위한 명예로운 수학 커뮤니티"
                  : "고신뢰도 수학 증명을 위한 커뮤니티 플랫폼"}
              </p>
            </div>

            <div>
              <h4
                className={`font-semibold mb-3 ${
                  isChallengePage ? "text-amber-100" : "text-gray-900"
                }`}
              >
                증명 언어
              </h4>
              <ul
                className={`space-y-2 text-sm ${
                  isChallengePage ? "text-neutral-400" : "text-gray-600"
                }`}
              >
                <li><a href="#" className={footerLinkClass}>Lean 4</a></li>
                <li><a href="#" className={footerLinkClass}>Coq</a></li>
                <li><a href="#" className={footerLinkClass}>Isabelle</a></li>
                <li><a href="#" className={footerLinkClass}>Agda</a></li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-semibold mb-3 ${
                  isChallengePage ? "text-amber-100" : "text-gray-900"
                }`}
              >
                커뮤니티
              </h4>
              <ul
                className={`space-y-2 text-sm ${
                  isChallengePage ? "text-neutral-400" : "text-gray-600"
                }`}
              >
                <li><a href="#" className={footerLinkClass}>토론</a></li>
                <li><a href="#" className={footerLinkClass}>기여 가이드</a></li>
                <li><a href="#" className={footerLinkClass}>행동 강령</a></li>
                <li><a href="#" className={footerLinkClass}>FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-semibold mb-3 ${
                  isChallengePage ? "text-amber-100" : "text-gray-900"
                }`}
              >
                리소스
              </h4>
              <ul
                className={`space-y-2 text-sm ${
                  isChallengePage ? "text-neutral-400" : "text-gray-600"
                }`}
              >
                <li><a href="#" className={footerLinkClass}>문서</a></li>
                <li><a href="#" className={footerLinkClass}>튜토리얼</a></li>
                <li><a href="#" className={footerLinkClass}>API</a></li>
                <li><a href="#" className={footerLinkClass}>GitHub</a></li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t mt-8 pt-8 text-center text-sm ${
              isChallengePage
                ? "border-amber-300/15 text-neutral-500"
                : "border-gray-200 text-gray-600"
            }`}
          >
            © 2026 ProofHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
