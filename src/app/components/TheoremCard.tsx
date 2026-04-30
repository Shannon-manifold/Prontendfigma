import { CheckCircle, Clock, XCircle, MessageSquare, Heart, Code } from 'lucide-react';
import { motion } from 'motion/react';

interface TheoremCardProps {
  title: string;
  description: string;
  status: 'verified' | 'pending' | 'failed';
  prover: string;
  language: string;
  likes: number;
  comments: number;
  date: string;
}

export function TheoremCard({
  title,
  description,
  status,
  prover,
  language,
  likes,
  comments,
  date
}: TheoremCardProps) {
  const statusConfig = {
    verified: {
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50',
      label: '검증됨'
    },
    pending: {
      icon: Clock,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      label: '검증 중'
    },
    failed: {
      icon: XCircle,
      color: 'text-red-600',
      bg: 'bg-red-50',
      label: '검증 실패'
    }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>

        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bg} ml-4`}>
          <StatusIcon className={`w-4 h-4 ${config.color}`} />
          <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <Code className="w-4 h-4" />
          <span>{language}</span>
        </div>
        <span>•</span>
        <span>{prover}</span>
        <span>•</span>
        <span>{date}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition"
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm">{likes}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-gray-600 hover:text-indigo-600 transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </motion.button>
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
        >
          증명 보기 →
        </motion.button>
      </div>
    </motion.div>
  );
}
