import { Search, Bell, User, Menu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const isChallengePage = location.pathname.startsWith('/challenges');

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => {
    if (isChallengePage) {
      return `transition ${isActive(path)
          ? 'text-amber-200 font-semibold'
          : 'text-neutral-300 hover:text-amber-200'
        }`;
    }

    return `transition ${isActive(path)
        ? 'text-indigo-600 font-medium'
        : 'text-gray-700 hover:text-indigo-600'
      }`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-[1800ms] ease-in-out ${isChallengePage
          ? 'border-amber-300/20 bg-neutral-950/90 shadow-[0_1px_30px_rgba(251,191,36,0.18)]'
          : 'border-gray-200 bg-white/80'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${isChallengePage
                    ? 'bg-gradient-to-br from-amber-200 via-yellow-500 to-stone-700 shadow-lg shadow-amber-500/25'
                    : 'bg-indigo-600'
                  }`}
              >
                <span
                  className={`font-bold text-lg ${isChallengePage ? 'text-neutral-950' : 'text-white'
                    }`}
                >
                  ∀
                </span>
              </div>
              <h1
                className={`text-xl font-bold ${isChallengePage ? 'text-amber-100' : 'text-gray-900'
                  }`}
              >
                ShannonManifold
              </h1>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link to="/proofs" className={navLinkClass('/proofs')}>
                정리
              </Link>
              <Link to="/tutorials" className={navLinkClass('/tutorials')}>
                튜토리얼
              </Link>
              <Link
                to="/challenges"
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition shadow-sm ${isActive('/challenges')
                    ? 'bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 text-neutral-950 shadow-lg shadow-amber-500/30'
                    : isChallengePage
                      ? 'border border-amber-300/30 bg-amber-300/10 text-amber-200 hover:bg-amber-300 hover:text-neutral-950 hover:shadow-lg hover:shadow-amber-500/30'
                      : 'bg-gray-950 text-amber-200 hover:bg-gradient-to-r hover:from-amber-400 hover:to-emerald-400 hover:text-gray-950 hover:shadow-lg hover:shadow-amber-200/60'
                  }`}
              >
                <Sparkles className="w-4 h-4" />
                난제
              </Link>
              <Link to="/qna" className={navLinkClass('/qna')}>
                Q&A
              </Link>
              <Link to="/contributors" className={navLinkClass('/contributors')}>
                기여자
              </Link>
              <a
                href="#"
                className={
                  isChallengePage
                    ? 'text-neutral-300 hover:text-amber-200 transition'
                    : 'text-gray-700 hover:text-indigo-600 transition'
                }
              >
                문서
              </a>
              <Link to="/blog" className={navLinkClass('/blog')}>
                블로그
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`hidden sm:flex items-center gap-2 rounded-lg px-3 py-2 border ${isChallengePage
                  ? 'bg-white/5 border-amber-300/15'
                  : 'bg-gray-100 border-transparent'
                }`}
            >
              <Search
                className={`w-4 h-4 ${isChallengePage ? 'text-amber-200/70' : 'text-gray-400'
                  }`}
              />
              <input
                type="text"
                placeholder="정리 검색..."
                className={`bg-transparent border-none outline-none text-sm w-48 ${isChallengePage
                    ? 'text-amber-50 placeholder:text-neutral-500'
                    : 'text-gray-900'
                  }`}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition ${isChallengePage
                  ? 'text-neutral-300 hover:bg-amber-300/10 hover:text-amber-200'
                  : 'hover:bg-gray-100'
                }`}
            >
              <Bell className={`w-5 h-5 ${isChallengePage ? '' : 'text-gray-600'}`} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition ${isChallengePage
                  ? 'text-neutral-300 hover:bg-amber-300/10 hover:text-amber-200'
                  : 'hover:bg-gray-100'
                }`}
            >
              <User className={`w-5 h-5 ${isChallengePage ? '' : 'text-gray-600'}`} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden p-2 rounded-lg transition ${isChallengePage
                  ? 'text-neutral-300 hover:bg-amber-300/10 hover:text-amber-200'
                  : 'hover:bg-gray-100'
                }`}
            >
              <Menu className={`w-5 h-5 ${isChallengePage ? '' : 'text-gray-600'}`} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
