import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[500px] w-full bg-[#FFFFFF] rounded-[40px] border border-[#ECE6DD] shadow-sm p-8 text-center"
    >
      <div className="relative w-32 h-32 mb-8 group cursor-pointer">
        <div className="absolute inset-0 bg-[#F8EBD2] rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ShoppingBag className="w-16 h-16 text-[#C89A3D] relative z-10 group-hover:-translate-y-2 transition-transform duration-500" />
        </div>
      </div>

      <h2 className="text-[28px] font-serif font-bold text-[#2C2C2C] mb-4 uppercase tracking-wider">
        Your Shopping Bag is Empty
      </h2>
      <p className="text-[#777777] text-[15px] max-w-md mb-10">
        Looks like you haven't added anything yet. Discover our latest collections and find something you love.
      </p>

      <Link
        to="/shop"
        className="group relative inline-flex items-center justify-center h-14 px-10 rounded-full bg-[#C89A3D] text-[#FFFFFF] font-bold tracking-widest uppercase text-[13px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
      >
        <span className="relative z-10 flex items-center gap-2">
          Continue Shopping
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#C89A3D] to-[#A87B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </motion.div>
  );
}
