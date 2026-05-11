import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

const weierstrassPortraitUrl =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Weierstrass.jpg?width=900';

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
      {/* Hero Section with Weierstrass Quote */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
                <ImageWithFallback
                  src={weierstrassPortraitUrl}
                  alt="Karl Weierstrass portrait"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-sm text-indigo-700 font-medium mb-6">
                BLOG
              </span>

              <blockquote className="border-l-4 border-indigo-500 pl-6 mb-8">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
                  시인의 기질을 갖추지 못한 자는
                  <br />
                  결코 진정한 수학자가 될 수 없다.
                </p>
                <p className="mt-5 text-base text-gray-500 leading-relaxed">
                  ... es ist wahr, ein Mathematiker, der nicht etwas Poet ist, wird nimmer ein vollkommener Mathematiker sein.
                </p>
              </blockquote>

              <div className="border-t border-gray-300 pt-6">
                <div className="font-semibold text-xl text-gray-900 mb-1">
                  카를 바이어슈트라스
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  Karl Weierstrass
                </div>
                <div className="text-indigo-600 font-medium text-sm">
                  해석학의 아버지 · 1815-1897
                </div>
              </div>
            </motion.div>
          </div>
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
