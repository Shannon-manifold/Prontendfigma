import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

const weierstrassPortraitUrl =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Weierstrass.jpg?width=900';

export function BlogPage() {
  const blogPosts = [
    { title: 'Lean 4로 시작하는 형식 증명', excerpt: '현대 수학의 엄밀성을 컴퓨터로 검증하는 새로운 시대가 열렸습니다. Lean 4의 기초부터 실전 활용까지 자세히 알아봅니다.', author: '김수학', date: '2026-05-01', readTime: '8분', category: '튜토리얼', image: 'https://images.unsplash.com/photo-1754304342490-2fa390075d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: '증명 보조기가 바꾸는 수학의 미래', excerpt: '인간과 기계의 협업으로 수학적 진리를 탐구합니다. 증명 보조기가 수학 연구에 가져온 혁신적 변화를 살펴봅니다.', author: '박증명', date: '2026-04-29', readTime: '12분', category: '인사이트', image: 'https://images.unsplash.com/photo-1758872014929-174e4ccdf01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeWluZyUyMHdhcm0lMjBsaWdodCUyMGNvZmZlZXxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: 'Coq vs Lean: 어떤 증명 보조기를 선택할까?', excerpt: '각 증명 보조기의 특징과 장단점을 비교 분석합니다. 프로젝트에 맞는 최적의 도구를 선택하는 가이드.', author: '이정리', date: '2026-04-27', readTime: '10분', category: '비교 분석', image: 'https://images.unsplash.com/photo-1765408217678-545de3e8941d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: '페르마의 마지막 정리, 컴퓨터로 검증하다', excerpt: '350년간 미해결이었던 난제가 어떻게 형식 증명으로 재탄생했는지 그 여정을 따라갑니다.', author: '정해석', date: '2026-04-25', readTime: '15분', category: '케이스 스터디', image: 'https://images.unsplash.com/photo-1754304342453-927ae7740b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: '커뮤니티와 함께 성장하는 ProofHub', excerpt: '지난 1년간 ProofHub 커뮤니티의 성장 과정과 앞으로의 비전을 공유합니다.', author: '최알고', date: '2026-04-22', readTime: '6분', category: '커뮤니티', image: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb21tdW5pdHklMjBjb2xsYWJvcmF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc3NzUxNzMwNXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: 'Isabelle/HOL 입문 가이드', excerpt: 'HOL 기반의 강력한 증명 보조기 Isabelle을 처음 시작하는 분들을 위한 완벽 가이드입니다.', author: '강기하', date: '2026-04-20', readTime: '11분', category: '튜토리얼', image: 'https://images.unsplash.com/photo-1754304342501-54bad0a6d195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm"
            >
              <ImageWithFallback
                src={weierstrassPortraitUrl}
                alt="Karl Weierstrass portrait"
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
                  시인의 기질을 갖추지 못한 자는
                  <br />
                  결코 진정한 수학자가 될 수 없다.
                </p>
                <p className="mt-4 text-sm text-gray-400 italic leading-relaxed">
                  ... es ist wahr, ein Mathematiker, der nicht etwas Poet ist, wird nimmer ein vollkommener Mathematiker sein.
                </p>
              </blockquote>

              <div className="border-t border-gray-200 pt-5">
                <div className="font-semibold text-gray-900 mb-0.5">카를 바이어슈트라스</div>
                <div className="text-sm text-gray-500">Karl Weierstrass</div>
                <div className="text-sm text-indigo-600 mt-1">해석학의 아버지 · 1815–1897</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">블로그</h2>
            <span className="text-sm text-gray-500">{blogPosts.length}개 포스트</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-white/95 rounded text-xs font-medium text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-base font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1"><User className="w-3 h-3" /><span>{post.author}</span></div>
                      <div className="flex items-center gap-1"><Clock className="w-3 h-3" /><span>{post.readTime}</span></div>
                    </div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-1 text-xs text-indigo-600 font-medium"
                    >
                      읽기 <ArrowRight className="w-3 h-3" />
                    </motion.div>
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
              더 많은 포스트 보기
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
