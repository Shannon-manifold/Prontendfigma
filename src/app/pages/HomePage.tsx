import { StorySection } from '../components/StorySection';
import { TheoremCard } from '../components/TheoremCard';

export function HomePage() {
  const theorems = [
    {
      title: '페르마의 마지막 정리 (n=3)',
      description: 'n이 3일 때 x³ + y³ = z³을 만족하는 양의 정수 해가 존재하지 않음을 증명',
      status: 'verified' as const,
      prover: '김수학',
      language: 'Lean 4',
      likes: 247,
      comments: 32,
      date: '2026-04-28'
    },
    {
      title: '리만 제타 함수의 함수방정식',
      description: '리만 제타 함수 ζ(s)가 만족하는 함수방정식을 형식적으로 증명',
      status: 'verified' as const,
      prover: '박증명',
      language: 'Isabelle',
      likes: 189,
      comments: 24,
      date: '2026-04-27'
    },
    {
      title: '사칙연산의 결합법칙',
      description: '자연수 집합에서 덧셈과 곱셈의 결합법칙을 귀납법으로 증명',
      status: 'verified' as const,
      prover: '이정리',
      language: 'Coq',
      likes: 156,
      comments: 18,
      date: '2026-04-26'
    },
    {
      title: '골드바흐의 추측 (작은 케이스)',
      description: '10^8 이하의 모든 짝수는 두 소수의 합으로 표현됨을 컴퓨터 검증',
      status: 'pending' as const,
      prover: '최알고',
      language: 'Lean 4',
      likes: 312,
      comments: 67,
      date: '2026-04-25'
    },
    {
      title: '미적분학의 기본정리',
      description: '연속함수의 적분과 미분이 서로 역연산임을 증명',
      status: 'verified' as const,
      prover: '정해석',
      language: 'Coq',
      likes: 203,
      comments: 29,
      date: '2026-04-24'
    },
    {
      title: '피타고라스 정리 일반화',
      description: 'n차원 공간에서의 피타고라스 정리 확장 증명',
      status: 'failed' as const,
      prover: '강기하',
      language: 'Agda',
      likes: 98,
      comments: 45,
      date: '2026-04-23'
    }
  ];

  return (
    <>
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-4">
            ABOUT
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ShannonManifold
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            ShannonManifold는 증명 보조기로 검증한 수학 정리, 난제, 질문과 답변을
            한곳에 모아 신뢰할 수 있는 수학 지식을 함께 쌓는 커뮤니티입니다.
          </p>
        </div>
      </section>

      <StorySection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            최근 정리
          </h2>
          <p className="text-gray-600">
            커뮤니티에서 검증하고 공유한 수학 정리입니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {theorems.map((theorem, index) => (
            <TheoremCard key={index} {...theorem} />
          ))}
        </div>
      </main>
    </>
  );
}
