import { CheckCircle, Clock, XCircle, MessageSquare, Heart, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

interface TheoremCardProps {
  id: string;
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
  id,
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
      color: 'text-green-700',
      bg: 'bg-green-50 border-green-200',
      label: '검증됨'
    },
    pending: {
      icon: Clock,
      color: 'text-yellow-700',
      bg: 'bg-yellow-50 border-yellow-200',
      label: '검증 중'
    },
    failed: {
      icon: XCircle,
      color: 'text-red-700',
      bg: 'bg-red-50 border-red-200',
      label: '검증 실패'
    }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Link to={`/proofs/${id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer"
      >
        <div className="flex items-start justify-between mb-3 gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-snug">{title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{description}</p>
          </div>

          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-medium flex-shrink-0 ${config.bg} ${config.color}`}>
            <StatusIcon className="w-3.5 h-3.5" />
            {config.label}
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Code className="w-3.5 h-3.5" />
            <span>{language}</span>
          </div>
          <span>·</span>
          <span>{prover}</span>
          <span>·</span>
          <span>{date}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-400 text-sm">
              <Heart className="w-4 h-4" />
              <span>{likes}</span>
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-sm">
              <MessageSquare className="w-4 h-4" />
              <span>{comments}</span>
            </span>
          </div>

          <span className="text-xs text-indigo-600 font-medium">
            증명 보기 →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

