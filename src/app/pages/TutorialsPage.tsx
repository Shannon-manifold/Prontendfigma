import { motion } from 'motion/react';
import { BookOpen, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function TutorialsPage() {
  const tutorials = [
    {
      id: 'logic-set-theory',
      title: '수리논리 및 집합론',
      description: '명제 논리, 술어 논리, 집합의 기본 개념과 연산을 배우고 Lean으로 증명합니다.',
      level: '입문',
      duration: '4주',
      lessons: 12,
      color: 'from-blue-500 to-indigo-600',
      icon: '∀'
    },
    {
      id: 'analysis',
      title: '해석학',
      description: '실수의 완비성, 수열의 극한, 연속함수, 미분과 적분의 엄밀한 정의를 학습합니다.',
      level: '중급',
      duration: '6주',
      lessons: 18,
      color: 'from-purple-500 to-pink-600',
      icon: '∫'
    },
    {
      id: 'linear-algebra',
      title: '선형대수학',
      description: '벡터 공간, 선형 변환, 고유값과 고유벡터를 형식적으로 증명하는 방법을 배웁니다.',
      level: '중급',
      duration: '5주',
      lessons: 15,
      color: 'from-green-500 to-teal-600',
      icon: '⊕'
    },
    {
      id: 'topology',
      title: '위상수학',
      description: '위상 공간, 연속성, 컴팩트성, 연결성 등 위상수학의 기초 개념을 증명 보조기로 탐구합니다.',
      level: '고급',
      duration: '8주',
      lessons: 24,
      color: 'from-orange-500 to-red-600',
      icon: '∞'
    },
    {
      id: 'algebra',
      title: '추상대수학',
      description: '군, 환, 체의 구조와 성질을 형식적으로 정의하고 증명하는 과정을 학습합니다.',
      level: '고급',
      duration: '7주',
      lessons: 21,
      color: 'from-rose-500 to-pink-600',
      icon: '⊗'
    },
    {
      id: 'number-theory',
      title: '정수론',
      description: '소수, 합동, 디오판토스 방정식 등 정수의 성질을 컴퓨터로 검증하며 배웁니다.',
      level: '중급',
      duration: '5주',
      lessons: 15,
      color: 'from-cyan-500 to-blue-600',
      icon: 'ℤ'
    }
  ];

  const levelColors = {
    '입문': 'bg-green-100 text-green-700 border-green-200',
    '중급': 'bg-blue-100 text-blue-700 border-blue-200',
    '고급': 'bg-purple-100 text-purple-700 border-purple-200'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {['∀', '∃', '∫', '∑', '∞', '≡'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-8xl font-serif"
              style={{
                left: `${(i * 20) % 90}%`,
                top: `${(i * 30) % 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              INTERACTIVE TUTORIALS
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              증명 보조기로 배우는
              <br />
              엄밀한 수학
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              단계별 인터랙티브 튜토리얼을 통해 수학적 증명을 작성하고 검증하는 방법을 배워보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/tutorials/${tutorial.id}`}>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`h-32 bg-gradient-to-r ${tutorial.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <span className="text-6xl text-white relative z-10">{tutorial.icon}</span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{tutorial.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColors[tutorial.level as keyof typeof levelColors]}`}>
                          {tutorial.level}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {tutorial.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{tutorial.lessons} 레슨</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-sm text-indigo-600 font-semibold"
                        whileHover={{ x: 4 }}
                      >
                        시작하기 <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              왜 증명 보조기로 배워야 할까요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              전통적인 교과서와는 다른 새로운 학습 경험을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '즉각적인 피드백',
                description: '작성한 증명이 올바른지 실시간으로 확인할 수 있습니다',
                icon: '⚡'
              },
              {
                title: '단계별 학습',
                description: '복잡한 증명을 작은 단계로 나누어 점진적으로 이해합니다',
                icon: '📚'
              },
              {
                title: '실전 경험',
                description: '이론만이 아닌 실제로 증명을 작성하며 배웁니다',
                icon: '🎯'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
