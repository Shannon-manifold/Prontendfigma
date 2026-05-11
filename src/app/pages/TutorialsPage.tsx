import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowRight, Zap, Layers, PenLine } from 'lucide-react';
import { Link } from 'react-router';

export function TutorialsPage() {
  const tutorials = [
    { id: 'logic-set-theory', title: '수리논리 및 집합론', description: '명제 논리, 술어 논리, 집합의 기본 개념과 연산을 배우고 Lean으로 증명합니다.', level: '입문' as const, duration: '4주', lessons: 12, icon: '∀' },
    { id: 'analysis', title: '해석학', description: '실수의 완비성, 수열의 극한, 연속함수, 미분과 적분의 엄밀한 정의를 학습합니다.', level: '중급' as const, duration: '6주', lessons: 18, icon: '∫' },
    { id: 'linear-algebra', title: '선형대수학', description: '벡터 공간, 선형 변환, 고유값과 고유벡터를 형식적으로 증명하는 방법을 배웁니다.', level: '중급' as const, duration: '5주', lessons: 15, icon: '⊕' },
    { id: 'topology', title: '위상수학', description: '위상 공간, 연속성, 컴팩트성, 연결성 등 위상수학의 기초 개념을 증명 보조기로 탐구합니다.', level: '고급' as const, duration: '8주', lessons: 24, icon: '∞' },
    { id: 'algebra', title: '추상대수학', description: '군, 환, 체의 구조와 성질을 형식적으로 정의하고 증명하는 과정을 학습합니다.', level: '고급' as const, duration: '7주', lessons: 21, icon: '⊗' },
    { id: 'number-theory', title: '정수론', description: '소수, 합동, 디오판토스 방정식 등 정수의 성질을 컴퓨터로 검증하며 배웁니다.', level: '중급' as const, duration: '5주', lessons: 15, icon: 'ℤ' },
  ];

  const levelStyle = {
    '입문': 'bg-green-50 text-green-700 border-green-200',
    '중급': 'bg-blue-50 text-blue-700 border-blue-200',
    '고급': 'bg-purple-50 text-purple-700 border-purple-200',
  };

  const benefits = [
    { icon: Zap, title: '즉각적인 피드백', description: '작성한 증명이 올바른지 실시간으로 확인할 수 있습니다' },
    { icon: Layers, title: '단계별 학습', description: '복잡한 증명을 작은 단계로 나누어 점진적으로 이해합니다' },
    { icon: PenLine, title: '실전 경험', description: '이론만이 아닌 실제로 증명을 작성하며 배웁니다' },
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">튜토리얼</h1>
            <p className="text-gray-500">단계별 인터랙티브 튜토리얼을 통해 수학적 증명을 작성하고 검증하는 방법을 배워보세요</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
              >
                <Link to={`/tutorials/${tutorial.id}`}>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200 h-full">
                    <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-3xl font-serif text-gray-300">{tutorial.icon}</span>
                      <span className={`px-2.5 py-1 rounded border text-xs font-medium ${levelStyle[tutorial.level]}`}>
                        {tutorial.level}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                      <p className="text-sm text-gray-500 mb-5 line-clamp-3 leading-relaxed">{tutorial.description}</p>

                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{tutorial.lessons}개 레슨</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{tutorial.duration}</span>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-1 text-sm text-indigo-600 font-medium"
                      >
                        시작하기 <ArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">왜 증명 보조기로 배워야 할까요?</h2>
            <p className="text-gray-500 mb-10">전통적인 교과서와는 다른 새로운 학습 경험을 제공합니다</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex gap-4"
              >
                <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <benefit.icon className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
