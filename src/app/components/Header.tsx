import { Search, Bell, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-gray-200 bg-white/80 backdrop-blur-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">∀</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">ProofHub</h1>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">정리</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">토론</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">기여자</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">문서</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="정리 검색..."
                className="bg-transparent border-none outline-none text-sm w-48"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <User className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
