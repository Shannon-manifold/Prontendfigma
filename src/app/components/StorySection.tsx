import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./ImageWithFallback";

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div style={{ y: y1 }} className="relative">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-0"
            >
              {/* Left side - Image */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Georg_Cantor2.jpg/500px-Georg_Cantor2.jpg"
                  alt="Georg Cantor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
              </div>

              {/* Right side - Quote */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="mb-6">
                  <div className="text-7xl text-indigo-600 opacity-20 font-serif leading-none">"</div>
                </div>

                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-8 leading-relaxed italic">
                  수학의 본질은 그 자유로움에 있다.
                  <p className="mt-5 text-base not-italic text-gray-500 leading-relaxed">
                    Das Wesen der Mathematik liegt in ihrer Freiheit.
                  </p>
                </blockquote>

                <div className="border-t border-gray-300 pt-6">
                  <div className="font-semibold text-xl text-gray-900 mb-1">
                    게오르크 칸토어
                  </div>
                  <div className="text-gray-600 text-sm mb-2">
                    Georg Ferdinand Ludwig Philipp Cantor
                  </div>
                  <div className="text-indigo-600 font-medium text-sm">
                    집합론의 창시자 · 1845-1918
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
