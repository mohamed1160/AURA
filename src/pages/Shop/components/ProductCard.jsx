import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useShopStore } from "../../../store/useShopStore";
import { cn } from "../../../lib/utils";
import QuickViewModal from "./QuickViewModal";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);
  const addToCart = useShopStore((state) => state.addToCart);
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.stock > 0) {
      addToCart(product.id);
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  const hasSecondaryImage = product.images.length > 1;

  return (
    <>
      <motion.div
        onClick={handleQuickView}
        className="group flex flex-col bg-[#FCFAF6] rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-[#C79A3B]/40 hover:-translate-y-1 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Image Area */}
        <div
          className="relative w-full aspect-[4/5] bg-[#FDFBF7] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Primary Image */}
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            loading="lazy"
          />

          {/* Secondary Image (Crossfade) */}
          <AnimatePresence>
            {hasSecondaryImage && isHovered && (
              <motion.img
                src={product.images[1]}
                alt={`${product.name} alternate`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                loading="lazy"
              />
            )}
          </AnimatePresence>

          {/* New Badge */}
          {product.isNewArrival && (
            <div className="absolute top-4 left-4 z-20">
              <span className="text-[#C79A3B] border border-[#C79A3B]/30 bg-[#FCFAF6] text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm shadow-sm">
                New
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-[#FCFAF6] border border-[#C79A3B]/40 rounded-full flex items-center justify-center text-[#C79A3B] hover:bg-[#C79A3B] hover:text-white transition-all shadow-sm"
          >
            <Heart
              className={cn(
                "w-4 h-4",
                isWishlisted &&
                  "fill-[#C79A3B] text-[#C79A3B] group-hover:fill-white",
              )}
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-5 flex flex-col flex-1 relative z-10 bg-[#FCFAF6]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C79A3B] mb-1">
            {product.category}
          </span>
          <h3 className="text-sm font-semibold text-[#2B2B2B] mb-1 truncate">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-bold text-[#C79A3B]">
              EGP {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-[#8C8C8C] line-through">
                EGP {product.oldPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="mt-auto w-full py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#C79A3B] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-full text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn"
          >
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            {product.stock > 0 && (
              <svg
                className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setQuickViewOpen(false)}
        />
      )}
    </>
  );
}
