import { Search, User, Menu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { NotificationPanel } from './NotificationPanel';

export function Header() {
  const location = useLocation();
  const isChallengePage = location.pathname.startsWith('/challenges');

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => {
    if (isChallengePage) {
      return `transition-colors ${isActive(path)
        ? 'text-amber-200 font-semibold'
        : 'text-neutral-400 hover:text-amber-200'
      }`;
    }
    return `transition-colors text-sm ${isActive(path)
      ? 'text-gray-900 font-medium'
      : 'text-gray-500 hover:text-gray-900'
    }`;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-700 ${isChallengePage
        ? 'border-amber-300/20 bg-neutral-950/90 shadow-[0_1px_30px_rgba(251,191,36,0.18)]'
        : 'border-gray-200 bg-white/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded flex items-center justify-center text-sm font-bold ${isChallengePage
                  ? 'bg-gradient-to-br from-amber-200 via-yellow-500 to-stone-700 text-neutral-950'
                  : 'bg-gray-900 text-white'
                }`}
              >
                ∀
              </div>
              <span className={`text-sm font-semibold tracking-tight ${isChallengePage ? 'text-amber-100' : 'text-gray-900'}`}>
                ShannonManifold
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-5">
              <Link to="/proofs" className={navLinkClass('/proofs')}>정리</Link>
              <Link to="/tutorials" className={navLinkClass('/tutorials')}>튜토리얼</Link>
              <Link
                to="/challenges"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${isActive('/challenges')
                  ? 'bg-amber-400 text-neutral-950'
                  : isChallengePage
                    ? 'border border-amber-300/30 bg-amber-300/10 text-amber-200 hover:bg-amber-300/20'
                    : 'bg-gray-900 text-amber-200 hover:bg-gray-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                난제
              </Link>
              <Link to="/qna" className={navLinkClass('/qna')}>Q&A</Link>
              <Link to="/contributors" className={navLinkClass('/contributors')}>기여자</Link>
              <Link to="/docs" className={navLinkClass('/docs')}>문서</Link>
              <Link to="/blog" className={navLinkClass('/blog')}>블로그</Link>
            </nav>
          </div>

          <div className="flex items-center gap-1">
            <div
              className={`hidden sm:flex items-center gap-2 rounded px-3 py-1.5 border text-sm ${isChallengePage
                ? 'bg-white/5 border-amber-300/15'
                : 'bg-gray-50 border-gray-200'
              }`}
            >
              <Search className={`w-3.5 h-3.5 ${isChallengePage ? 'text-amber-200/60' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="정리 검색..."
                className={`bg-transparent border-none outline-none text-sm w-40 ${isChallengePage
                  ? 'text-amber-50 placeholder:text-neutral-500'
                  : 'text-gray-900 placeholder:text-gray-400'
                }`}
              />
            </div>

            <NotificationPanel isChallengePage={isChallengePage} />

            <Link to="/mypage">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded transition-colors ${isChallengePage ? 'text-neutral-400 hover:text-amber-200' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <User className="w-4 h-4" />
              </motion.div>
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden p-2 rounded transition-colors ${isChallengePage ? 'text-neutral-400 hover:text-amber-200' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
            >
              <Menu className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
