import { Filter, SlidersHorizontal } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">필터:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
            전체
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition">
            검증됨
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition">
            검증 중
          </button>
          <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition">
            검증 실패
          </button>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <select className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg border-none outline-none cursor-pointer">
          <option>증명 언어: 전체</option>
          <option>Lean 4</option>
          <option>Coq</option>
          <option>Isabelle</option>
          <option>Agda</option>
        </select>

        <select className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg border-none outline-none cursor-pointer">
          <option>정렬: 최신순</option>
          <option>인기순</option>
          <option>오래된순</option>
          <option>좋아요순</option>
        </select>

        <button className="ml-auto p-2 hover:bg-gray-100 rounded-lg transition">
          <SlidersHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
