import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-7 h-7 rounded bg-gray-900 flex items-center justify-center text-sm font-bold text-white">∀</div>
          <span className="font-semibold text-sm text-gray-900">ShannonManifold</span>
        </Link>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">비밀번호 찾기</h1>
                <p className="text-sm text-gray-500">
                  가입 시 사용한 이메일을 입력하면 재설정 링크를 보내드립니다.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">이메일</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading || !email}
                  className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      전송 중...
                    </>
                  ) : '재설정 링크 보내기'}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                className="flex justify-center mb-5"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-500" />
                </div>
              </motion.div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">이메일을 확인해주세요</h2>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-8">
                으로 비밀번호 재설정 링크를 보냈습니다.<br />
                스팸 폴더도 확인해보세요.
              </p>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => { setSent(false); setEmail(''); }}
                className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                다른 이메일로 재시도
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center">
          <Link to="/login" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            로그인으로 돌아가기
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
