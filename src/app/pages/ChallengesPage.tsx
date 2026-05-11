import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeDollarSign,
  Clock,
  Gem,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

const wilesPortraitUrl =
  "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjBfMjk3/MDAxNTU4MzY0MjM2NDg3.lPmwKG7feBv7t1-t2EdCbD9V5OWEfBhgFF-V5-9IA-wg.-NA6WYy5LTJPXUDIVgNppKR_04S4Gd8O8RDh4DUa060g.PNG.math1505tj/SE-a2d185ee-3faf-4149-89b7-e6698557d5d6.png?type=w800";

export function ChallengesPage() {
  const challenges = [
    {
      title: "리만 가설",
      field: "해석적 정수론",
      description:
        "리만 제타 함수의 비자명한 영점이 모두 실수부 1/2 위에 놓인다는 난제입니다.",
      prize: "$1,000,000",
      sponsorPool: "$742,500",
      backers: 1284,
      progress: 74,
      difficulty: "Millennium",
      proofSystem: "Lean 4",
      accent: "from-amber-300 to-yellow-500",
    },
    {
      title: "P 대 NP 문제",
      field: "계산 복잡도 이론",
      description:
        "빠르게 검증할 수 있는 모든 문제가 빠르게 풀릴 수도 있는지 묻는 컴퓨터 과학의 핵심 난제입니다.",
      prize: "$1,000,000",
      sponsorPool: "$681,200",
      backers: 997,
      progress: 68,
      difficulty: "Millennium",
      proofSystem: "Coq",
      accent: "from-emerald-300 to-teal-500",
    },
    {
      title: "버치-스위너턴다이어 추측",
      field: "대수기하 · 정수론",
      description:
        "타원곡선의 유리점 구조와 L-함수의 영점 차수가 깊게 연결되어 있다는 추측입니다.",
      prize: "$1,000,000",
      sponsorPool: "$528,900",
      backers: 763,
      progress: 53,
      difficulty: "Millennium",
      proofSystem: "Isabelle",
      accent: "from-cyan-300 to-blue-500",
    },
    {
      title: "호지 추측",
      field: "대수기하",
      description:
        "복소 대수다양체의 특정 코호몰로지 클래스가 대수적 순환으로 표현되는지 묻습니다.",
      prize: "$1,000,000",
      sponsorPool: "$419,300",
      backers: 512,
      progress: 42,
      difficulty: "Millennium",
      proofSystem: "Lean 4",
      accent: "from-fuchsia-300 to-rose-500",
    },
    {
      title: "나비에-스토크스 존재성과 매끄러움",
      field: "편미분방정식",
      description:
        "3차원 비압축성 유체 방정식의 해가 항상 존재하고 매끄러운지 밝히는 문제입니다.",
      prize: "$1,000,000",
      sponsorPool: "$390,600",
      backers: 448,
      progress: 39,
      difficulty: "Millennium",
      proofSystem: "Agda",
      accent: "from-orange-300 to-red-500",
    },
    {
      title: "양-밀스 질량 간극",
      field: "수리물리",
      description:
        "양-밀스 이론의 엄밀한 구성과 양의 질량 간극 존재를 증명하는 문제입니다.",
      prize: "$1,000,000",
      sponsorPool: "$356,800",
      backers: 391,
      progress: 36,
      difficulty: "Millennium",
      proofSystem: "Lean 4",
      accent: "from-violet-300 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      <section className="relative border-b border-white/10">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #050505 0%, #111827 42%, #3f2f12 100%)",
              "linear-gradient(135deg, #050505 0%, #11201b 48%, #2d2147 100%)",
              "linear-gradient(135deg, #050505 0%, #18181b 46%, #123233 100%)",
              "linear-gradient(135deg, #050505 0%, #111827 42%, #3f2f12 100%)",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,transparent_0,transparent_95%,rgba(255,255,255,0.8)_100%),linear-gradient(0deg,transparent_0,transparent_95%,rgba(255,255,255,0.7)_100%)] bg-[length:48px_48px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              OPEN PROBLEMS
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              아직 이름 붙지 않은
              <br />
              세계의 경계로
            </h1>

            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mb-10">
              인류가 아직 풀지 못한 난제를 형식 증명 커뮤니티와 함께 추적합니다.
              후원금은 검증 가능한 해결에 도달한 기여자에게 상금으로 지급됩니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                { label: "등록 난제", value: "6", icon: Target },
                { label: "총 후원 풀", value: "$3.1M", icon: BadgeDollarSign },
                { label: "참여 후원자", value: "4,395", icon: Users },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 bg-white/[0.06] backdrop-blur-sm rounded-lg p-5"
                >
                  <item.icon className="w-5 h-5 text-amber-300 mb-3" />
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-sm text-neutral-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-amber-300/15 bg-[linear-gradient(180deg,#050505_0%,#130f08_48%,#050505_100%)] py-20">
        <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(120deg,rgba(251,191,36,0.32),transparent_28%,transparent_72%,rgba(250,204,21,0.24))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg">
                <div className="relative rounded-[1.75rem] bg-[linear-gradient(135deg,#f8e7ac_0%,#b8892e_28%,#332414_48%,#d8b45a_72%,#7a5520_100%)] p-[10px] shadow-[0_28px_80px_rgba(0,0,0,0.55),0_0_42px_rgba(251,191,36,0.18)]">
                  <div className="rounded-[1.35rem] bg-neutral-950 p-2">
                    <div className="rounded-[1.1rem] border border-amber-200/45 bg-[linear-gradient(135deg,#1c170d,#050505)] p-2">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/70 bg-black">
                        <ImageWithFallback
                          src={wilesPortraitUrl}
                          alt="Andrew Wiles"
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-amber-100/10" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-amber-200/80 rounded-tl-lg" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-amber-200/80 rounded-tr-lg" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-amber-200/80 rounded-bl-lg" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-amber-200/80 rounded-br-lg" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="rounded-lg border border-amber-300/20 bg-black/35 p-6 sm:p-8 shadow-2xl shadow-black/40"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-300/10 border border-amber-300/25 text-amber-200 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                DARK MANSION
              </span>

              <blockquote className="space-y-5 border-l-4 border-amber-300/70 pl-6">
                <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-amber-50">
                  페르마의 마지막 정리를 증명했다는 것에 대해서 나 자신은 일종의 슬픔을 느낍니다. 아마 모든 수학자들도 의기소침해졌을 것입니다. 그 문제는 우리 자신들을 끌어들여서 항상 꿈을 갖게 만들면서도, 한편으로는 결코 실현될 수 없는 대상으로 생각하게 만들었기 때문입니다. 지금 나는 무엇인가를 빼앗긴 느낌이 듭니다.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-neutral-300">
                  한 사람이 어두운 아파트 안으로 들어갔다고 상상해 봅시다. 칠흑같이 어두운 아파트말입니다. 처음에는 아무것도 보이지 않으니 이리저리 가구에 부딪쳐 넘어지면서 갈피를 잡지 못하겠지요. 하지만 이런 시행착오를 거듭하다보면 어둠 속에서도 가구의 위치들이 점차 머릿속에 그려질 겁니다.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-neutral-300">
                  이런 식으로 6개월을 지낸 뒤에 드디어 그 사람은 전등의 스위치를 발견하고 불을 켭니다. 그러면 모든 것이 일목요연하게 드러나면서 자신이 서있는 위치가 어디쯤이었는지를 정확하게 알게 되겠지요. 그런 뒤에 또 다시 옆집으로 들어갔다고 합시다. 역시 칠흑같이 어두운 집입니다.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-neutral-300">
                  그는 여기서도 6개월의 시간을 보낸 뒤에 전등의 스위치를 발견합니다. 무언가 극적인 발견이 이루어지는 거죠. 이때 느끼는 흥분감은 아주 순간적인 것일 수도 있고, 경우에 따라서는 하루나 이틀 정도 지속되기도 합니다. 어쨌거나 이러한 흥분감은 암흑 속에서 긴 시간을 보낸 경험을 한 사람들만이 느낄 수 있습니다. 그것은 지난 세월에 대한 최고의 보상이지요. 겪어보지 않은 사람들은 아마 잘 모를 겁니다.
                </p>
              </blockquote>

              <div className="mt-8 rounded-lg border border-amber-300/15 bg-amber-300/[0.07] p-5">
                <p className="text-sm leading-relaxed text-amber-100/80">
                  Perhaps I could best describe my experience of doing mathematics in terms of entering a dark mansion. You go into the first room and it's dark, completely dark. You stumble around, bumping into the furniture. Gradually, you learn where each piece of furniture is. And finally, after six months or so, you find the light switch and turn it on. Suddenly, it's all illuminated and you can see exactly where you were. Then you enter the next dark room.
                </p>
              </div>

              <div className="mt-6 border-t border-amber-300/20 pt-5">
                <div className="text-lg font-semibold text-amber-100">
                  앤드류 와일스 경
                </div>
                <div className="text-sm text-neutral-400">
                  Sir Andrew John Wiles · 페르마의 마지막 정리 증명자
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#10100e_45%,#050505_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-3">후원 중인 난제</h2>
              <p className="text-neutral-400">
                각 카드의 후원 풀은 상금으로 적립되며, 검증 절차를 통과한 해결자에게 지급됩니다.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-400 text-neutral-950 rounded-lg font-semibold hover:bg-amber-300 transition shadow-lg shadow-amber-500/20">
              난제 등록하기
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.article
                key={challenge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-neutral-900/80 p-6 shadow-2xl shadow-black/30"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${challenge.accent}`}
                />

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-neutral-200 border border-white/10">
                        {challenge.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-xs font-semibold text-emerald-200 border border-emerald-300/20">
                        {challenge.proofSystem}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-200 transition">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-amber-200/80 font-medium">
                      {challenge.field}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Gem className="w-6 h-6 text-amber-300" />
                  </div>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-6">
                  {challenge.description}
                </p>

                <div className="rounded-lg border border-white/10 bg-black/30 p-5 mb-5">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm text-neutral-400 mb-1">
                        해결 상금
                      </div>
                      <div className="text-3xl font-bold text-amber-200">
                        {challenge.prize}
                      </div>
                    </div>
                    <Trophy className="w-9 h-9 text-amber-300" />
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-neutral-400">후원 풀</span>
                      <span className="font-semibold text-neutral-100">
                        {challenge.sponsorPool}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${challenge.accent}`}
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {challenge.backers.toLocaleString()}명 후원
                    </span>
                    <span>{challenge.progress}% 적립</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-neutral-950 rounded-lg font-semibold hover:bg-amber-100 transition">
                    <BadgeDollarSign className="w-4 h-4" />
                    후원하기
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-white/15 text-neutral-100 rounded-lg font-semibold hover:bg-white/10 transition">
                    <ShieldCheck className="w-4 h-4" />
                    검증 조건
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-amber-300/20 bg-amber-300/10 p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Clock className="w-8 h-8 text-amber-200 flex-shrink-0" />
              <p className="text-neutral-200 leading-relaxed">
                후원 기능은 UI 단계입니다. 결제, 에스크로, 검증 위원회, 상금 지급 조건은
                이후 실제 서비스 정책과 백엔드 연동에 맞춰 확정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
