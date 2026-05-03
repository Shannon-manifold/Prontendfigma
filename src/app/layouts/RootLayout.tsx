import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">∀</span>
                </div>
                <h3 className="font-bold text-gray-900">ProofHub</h3>
              </div>
              <p className="text-sm text-gray-600">
                고신뢰도 수학 증명을 위한 커뮤니티 플랫폼
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">증명 언어</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">Lean 4</a></li>
                <li><a href="#" className="hover:text-indigo-600">Coq</a></li>
                <li><a href="#" className="hover:text-indigo-600">Isabelle</a></li>
                <li><a href="#" className="hover:text-indigo-600">Agda</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">커뮤니티</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">토론</a></li>
                <li><a href="#" className="hover:text-indigo-600">기여 가이드</a></li>
                <li><a href="#" className="hover:text-indigo-600">행동 강령</a></li>
                <li><a href="#" className="hover:text-indigo-600">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">리소스</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">문서</a></li>
                <li><a href="#" className="hover:text-indigo-600">튜토리얼</a></li>
                <li><a href="#" className="hover:text-indigo-600">API</a></li>
                <li><a href="#" className="hover:text-indigo-600">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2026 ProofHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
