import { motion } from "framer-motion";
import { Heart, Trash2, Minus, Plus } from "lucide-react";
import { useShopStore } from "../../../store/useShopStore";
import { cn } from "../../../lib/utils";

export default function CartItem({ item }) {
  const updateQuantity = useShopStore((state) => state.updateQuantity);
  const removeFromCart = useShopStore((state) => state.removeFromCart);
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);

  const isWishlisted = wishlist.includes(item.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="relative flex flex-col sm:flex-row bg-[#FFFFFF] rounded-[28px] p-4 sm:p-[28px] gap-6 shadow-lg border border-[#ECE6DD] group transition-all duration-300"
    >
      <div className="w-full sm:w-[160px] h-[160px] shrink-0 bg-[#FAF7F2] rounded-[24px] overflow-hidden relative">
        <img
          src={item.images?.[0] || "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500"}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <button
          onClick={() => toggleWishlist(item.id)}
          aria-label="Wishlist"
          className="absolute top-3 right-3 sm:hidden p-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm"
        >
          <Heart className={cn("w-4 h-4 transition-colors", isWishlisted ? "fill-[#C89A3D] text-[#C89A3D]" : "text-gray-400")} />
        </button>
      </div>

      <div className="flex flex-col flex-1 py-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-[20px] font-bold text-[#2C2C2C] leading-tight mb-1">
              {item.name}
            </h3>
            <p className="text-[#777777] text-[13px] font-medium">
              Size: {item.size} <br />
              Color: {item.color}
            </p>
          </div>
          <button
            onClick={() => toggleWishlist(item.id)}
            aria-label="Wishlist"
            className="hidden sm:flex p-2 rounded-full hover:bg-[#FAF7F2] transition-colors"
          >
            <Heart className={cn("w-5 h-5 transition-colors", isWishlisted ? "fill-[#C89A3D] text-[#C89A3D]" : "text-gray-400 hover:text-[#C89A3D]")} />
          </button>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#ECE6DD]/50">
          <div className="flex items-center gap-4 bg-[#FAF7F2] rounded-full px-4 py-2 border border-[#ECE6DD]">
            <button
              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
              className="text-gray-500 hover:text-[#C89A3D] transition-colors disabled:opacity-50"
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center font-bold text-[#2C2C2C] text-[14px]">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
              className="text-gray-500 hover:text-[#C89A3D] transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[22px] font-bold text-[#C89A3D]">
              EGP {item.price * item.quantity}
            </span>
            <button
              onClick={() => removeFromCart(item.id, item.size, item.color)}
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-[12px] font-bold uppercase tracking-wider"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
