import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./ImageWithFallback";

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="bg-slate-50 border-b border-gray-200">
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div style={{ y }}>
          <div className="grid lg:grid-cols-2 gap-0 rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-72 lg:h-auto"
            >
              <ImageWithFallback
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Georg_Cantor2.jpg/500px-Georg_Cantor2.jpg"
                alt="Georg Cantor"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 sm:p-12 flex flex-col justify-center"
            >
              <div className="text-4xl text-gray-200 font-serif leading-none mb-4 select-none">"</div>

              <blockquote className="text-2xl sm:text-3xl font-serif text-gray-900 mb-6 leading-relaxed italic">
                수학의 본질은 그 자유로움에 있다.
              </blockquote>
              <p className="text-sm text-gray-400 italic mb-8">
                Das Wesen der Mathematik liegt in ihrer Freiheit.
              </p>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-gray-900 mb-0.5">게오르크 칸토어</div>
                <div className="text-sm text-gray-500">Georg Ferdinand Ludwig Philipp Cantor</div>
                <div className="text-sm text-indigo-600 mt-1">집합론의 창시자 · 1845–1918</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
