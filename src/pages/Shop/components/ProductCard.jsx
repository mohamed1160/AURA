import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Eye } from "lucide-react";
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
  const hasSecondaryImage = product.images?.length > 1;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.stock > 0) {
      addToCart(product);
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  // Deterministic logic based on product id so it stays consistent per product
  const idNum = product.id ? product.id.toString().split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
  
  const rating = product.rating || (4.0 + (idNum % 10) / 10).toFixed(1);
  const sold = product.sold || (idNum % 200) + 24;
  
  const discountPercent = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <>
      <motion.div
        className="group relative flex flex-col w-full bg-[#FFFFFF] rounded-[24px] border border-[#ECE6DD] shadow-sm hover:-translate-y-[6px] hover:shadow-[0_15px_40px_rgba(0,0,0,.08)] transition-all duration-500 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div 
          className="relative w-full aspect-square rounded-t-[24px] overflow-hidden bg-[#FAF7F2]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleQuickView}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-105 transition duration-700 ease-out"
            loading="lazy"
          />

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

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none opacity-90" />

          {product.isNewArrival && (
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-[#B8924A] text-[#FFFFFF] text-[10px] font-bold tracking-wider rounded-full px-2.5 py-0.5 shadow-sm">
                NEW
              </span>
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label="Add to wishlist"
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-colors",
                isWishlisted ? "fill-[#B8924A] text-[#B8924A]" : "text-gray-400 hover:text-[#B8924A]"
              )}
            />
          </button>
        </div>

        <div className="p-4 flex flex-col flex-1 bg-[#FFFFFF] rounded-b-[24px] relative z-10">
          
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#B8924A] mb-1">
            {product.category || "ACCESSORIES"}
          </span>
          
          <h3 className="text-[14px] font-semibold text-[#2C2C2C] leading-tight line-clamp-2 mb-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-1.5 mb-3 text-[11px]">
            <div className="flex text-[#B8924A] text-[9px] tracking-tighter">
              ★★★★★
            </div>
            <span className="text-[#777777] font-medium">
              {rating}
            </span>
            <span className="text-[#777777]">
              •
            </span>
            <span className="text-[#777777] font-medium">
              {sold} Sold
            </span>
          </div>

          <div className="mt-auto">
            <div className="flex items-end gap-2 mb-4">
              <span className="text-[18px] font-bold text-[#B8924A] leading-none">
                EGP {product.price}
              </span>
              
              {product.oldPrice && (
                <>
                  <span className="text-[#777777] text-[12px] line-through mb-[2px] font-medium">
                    EGP {product.oldPrice}
                  </span>
                  {discountPercent > 0 && (
                    <span className="ml-auto bg-[#F8EBD2] text-[#B8924A] text-[9px] font-bold uppercase rounded-full px-2 py-0.5 mb-[2px]">
                      SAVE {discountPercent}%
                    </span>
                  )}
                </>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                aria-label="Add to cart"
                className="w-full h-10 rounded-full bg-[#B8924A] hover:bg-[#A67C33] text-white flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest uppercase transition-all shadow-sm hover:shadow active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group/cartbtn"
              >
                {product.stock === 0 ? (
                  "Out of Stock"
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 group-hover/cartbtn:-translate-y-0.5 transition-transform" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={handleQuickView}
                aria-label="Quick view"
                className="w-full h-10 rounded-full border border-[#B8924A] bg-[#FFFFFF] text-[#B8924A] hover:bg-[#B8924A] hover:text-[#FFFFFF] flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest uppercase transition-all group/viewbtn active:scale-95"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Quick View</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {isQuickViewOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setQuickViewOpen(false)}
        />
      )}
    </>
  );
}
