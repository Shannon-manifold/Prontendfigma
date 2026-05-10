import { motion } from "motion/react";
import { TheoremCard } from "../components/TheoremCard";
import { FilterBar } from "../components/FilterBar";
import { Search, TrendingUp, Clock, Star } from "lucide-react";

export function ProofsPage() {
  const theorems = [
    {
      title: "페르마의 마지막 정리 (n=3)",
      description:
        "n이 3일 때 x³ + y³ = z³을 만족하는 양의 정수 해가 존재하지 않음을 증명",
      status: "verified" as const,
      prover: "김수학",
      language: "Lean 4",
      likes: 247,
      comments: 32,
      date: "2026-04-28",
    },
    {
      title: "리만 제타 함수의 함수방정식",
      description:
        "리만 제타 함수 ζ(s)가 만족하는 함수방정식을 형식적으로 증명",
      status: "verified" as const,
      prover: "박증명",
      language: "Isabelle",
      likes: 189,
      comments: 24,
      date: "2026-04-27",
    },
    {
      title: "사칙연산의 결합법칙",
      description:
        "자연수 집합에서 덧셈과 곱셈의 결합법칙을 귀납법으로 증명",
      status: "verified" as const,
      prover: "이정리",
      language: "Coq",
      likes: 156,
      comments: 18,
      date: "2026-04-26",
    },
    {
      title: "골드바흐의 추측 (작은 케이스)",
      description:
        "10^8 이하의 모든 짝수는 두 소수의 합으로 표현됨을 컴퓨터 검증",
      status: "pending" as const,
      prover: "최알고",
      language: "Lean 4",
      likes: 312,
      comments: 67,
      date: "2026-04-25",
    },
    {
      title: "미적분학의 기본정리",
      description:
        "연속함수의 적분과 미분이 서로 역연산임을 증명",
      status: "verified" as const,
      prover: "정해석",
      language: "Coq",
      likes: 203,
      comments: 29,
      date: "2026-04-24",
    },
    {
      title: "피타고라스 정리 일반화",
      description: "n차원 공간에서의 피타고라스 정리 확장 증명",
      status: "failed" as const,
      prover: "강기하",
      language: "Agda",
      likes: 98,
      comments: 45,
      date: "2026-04-23",
    },
    {
      title: "유클리드 호제법의 정당성",
      description:
        "최대공약수를 구하는 유클리드 알고리즘의 정확성 증명",
      status: "verified" as const,
      prover: "윤정수",
      language: "Lean 4",
      likes: 178,
      comments: 21,
      date: "2026-04-22",
    },
    {
      title: "베르누이 수의 재귀 정의",
      description:
        "베르누이 수를 재귀적으로 정의하고 주요 성질 증명",
      status: "verified" as const,
      prover: "임조합",
      language: "Isabelle",
      likes: 145,
      comments: 15,
      date: "2026-04-21",
    },
    {
      title: "스털링 공식의 점근 전개",
      description:
        "계승 함수의 점근적 행동을 스털링 공식으로 근사",
      status: "pending" as const,
      prover: "한해석",
      language: "Coq",
      likes: 267,
      comments: 38,
      date: "2026-04-20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {["∀", "∃", "∫", "∑", "∞", "≡", "∈", "⊂"].map(
            (symbol, i) => (
              <motion.div
                key={i}
                className="absolute text-8xl font-serif"
                style={{
                  left: `${(i * 13 + 5) % 90}%`,
                  top: `${(i * 17 + 10) % 80}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 5, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {symbol}
              </motion.div>
            ),
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              VERIFIED PROOFS
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              검증된 수학 증명의
              <br />
              보물창고
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              증명 보조기로 검증한 정리들을 탐색하고 배워보세요
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-xl">
                <Search className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="정리 이름, 분야, 증명자로 검색..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 text-lg"
                />
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
                  검색
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                label: "검증률",
                value: "87.5%",
                color: "text-green-600",
              },
              {
                icon: Star,
                label: "인기 정리",
                value: "1,247",
                color: "text-yellow-600",
              },
              {
                icon: Clock,
                label: "최근 추가",
                value: "23개",
                color: "text-blue-600",
              },
              {
                icon: Search,
                label: "검색 횟수",
                value: "8.9K",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon
                  className={`w-8 h-8 ${stat.color} mx-auto mb-2`}
                />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              모든 증명
            </h2>
            <p className="text-gray-600">
              총 {theorems.length}개의 증명이 있습니다
            </p>
          </div>

          {/* Filter Bar */}
          <FilterBar />

          {/* Theorems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {theorems.map((theorem, index) => (
              <TheoremCard key={index} {...theorem} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              이전
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg transition ${
                  page === 1
                    ? "bg-indigo-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              다음
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}