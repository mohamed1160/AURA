import { SlidersHorizontal } from 'lucide-react';
import { useShopStore } from '../../../store/useShopStore';
import CategoryTabs from './CategoryTabs';
import SearchBar from './SearchBar';

interface ProductToolbarProps {
  totalProducts: number;
  currentPage: number;
  limit: number;
}

export default function ProductToolbar({ totalProducts, currentPage, limit }: ProductToolbarProps) {
  const setDrawerOpen = useShopStore((state) => state.setDrawerOpen);

  const start = totalProducts === 0 ? 0 : (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, totalProducts);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-8 border-b border-[#E8E2D8] flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Left: Categories */}
      <div className="flex-1 w-full lg:w-auto overflow-hidden">
        <CategoryTabs />
      </div>

      {/* Center: Dynamic Text */}
      <div className="text-[#8C8C8C] text-sm tracking-wide whitespace-nowrap">
        {totalProducts === 0 ? (
          'Showing 0 Products'
        ) : start === end ? (
          `Showing ${start} of ${totalProducts} Product${totalProducts > 1 ? 's' : ''}`
        ) : (
          `Showing ${start}–${end} of ${totalProducts} Products`
        )}
      </div>

      {/* Right: Search, Sort, Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto justify-end">
        <SearchBar />
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-[#B08D57] text-[#B08D57] rounded-md hover:bg-[#B08D57] hover:text-white transition-colors duration-300 whitespace-nowrap"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Filter & Sort</span>
        </button>
      </div>

    </div>
  );
}
