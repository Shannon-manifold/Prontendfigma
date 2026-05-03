import { HeroSection } from '../components/HeroSection';
import { StorySection } from '../components/StorySection';
import { TheoremCard } from '../components/TheoremCard';
import { StatsCard } from '../components/StatsCard';
import { FilterBar } from '../components/FilterBar';
import { CheckCircle, FileText, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

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
      <HeroSection />
      <StorySection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={CheckCircle}
            label="검증된 정리"
            value="1,247"
            change="+23"
            color="text-green-600"
          />
          <StatsCard
            icon={FileText}
            label="전체 정리"
            value="2,834"
            change="+67"
            color="text-blue-600"
          />
          <StatsCard
            icon={Users}
            label="기여자"
            value="892"
            change="+12"
            color="text-purple-600"
          />
          <StatsCard
            icon={TrendingUp}
            label="검증률"
            value="87.5%"
            change="+2.3%"
            color="text-orange-600"
          />
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Theorems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {theorems.map((theorem, index) => (
            <TheoremCard key={index} {...theorem} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium shadow-sm"
          >
            더 보기
          </motion.button>
        </div>
      </main>
    </>
  );
}
