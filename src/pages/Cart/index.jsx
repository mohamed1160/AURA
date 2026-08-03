import { motion, AnimatePresence } from "framer-motion";
import { useShopStore } from "../../store/useShopStore";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import EmptyCart from "./components/EmptyCart";
import RecommendedProducts from "./components/RecommendedProducts";


import cartHeroImg from "../../assets/images/cart-hero.png";

export default function Cart() {
  const cart = useShopStore((state) => state.cart) || [];
  
  // Filter out any invalid/corrupted items that might be stuck in localStorage from previous versions
  const validCart = cart.filter(item => item && typeof item.price === 'number');
  
  const subtotal = validCart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = validCart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FAF7F2] flex flex-col pt-16" // pt-16 to account for fixed navbar if needed, or adjust
    >
      {/* Hero Banner */}
      <div className="relative w-full h-[260px] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src={cartHeroImg} 
          alt="Luxury Egyptian Theme" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/50" />
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[32px] sm:text-[44px] font-serif font-bold text-[#FFFFFF] tracking-[0.2em] uppercase mb-4"
          >
            Shopping Bag
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#C89A3D] text-[12px] sm:text-[14px] font-bold tracking-widest uppercase bg-white/10 px-6 py-2 rounded-full backdrop-blur-md"
          >
            {totalItems} Carefully Selected {totalItems === 1 ? 'Piece' : 'Pieces'}
          </motion.p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {validCart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left Column - Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {validCart.map((item) => (
                  <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1 relative">
              <OrderSummary subtotal={subtotal} />
            </div>
          </div>
        )}

        <RecommendedProducts />
      </main>
      
      
    </motion.div>
  );
}
