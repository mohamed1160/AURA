import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ShieldCheck, Truck, Tag, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSummary({ subtotal }) {
  const [coupon, setCoupon] = useState("");

  const discount = subtotal > 1000 ? 200 : 0;
  const tax = Math.round((subtotal - discount) * 0.1); // 10% tax example
  const total = subtotal - discount + tax;
  const awayFromFreeShipping = Math.max(0, 1500 - subtotal);
  const progress = Math.min(100, (subtotal / 1500) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="sticky top-28 bg-[#FFFFFF] rounded-[30px] p-6 sm:p-[32px] border border-[#ECE6DD] shadow-[0_20px_60px_rgba(0,0,0,.08)] flex flex-col gap-6"
    >
      <h2 className="text-[18px] font-bold text-[#2C2C2C] uppercase tracking-widest">
        Order Summary
      </h2>

      <div className="flex flex-col gap-4 text-[14px]">
        <div className="flex justify-between items-center text-[#777777]">
          <span>Subtotal</span>
          <span className="font-bold text-[#2C2C2C]">EGP {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-[#777777]">
          <span>Shipping</span>
          <span className="font-bold text-green-600 uppercase tracking-widest text-[12px]">Free</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between items-center text-[#C89A3D]">
            <span>Discount</span>
            <span className="font-bold">-EGP {discount.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between items-center text-[#777777]">
          <span>Tax (10%)</span>
          <span className="font-bold text-[#2C2C2C]">EGP {tax.toLocaleString()}</span>
        </div>
      </div>

      <div className="h-px w-full bg-[#ECE6DD]" />

      <div className="flex justify-between items-center">
        <span className="text-[18px] font-bold text-[#2C2C2C] tracking-widest uppercase">Total</span>
        <span className="text-[28px] font-bold text-[#C89A3D]">EGP {total.toLocaleString()}</span>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Apply coupon code"
            className="w-full h-[52px] pl-10 pr-4 bg-[#FAF7F2] border border-[#ECE6DD] rounded-[16px] text-[14px] outline-none focus:border-[#C89A3D] transition-colors"
          />
        </div>
        <button className="h-[52px] px-6 bg-[#FFFFFF] border border-[#C89A3D] text-[#C89A3D] font-bold text-[12px] uppercase tracking-widest rounded-[16px] hover:bg-[#C89A3D] hover:text-[#FFFFFF] transition-colors">
          Apply
        </button>
      </div>

      <Link to="/checkout" className="group w-full h-[60px] rounded-full bg-gradient-to-r from-[#C89A3D] to-[#B38730] text-[#FFFFFF] flex items-center justify-center gap-2 font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(200,154,61,0.3)] active:scale-95">
        <Lock size={16} className="mb-0.5" />
        <span>Proceed to Checkout</span>
      </Link>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-[12px]">
        <ShieldCheck className="w-4 h-4" />
        <span>Secure Checkout</span>
      </div>

      <div className="mt-2 bg-[#FAF7F2] border border-[#ECE6DD] rounded-[20px] p-4 flex gap-4 items-center">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
          <Truck className="w-5 h-5 text-[#C89A3D]" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <span className="text-[13px] font-bold text-[#2C2C2C]">
            {awayFromFreeShipping === 0 
              ? "You have Free Shipping!" 
              : "Free Shipping on Orders Over EGP 1,500"}
          </span>
          <span className="text-[11px] text-[#777777]">
            {awayFromFreeShipping === 0 
              ? "Your order qualifies for free shipping."
              : `You are EGP ${awayFromFreeShipping.toLocaleString()} away from free shipping!`}
          </span>
          {awayFromFreeShipping > 0 && (
            <div className="w-full h-1.5 bg-[#ECE6DD] rounded-full mt-1 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-[#C89A3D]" 
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
