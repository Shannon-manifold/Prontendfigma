import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function BlogPage() {
  const blogPosts = [
    {
      title: 'Lean 4로 시작하는 형식 증명',
      excerpt: '현대 수학의 엄밀성을 컴퓨터로 검증하는 새로운 시대가 열렸습니다. Lean 4의 기초부터 실전 활용까지 자세히 알아봅니다.',
      author: '김수학',
      date: '2026-05-01',
      readTime: '8분',
      category: '튜토리얼',
      image: 'https://images.unsplash.com/photo-1754304342490-2fa390075d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: '증명 보조기가 바꾸는 수학의 미래',
      excerpt: '인간과 기계의 협업으로 수학적 진리를 탐구합니다. 증명 보조기가 수학 연구에 가져온 혁신적 변화를 살펴봅니다.',
      author: '박증명',
      date: '2026-04-29',
      readTime: '12분',
      category: '인사이트',
      image: 'https://images.unsplash.com/photo-1758872014929-174e4ccdf01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeWluZyUyMHdhcm0lMjBsaWdodCUyMGNvZmZlZXxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Coq vs Lean: 어떤 증명 보조기를 선택할까?',
      excerpt: '각 증명 보조기의 특징과 장단점을 비교 분석합니다. 프로젝트에 맞는 최적의 도구를 선택하는 가이드.',
      author: '이정리',
      date: '2026-04-27',
      readTime: '10분',
      category: '비교 분석',
      image: 'https://images.unsplash.com/photo-1765408217678-545de3e8941d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: '페르마의 마지막 정리, 컴퓨터로 검증하다',
      excerpt: '350년간 미해결이었던 난제가 어떻게 형식 증명으로 재탄생했는지 그 여정을 따라갑니다.',
      author: '정해석',
      date: '2026-04-25',
      readTime: '15분',
      category: '케이스 스터디',
      image: 'https://images.unsplash.com/photo-1754304342453-927ae7740b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: '커뮤니티와 함께 성장하는 ProofHub',
      excerpt: '지난 1년간 ProofHub 커뮤니티의 성장 과정과 앞으로의 비전을 공유합니다.',
      author: '최알고',
      date: '2026-04-22',
      readTime: '6분',
      category: '커뮤니티',
      image: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb21tdW5pdHklMjBjb2xsYWJvcmF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc3NzUxNzMwNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Isabelle/HOL 입문 가이드',
      excerpt: 'HOL 기반의 강력한 증명 보조기 Isabelle을 처음 시작하는 분들을 위한 완벽 가이드입니다.',
      author: '강기하',
      date: '2026-04-20',
      readTime: '11분',
      category: '튜토리얼',
      image: 'https://images.unsplash.com/photo-1754304342501-54bad0a6d195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              BLOG
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              증명의 세계를 탐험하는
              <br />
              이야기와 인사이트
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              형식 증명의 최신 트렌드, 튜토리얼, 그리고 커뮤니티 스토리를 만나보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-sm text-indigo-600 font-medium"
                      whileHover={{ x: 4 }}
                    >
                      읽기 <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium shadow-lg"
            >
              더 많은 포스트 보기
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
