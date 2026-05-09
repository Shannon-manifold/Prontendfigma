import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Sparkles, Users, Award } from "lucide-react";

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full text-sm text-amber-900 font-medium mb-4">
            우리의 이야기
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            수학의 진실을 함께 찾아가는 여정
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            증명 보조기의 힘으로, 인간의 직관과 컴퓨터의
            정확성이 만나
            <br />
            새로운 수학적 발견의 시대를 열어갑니다.
          </p>
        </motion.div>

        {/* Story cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Sparkles,
              title: "엄밀함의 시작",
              description:
                "모든 증명은 컴퓨터가 검증합니다. 더 이상 애매함은 없습니다. 각 단계는 논리적으로 완벽하게 연결되고, 오류는 즉시 발견됩니다.",
              image:
                "https://images.unsplash.com/photo-1754304342490-2fa390075d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
              color: "from-amber-400 to-orange-500",
            },
            {
              icon: Users,
              title: "함께하는 발견",
              description:
                "전 세계 수학자들이 하나의 공간에서 협력합니다. 당신의 증명은 다른 이의 정리가 되고, 집단 지성은 개인의 한계를 뛰어넘습니다.",
              image:
                "https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb21tdW5pdHklMjBjb2xsYWJvcmF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc3NzUxNzMwNXww&ixlib=rb-4.1.0&q=80&w=1080",
              color: "from-purple-400 to-indigo-500",
            },
            {
              icon: Award,
              title: "영원한 유산",
              description:
                "당신이 남긴 증명은 시간이 지나도 변하지 않는 진리로 남습니다. 미래 세대는 당신의 작업 위에서 더 높이 올라갈 것입니다.",
              image:
                "https://images.unsplash.com/photo-1758872014929-174e4ccdf01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeWluZyUyMHdhcm0lMjBsaWdodCUyMGNvZmZlZXxlbnwxfHx8fDE3Nzc1MTczMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
              color: "from-rose-400 to-pink-500",
            },
          ].map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <motion.div
                  className={`absolute top-6 right-6 w-14 h-14 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <story.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {story.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Parallax quote section */}
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