import { motion } from "motion/react";
import { Award, BookOpen, CheckCircle, Code2, MessageCircle, Star, Users } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

const newtonPortraitUrl =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg?width=900";

export function ContributorsPage() {
  const stats = [
    { label: "전체 기여자", value: "892", icon: Users, color: "text-indigo-600" },
    { label: "검증된 증명", value: "1,247", icon: CheckCircle, color: "text-green-600" },
    { label: "커뮤니티 답변", value: "2,134", icon: MessageCircle, color: "text-blue-600" },
    { label: "학습 자료", value: "186", icon: BookOpen, color: "text-purple-600" },
  ];

  const contributors = [
    { name: "김수학", role: "Lean 4 증명 기여자", field: "정수론 · 대수학", proofs: 128, answers: 342, reputation: "12.8K", badge: "Top Prover", initial: "김" },
    { name: "박증명", role: "Isabelle/HOL 리뷰어", field: "해석학 · 형식 검증", proofs: 97, answers: 286, reputation: "10.4K", badge: "Reviewer", initial: "박" },
    { name: "정해석", role: "Coq 튜토리얼 작성자", field: "미적분학 · 교육", proofs: 84, answers: 221, reputation: "9.7K", badge: "Educator", initial: "정" },
    { name: "최알고", role: "자동화 도구 개발자", field: "알고리즘 · Lean tactic", proofs: 76, answers: 198, reputation: "8.9K", badge: "Builder", initial: "최" },
    { name: "이정리", role: "커뮤니티 멘토", field: "논리학 · 집합론", proofs: 69, answers: 254, reputation: "8.1K", badge: "Mentor", initial: "이" },
    { name: "강기하", role: "Agda 연구 기여자", field: "타입 이론 · 기하학", proofs: 58, answers: 143, reputation: "6.6K", badge: "Researcher", initial: "강" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm"
            >
              <ImageWithFallback
                src={newtonPortraitUrl}
                alt="Isaac Newton portrait"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <blockquote className="border-l-4 border-indigo-500 pl-6 mb-8">
                <p className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
                  거인의 어깨에 올라서서
                  <br />
                  더 넓은 세상을 바라보라.
                </p>
                <p className="mt-4 text-sm text-gray-400 italic leading-relaxed">
                  If I have seen further it is by standing on ye sholders of Giants.
                </p>
              </blockquote>

              <div className="border-t border-gray-200 pt-5">
                <div className="font-semibold text-gray-900 mb-0.5">아이작 뉴턴</div>
                <div className="text-sm text-gray-500">Isaac Newton</div>
                <div className="text-sm text-indigo-600 mt-1">미적분학의 창시자 · 1643–1727</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-gray-100">
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
            <div>
              <h1 className="text-xl font-semibold text-gray-900 mb-1">주요 기여자</h1>
              <p className="text-sm text-gray-500">증명, 답변, 학습 자료로 커뮤니티를 함께 쌓아가는 사람들입니다</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {contributors.map((contributor, index) => (
              <motion.article
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gray-900 text-white rounded flex items-center justify-center text-base font-semibold flex-shrink-0">
                      {contributor.initial}
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900">{contributor.name}</h2>
                      <p className="text-xs text-gray-500">{contributor.role}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded text-xs font-medium">
                    {contributor.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Code2 className="w-3.5 h-3.5 text-gray-400" />
                  <span>{contributor.field}</span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-base font-bold text-gray-900">{contributor.proofs}</div>
                    <div className="text-xs text-gray-400">증명</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900">{contributor.answers}</div>
                    <div className="text-xs text-gray-400">답변</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-base font-bold text-gray-900">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      {contributor.reputation}
                    </div>
                    <div className="text-xs text-gray-400">평판</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 bg-gray-900 rounded-lg p-8 text-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <Award className="w-6 h-6 mb-3 text-gray-400" />
                <h2 className="text-lg font-semibold mb-1">다음 기여자가 되어보세요</h2>
                <p className="text-sm text-gray-400">
                  작은 답변 하나와 짧은 증명 하나가 누군가의 연구를 앞으로 밀어줍니다.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-white text-gray-900 text-sm rounded font-semibold hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                기여 시작하기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
