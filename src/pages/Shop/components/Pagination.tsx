import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useShopStore } from '../../../store/useShopStore';
import { cn } from '../../../lib/utils';

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const currentPage = useShopStore((state) => state.page);
  const setPage = useShopStore((state) => state.setPage);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    // Simple logic for < 1 2 3 ... 8 >
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const handlePageChange = (p: number | string) => {
    if (typeof p === 'number') {
      setPage(p);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-12 gap-2">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent text-[#2B2B2B] hover:border-[#E8E2D8] disabled:opacity-30 disabled:hover:border-transparent transition"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPageNumbers().map((p, idx) => (
        <button
          key={idx}
          onClick={() => handlePageChange(p)}
          disabled={p === '...'}
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition",
            p === currentPage
              ? "bg-[#2B2B2B] text-white"
              : p === '...'
              ? "text-[#8C8C8C] cursor-default"
              : "text-[#2B2B2B] hover:bg-gray-100"
          )}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent text-[#2B2B2B] hover:border-[#E8E2D8] disabled:opacity-30 disabled:hover:border-transparent transition"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
