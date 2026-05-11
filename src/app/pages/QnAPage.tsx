import { motion } from "motion/react";
import { MessageCircle, ThumbsUp, Eye, Calendar, User, Award } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function QnAPage() {
  const questions = [
    { title: "Lean 4에서 귀납적 정의를 사용하는 방법", description: "자연수를 귀납적으로 정의하려고 하는데 syntax 오류가 계속 발생합니다. inductive 키워드 사용법을 알려주세요.", author: "김초보", date: "2026-05-08", views: 234, answers: 5, likes: 12, tags: ["Lean 4", "귀납법", "초보"], status: "answered" },
    { title: "Coq에서 리스트 연산 증명 시 막힌 부분", description: "두 리스트를 concat한 결과의 길이가 각 길이의 합과 같다는 것을 증명하고 있는데, induction 후 simplify가 안됩니다.", author: "박증명", date: "2026-05-07", views: 189, answers: 3, likes: 8, tags: ["Coq", "리스트", "귀납법"], status: "answered" },
    { title: "실수의 완비성을 Isabelle로 표현하려면?", description: "해석학 공부 중인데, 실수의 완비성 공리를 Isabelle/HOL에서 어떻게 표현하는지 궁금합니다. Mathlib 같은 라이브러리가 있나요?", author: "이해석", date: "2026-05-06", views: 312, answers: 7, likes: 19, tags: ["Isabelle", "해석학", "실수"], status: "answered" },
    { title: "mathlib4 업데이트 후 증명이 깨졌어요", description: "mathlib4를 최신 버전으로 업데이트했더니 기존에 작동하던 증명들이 에러를 냅니다. 마이그레이션 가이드가 있을까요?", author: "정개발", date: "2026-05-05", views: 445, answers: 2, likes: 15, tags: ["Lean 4", "mathlib", "버전관리"], status: "open" },
    { title: "함수형 프로그래밍 경험 없이 Lean 배우기", description: "수학 전공자인데 프로그래밍은 Python만 해봤습니다. 함수형 프로그래밍 개념 없이 Lean을 배우기 어려울까요?", author: "최수학", date: "2026-05-04", views: 567, answers: 11, likes: 23, tags: ["Lean 4", "초보", "학습방법"], status: "answered" },
    { title: "Agda의 dependent type과 Lean의 차이점", description: "Agda와 Lean 모두 dependent type을 지원하는데, 실제 사용 시 어떤 차이가 있나요? 각각의 장단점이 궁금합니다.", author: "강타입", date: "2026-05-03", views: 298, answers: 4, likes: 16, tags: ["Lean 4", "Agda", "타입이론"], status: "answered" },
    { title: "위상수학 정리를 Lean으로 형식화하는 프로젝트", description: "학부 위상수학 교재의 주요 정리들을 Lean으로 형식화하는 프로젝트를 시작하려고 합니다. 조언 부탁드립니다.", author: "윤위상", date: "2026-05-02", views: 234, answers: 6, likes: 21, tags: ["Lean 4", "위상수학", "프로젝트"], status: "answered" },
    { title: "tactic 작성법이 너무 어려워요", description: "Lean에서 반복되는 증명 패턴을 자동화하려고 custom tactic을 만들려는데, meta programming이 너무 어렵습니다.", author: "임메타", date: "2026-05-01", views: 178, answers: 0, likes: 5, tags: ["Lean 4", "tactic", "메타프로그래밍"], status: "open" },
  ];

  const statusStyle = {
    answered: "bg-green-50 text-green-700 border-green-200",
    open: "bg-blue-50 text-blue-700 border-blue-200",
  };

  const statusLabel = {
    answered: "답변완료",
    open: "답변대기",
  };

  const statItems = [
    { label: "전체 질문", value: "2,847", icon: MessageCircle },
    { label: "답변 완료", value: "2,134", icon: Award },
    { label: "오늘의 질문", value: "23", icon: Calendar },
    { label: "활성 사용자", value: "456", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-[288px_1fr] gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-72 rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
                <ImageWithFallback
                  src="https://upload.wikimedia.org/wikipedia/commons/7/79/Hilbert.jpg"
                  alt="David Hilbert"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <blockquote className="border-l-4 border-indigo-500 pl-6 mb-8">
                <p className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
                  우리는 알아야만 한다,
                  <br />
                  우리는 알게 될 것이다.
                </p>
                <p className="mt-4 text-sm text-gray-400 italic">
                  Wir müssen wissen. Wir werden wissen.
                </p>
              </blockquote>

              <div className="border-t border-gray-200 pt-5">
                <div className="font-semibold text-gray-900 mb-0.5">다비트 힐베르트</div>
                <div className="text-sm text-gray-500">David Hilbert</div>
                <div className="text-sm text-indigo-600 mt-1">20세기 수학의 선구자 · 1862–1943</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">커뮤니티 질문</h2>
              <p className="text-sm text-gray-500">증명 보조기 사용 중 궁금한 점을 함께 해결해요</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition-colors font-medium"
            >
              질문하기
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {statItems.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs text-gray-500">{stat.label}</span>
                </div>
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            {questions.map((question, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-semibold text-gray-900 flex-1 hover:text-indigo-600 transition-colors">
                    {question.title}
                  </h3>
                  <span className={`px-2.5 py-1 rounded border text-xs font-medium flex-shrink-0 ${statusStyle[question.status as keyof typeof statusStyle]}`}>
                    {statusLabel[question.status as keyof typeof statusLabel]}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">{question.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {question.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" /><span>{question.author}</span></div>
                    <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /><span>{question.date}</span></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /><span>{question.views}</span></div>
                    <div className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /><span>{question.answers}</span></div>
                    <div className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /><span>{question.likes}</span></div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors font-medium"
            >
              더 많은 질문 보기
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
