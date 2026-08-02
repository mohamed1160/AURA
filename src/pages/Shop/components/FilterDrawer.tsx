import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useShopStore } from '../../../store/useShopStore';
import { cn } from '../../../lib/utils';
import { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const COLORS = ['White', 'Black', 'Gold', 'Beige'];
const MATERIALS = ['Cotton', 'Premium Cotton', 'Heavy Cotton'];
const COLLECTIONS = ['New Arrival', 'Best Seller', 'Limited Edition', 'Standard'];
const GENDERS = ['Men', 'Women', 'Unisex'];
const RATINGS = [
  { label: '★★★★★', value: 5 },
  { label: '★★★★☆', value: 4 },
  { label: '★★★☆☆', value: 3 },
];

export default function FilterDrawer() {
  const isDrawerOpen = useShopStore((state) => state.isDrawerOpen);
  const setDrawerOpen = useShopStore((state) => state.setDrawerOpen);
  const filters = useShopStore((state) => state.filters);
  const setFilters = useShopStore((state) => state.setFilters);
  const resetFilters = useShopStore((state) => state.resetFilters);

  // Local state for smoother UI updates before applying
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleApply = () => {
    setFilters(localFilters);
    setDrawerOpen(false);
  };

  const handleClear = () => {
    resetFilters();
    setDrawerOpen(false);
  };

  const toggleArrayItem = (key: keyof typeof localFilters, item: string) => {
    const array = localFilters[key] as string[];
    const newArray = array.includes(item) 
      ? array.filter((i) => i !== item)
      : [...array, item];
    setLocalFilters({ ...localFilters, [key]: newArray });
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#E8E2D8]">
              <h2 className="text-xl font-serif text-[#2B2B2B]">Filters</h2>
              <button onClick={() => setDrawerOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                <X className="w-5 h-5 text-[#2B2B2B]" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 hide-scrollbar">
              
              {/* Sort Options */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Sort By</h3>
                <SortDropdown />
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Price Range</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={localFilters.minPrice}
                    onChange={(e) => setLocalFilters({ ...localFilters, minPrice: Number(e.target.value) })}
                    className="w-full border border-[#E8E2D8] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#B08D57]"
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={localFilters.maxPrice}
                    onChange={(e) => setLocalFilters({ ...localFilters, maxPrice: Number(e.target.value) })}
                    className="w-full border border-[#E8E2D8] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#B08D57]"
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Availability</h3>
                <label className="flex items-center gap-3 mb-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localFilters.inStock}
                    onChange={(e) => setLocalFilters({ ...localFilters, inStock: e.target.checked })}
                    className="accent-[#B08D57] w-4 h-4"
                  />
                  <span className="text-sm text-[#2B2B2B]">In Stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localFilters.outOfStock}
                    onChange={(e) => setLocalFilters({ ...localFilters, outOfStock: e.target.checked })}
                    className="accent-[#B08D57] w-4 h-4"
                  />
                  <span className="text-sm text-[#2B2B2B]">Out of Stock</span>
                </label>
              </div>

              {/* Discount Only */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localFilters.discountOnly}
                    onChange={(e) => setLocalFilters({ ...localFilters, discountOnly: e.target.checked })}
                    className="accent-[#B08D57] w-4 h-4"
                  />
                  <span className="text-sm font-semibold text-[#B08D57] uppercase tracking-wider">Discount Only</span>
                </label>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleArrayItem('sizes', size)}
                      className={cn(
                        'w-10 h-10 flex items-center justify-center rounded-md border text-sm transition',
                        localFilters.sizes.includes(size)
                          ? 'bg-[#2B2B2B] text-white border-[#2B2B2B]'
                          : 'bg-white text-[#2B2B2B] border-[#E8E2D8] hover:border-[#B08D57]'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Colors</h3>
                <div className="flex flex-col gap-3">
                  {COLORS.map((color) => (
                    <label key={color} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localFilters.colors.includes(color)}
                        onChange={() => toggleArrayItem('colors', color)}
                        className="accent-[#B08D57] w-4 h-4"
                      />
                      <span className="text-sm text-[#2B2B2B]">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Material</h3>
                <div className="flex flex-col gap-3">
                  {MATERIALS.map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localFilters.materials.includes(mat)}
                        onChange={() => toggleArrayItem('materials', mat)}
                        className="accent-[#B08D57] w-4 h-4"
                      />
                      <span className="text-sm text-[#2B2B2B]">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Gender */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Gender</h3>
                <div className="flex flex-col gap-3">
                  {GENDERS.map((gen) => (
                    <label key={gen} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localFilters.genders.includes(gen)}
                        onChange={() => toggleArrayItem('genders', gen)}
                        className="accent-[#B08D57] w-4 h-4"
                      />
                      <span className="text-sm text-[#2B2B2B]">{gen}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Collection */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Collection</h3>
                <div className="flex flex-col gap-3">
                  {COLLECTIONS.map((col) => (
                    <label key={col} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localFilters.collections.includes(col)}
                        onChange={() => toggleArrayItem('collections', col)}
                        className="accent-[#B08D57] w-4 h-4"
                      />
                      <span className="text-sm text-[#2B2B2B]">{col}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4">Minimum Rating</h3>
                <div className="flex flex-col gap-3">
                  {RATINGS.map((rat) => (
                    <label key={rat.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={localFilters.minRating === rat.value}
                        onChange={() => setLocalFilters({ ...localFilters, minRating: rat.value })}
                        className="accent-[#B08D57] w-4 h-4"
                      />
                      <span className="text-sm text-[#B08D57]">{rat.label}</span>
                    </label>
                  ))}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      checked={localFilters.minRating === 0}
                      onChange={() => setLocalFilters({ ...localFilters, minRating: 0 })}
                      className="accent-[#B08D57] w-4 h-4"
                    />
                    <span className="text-sm text-[#2B2B2B]">Any Rating</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E8E2D8] flex gap-4 bg-white">
              <button
                onClick={handleClear}
                className="flex-1 py-3 border border-[#2B2B2B] text-[#2B2B2B] rounded-md hover:bg-gray-50 transition tracking-wider text-sm uppercase"
              >
                Clear
              </button>
              <button
                onClick={handleApply}
                className="flex-1 py-3 bg-[#B08D57] text-white rounded-md hover:bg-[#8e6e3c] transition tracking-wider text-sm uppercase"
              >
                Apply
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
