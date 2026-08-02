import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import { useShopStore } from "../../../store/useShopStore";
import { useState } from "react";
import { cn } from "../../../lib/utils";

export default function QuickViewModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const addToCart = useShopStore((state) => state.addToCart);

  const handleAddToCart = () => {
    // In a real app we'd pass size/color/quantity
    addToCart(product.id);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#2B2B2B] hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Images */}
          <div className="w-full md:w-1/2 flex flex-col bg-[#FDFBF7]">
            <div className="w-full aspect-[4/5] relative bg-gray-100">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex p-4 gap-4 overflow-x-auto hide-scrollbar bg-white">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "w-20 aspect-[4/5] rounded-md overflow-hidden border-2 transition-colors",
                      activeImage === idx
                        ? "border-[#B08D57]"
                        : "border-transparent opacity-60 hover:opacity-100",
                    )}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col overflow-y-auto hide-scrollbar">
            <span className="text-xs font-bold tracking-widest text-[#B08D57] uppercase mb-2">
              {product.collection}
            </span>
            <h2 className="text-2xl font-serif text-[#2B2B2B] mb-2">
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#B08D57] text-sm">★★★★★</span>
              <span className="text-sm text-[#8C8C8C]">
                {product.rating} ({product.reviewsCount} Reviews)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-bold text-[#2B2B2B]">
                EGP {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-[#8C8C8C] line-through">
                  EGP {product.oldPrice}
                </span>
              )}
            </div>

            <p className="text-sm text-[#555] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2B2B2B] block mb-3">
                Color
              </span>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "px-4 py-2 border rounded-md text-sm transition-all",
                      selectedColor === color
                        ? "border-[#B08D57] text-[#B08D57] bg-[#B08D57]/5"
                        : "border-[#E8E2D8] text-[#2B2B2B] hover:border-[#B08D57]",
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">
                  Size
                </span>
                <button className="text-xs text-[#8C8C8C] underline hover:text-[#B08D57]">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 border rounded-md text-sm transition-all flex items-center justify-center",
                      selectedSize === size
                        ? "border-[#2B2B2B] bg-[#2B2B2B] text-white"
                        : "border-[#E8E2D8] text-[#2B2B2B] hover:border-[#B08D57]",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-auto pt-6 border-t border-[#E8E2D8]">
              <div className="flex items-center border border-[#E8E2D8] rounded-md overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-12 flex items-center justify-center text-[#8C8C8C] hover:bg-gray-50 hover:text-[#2B2B2B]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-12 h-12 flex items-center justify-center text-sm font-semibold text-[#2B2B2B]">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-12 flex items-center justify-center text-[#8C8C8C] hover:bg-gray-50 hover:text-[#2B2B2B]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-[#B08D57] text-white uppercase tracking-widest text-sm font-semibold rounded-md hover:bg-[#8e6e3c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.stock === 0 ? "Out of Stock" : "Add To Cart"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
