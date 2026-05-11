import { motion } from "motion/react";
import { TheoremCard } from "../components/TheoremCard";
import { FilterBar } from "../components/FilterBar";
import { Search, TrendingUp, Clock, Star } from "lucide-react";

export function ProofsPage() {
  const theorems = [
    { title: "페르마의 마지막 정리 (n=3)", description: "n이 3일 때 x³ + y³ = z³을 만족하는 양의 정수 해가 존재하지 않음을 증명", status: "verified" as const, prover: "김수학", language: "Lean 4", likes: 247, comments: 32, date: "2026-04-28" },
    { title: "리만 제타 함수의 함수방정식", description: "리만 제타 함수 ζ(s)가 만족하는 함수방정식을 형식적으로 증명", status: "verified" as const, prover: "박증명", language: "Isabelle", likes: 189, comments: 24, date: "2026-04-27" },
    { title: "사칙연산의 결합법칙", description: "자연수 집합에서 덧셈과 곱셈의 결합법칙을 귀납법으로 증명", status: "verified" as const, prover: "이정리", language: "Coq", likes: 156, comments: 18, date: "2026-04-26" },
    { title: "골드바흐의 추측 (작은 케이스)", description: "10^8 이하의 모든 짝수는 두 소수의 합으로 표현됨을 컴퓨터 검증", status: "pending" as const, prover: "최알고", language: "Lean 4", likes: 312, comments: 67, date: "2026-04-25" },
    { title: "미적분학의 기본정리", description: "연속함수의 적분과 미분이 서로 역연산임을 증명", status: "verified" as const, prover: "정해석", language: "Coq", likes: 203, comments: 29, date: "2026-04-24" },
    { title: "피타고라스 정리 일반화", description: "n차원 공간에서의 피타고라스 정리 확장 증명", status: "failed" as const, prover: "강기하", language: "Agda", likes: 98, comments: 45, date: "2026-04-23" },
    { title: "유클리드 호제법의 정당성", description: "최대공약수를 구하는 유클리드 알고리즘의 정확성 증명", status: "verified" as const, prover: "윤정수", language: "Lean 4", likes: 178, comments: 21, date: "2026-04-22" },
    { title: "베르누이 수의 재귀 정의", description: "베르누이 수를 재귀적으로 정의하고 주요 성질 증명", status: "verified" as const, prover: "임조합", language: "Isabelle", likes: 145, comments: 15, date: "2026-04-21" },
    { title: "스털링 공식의 점근 전개", description: "계승 함수의 점근적 행동을 스털링 공식으로 근사", status: "pending" as const, prover: "한해석", language: "Coq", likes: 267, comments: 38, date: "2026-04-20" },
  ];

  const stats = [
    { icon: TrendingUp, label: "검증률", value: "87.5%", color: "text-green-700" },
    { icon: Star, label: "인기 정리", value: "1,247", color: "text-yellow-700" },
    { icon: Clock, label: "최근 추가", value: "23개", color: "text-blue-700" },
    { icon: Search, label: "검색 횟수", value: "8.9K", color: "text-purple-700" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">검증된 증명</h1>
            <p className="text-gray-500 mb-8">증명 보조기로 검증한 정리들을 탐색하고 배워보세요</p>

            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 max-w-2xl">
              <Search className="w-5 h-5 text-gray-400 ml-1 flex-shrink-0" />
              <input
                type="text"
                placeholder="정리 이름, 분야, 증명자로 검색..."
                className="flex-1 bg-transparent border-none outline-none text-gray-900 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-1.5 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition-colors font-medium"
              >
                검색
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-center gap-3 px-4 first:pl-0"
              >
                <stat.icon className={`w-5 h-5 ${stat.color} flex-shrink-0`} />
                <div>
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">모든 증명</h2>
            <span className="text-sm text-gray-500">총 {theorems.length}개</span>
          </div>

          <FilterBar />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            {theorems.map((theorem, index) => (
              <TheoremCard key={index} {...theorem} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-1 mt-10">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-3 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50 transition-colors">이전</motion.button>
            {[1, 2, 3, 4, 5].map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 text-sm rounded transition-colors ${page === 1 ? "bg-gray-900 text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-50"}`}
              >
                {page}
              </motion.button>
            ))}
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-3 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50 transition-colors">다음</motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
