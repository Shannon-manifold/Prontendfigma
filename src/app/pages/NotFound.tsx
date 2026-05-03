import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl mb-4 text-slate-900" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
            404
          </h1>
          <h2 className="text-3xl mb-4 text-slate-900" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 inline-flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              <Home className="w-5 h-5" />
              홈으로 돌아가기
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
