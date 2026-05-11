import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './ImageWithFallback';

export function HeroSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 py-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm text-gray-500 mb-5 tracking-wide"
            >
              증명 보조기로 만드는 신뢰의 수학
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              증명의 공간,
              <br />
              <span className="text-indigo-600">ShannonManifold</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              Lean, Coq, Isabelle로 검증된 수학 정리를 공유하고,
              전 세계 수학자들과 함께 지식의 경계를 넓혀나가세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/proofs">
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  증명 탐색하기
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
              <Link to="/tutorials">
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  튜토리얼 보기
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-100"
            >
              <div>
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <div className="text-sm text-gray-500">검증된 정리</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">87.5%</div>
                <div className="text-sm text-gray-500">검증률</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-gray-900">4,395</div>
                <div className="text-sm text-gray-500">커뮤니티 멤버</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/5] rounded-lg overflow-hidden bg-gray-100"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1754304342490-2fa390075d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mathematical formulas"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-700 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">최근 검증 완료</div>
                    <div className="text-xs text-gray-500">페르마의 마지막 정리 (n=3)</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
