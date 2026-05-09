import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Check,
  X,
  Lightbulb,
  BookOpen,
  Home,
  CheckCircle
} from 'lucide-react';

export function TutorialDetailPage() {
  const { tutorialId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);

  // 튜토리얼 데이터 (실제로는 API에서 가져올 수 있음)
  const tutorialData: Record<string, any> = {
    'logic-set-theory': {
      title: '수리논리 및 집합론',
      steps: [
        {
          title: '명제와 진리값',
          description: 'Lean에서 명제를 정의하고 진리값을 확인하는 방법을 배웁니다.',
          explanation: '명제는 참 또는 거짓으로 판단할 수 있는 문장입니다. Lean에서는 Prop 타입으로 표현됩니다.',
          starterCode: '-- 명제 P와 Q를 정의하세요\nvariable (P Q : Prop)\n\n-- P와 Q의 논리곱을 증명하세요\nexample (hP : P) (hQ : Q) : P ∧ Q := by\n  -- 여기에 증명을 작성하세요\n  sorry',
          solution: 'variable (P Q : Prop)\n\nexample (hP : P) (hQ : Q) : P ∧ Q := by\n  constructor\n  exact hP\n  exact hQ',
          hint: 'constructor 전술을 사용하면 논리곱을 두 개의 목표로 나눌 수 있습니다.'
        },
        {
          title: '함의와 추론',
          description: '명제 간의 함의 관계를 이해하고 증명합니다.',
          explanation: 'P → Q는 "P이면 Q이다"를 의미합니다. 이를 증명하려면 P를 가정하고 Q를 도출해야 합니다.',
          starterCode: 'variable (P Q R : Prop)\n\n-- 삼단논법을 증명하세요\nexample (h1 : P → Q) (h2 : Q → R) : P → R := by\n  -- 여기에 증명을 작성하세요\n  sorry',
          solution: 'variable (P Q R : Prop)\n\nexample (h1 : P → Q) (h2 : Q → R) : P → R := by\n  intro hP\n  apply h2\n  apply h1\n  exact hP',
          hint: 'intro 전술로 P를 가정하고, apply를 사용해 가설을 적용하세요.'
        },
        {
          title: '부정과 모순',
          description: '부정 명제와 모순을 다루는 방법을 학습합니다.',
          explanation: '¬P는 "P가 아니다"를 의미하며, P → False로 정의됩니다.',
          starterCode: 'variable (P : Prop)\n\n-- 이중 부정 제거를 증명하세요\nexample (h : ¬¬P) : P := by\n  -- 여기에 증명을 작성하세요\n  sorry',
          solution: 'variable (P : Prop)\n\nexample (h : ¬¬P) : P := by\n  by_contra hnP\n  exact h hnP',
          hint: 'by_contra 전술을 사용하면 귀류법으로 증명할 수 있습니다.'
        }
      ]
    },
    'analysis': {
      title: '해석학',
      steps: [
        {
          title: '실수의 완비성',
          description: '실수 체계의 완비성 공리를 이해합니다.',
          explanation: '모든 상한이 존재하는 비어있지 않은 실수 집합은 최소 상한을 가집니다.',
          starterCode: '-- 실수의 최소 상한 성질을 사용하는 예제\nimport Mathlib.Data.Real.Basic\n\n-- 여기에 코드를 작성하세요\nsorry',
          solution: 'import Mathlib.Data.Real.Basic\n\ntheorem sup_example : ∃ x : ℝ, ∀ y : ℝ, y ≤ x := by\n  sorry',
          hint: '실수의 완비성은 Mathlib에서 제공하는 공리를 사용합니다.'
        }
      ]
    },
    'linear-algebra': {
      title: '선형대수학',
      steps: [
        {
          title: '벡터 공간의 정의',
          description: '벡터 공간의 공리를 Lean으로 표현합니다.',
          explanation: '벡터 공간은 벡터의 덧셈과 스칼라 곱셈이 정의된 집합입니다.',
          starterCode: '-- 벡터 공간의 성질을 증명하세요\nimport Mathlib.LinearAlgebra.Basic\n\nsorry',
          solution: 'import Mathlib.LinearAlgebra.Basic\n\n-- 벡터 공간 예제',
          hint: 'Mathlib의 LinearAlgebra 모듈을 참고하세요.'
        }
      ]
    }
  };

  const tutorial = tutorialData[tutorialId || ''] || tutorialData['logic-set-theory'];
  const step = tutorial.steps[currentStep];

  useEffect(() => {
    setUserCode(step.starterCode);
    setIsCorrect(null);
    setShowHint(false);
  }, [currentStep, step.starterCode]);

  const checkCode = () => {
    // 간단한 검증 (실제로는 Lean 서버와 통신)
    const normalized = userCode.trim().replace(/\s+/g, ' ');
    const solutionNormalized = step.solution.trim().replace(/\s+/g, ' ');

    if (normalized === solutionNormalized || !normalized.includes('sorry')) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const nextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/tutorials" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">튜토리얼 목록</span>
          </Link>
          <div className="h-4 w-px bg-gray-600"></div>
          <h1 className="text-white font-semibold">{tutorial.title}</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-400">
            {currentStep + 1} / {tutorial.steps.length}
          </div>
          <div className="flex gap-1">
            {tutorial.steps.map((_: any, index: number) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep
                    ? 'bg-indigo-500'
                    : index < currentStep
                    ? 'bg-green-500'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Instructions */}
        <div className="w-2/5 bg-gray-800 border-r border-gray-700 overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl font-bold text-white">{step.title}</h2>
              </div>
              <p className="text-gray-300">{step.description}</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-semibold text-indigo-400 mb-2">💡 개념 설명</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{step.explanation}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white mb-3">📝 과제</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>왼쪽 코드 에디터에서 증명을 완성하세요</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>sorry를 실제 증명으로 바꾸세요</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>"실행" 버튼으로 검증하세요</span>
                </li>
              </ul>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6"
              >
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-1">힌트</h4>
                    <p className="text-sm text-yellow-200">{step.hint}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <button
              onClick={() => setShowHint(!showHint)}
              className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition flex items-center justify-center gap-2"
            >
              <Lightbulb className="w-4 h-4" />
              {showHint ? '힌트 숨기기' : '힌트 보기'}
            </button>
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="flex-1 flex flex-col bg-gray-900">
          {/* Editor */}
          <div className="flex-1 overflow-hidden">
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full h-full p-6 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none"
              style={{ fontFamily: 'Monaco, Menlo, monospace' }}
              spellCheck={false}
            />
          </div>

          {/* Action Bar */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            {isCorrect !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-4 rounded-lg flex items-center gap-3 ${
                  isCorrect
                    ? 'bg-green-900/30 border border-green-700'
                    : 'bg-red-900/30 border border-red-700'
                }`}
              >
                {isCorrect ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-green-400 font-semibold">정답입니다! 🎉</p>
                      <p className="text-sm text-green-300">다음 단계로 진행하세요</p>
                    </div>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-red-400 font-semibold">다시 시도해보세요</p>
                      <p className="text-sm text-red-300">증명이 완전하지 않습니다</p>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-lg transition flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                이전
              </button>

              <button
                onClick={checkCode}
                className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition font-semibold flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                실행하기
              </button>

              <button
                onClick={nextStep}
                disabled={currentStep === tutorial.steps.length - 1 || !isCorrect}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-lg transition flex items-center gap-2"
              >
                다음
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
