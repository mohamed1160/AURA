import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CheckoutSuccess({ orderId }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="mb-8"
      >
        <CheckCircle2 size={80} className="text-[#C89A3D]" strokeWidth={1} />
      </motion.div>
      
      <h1 className="text-[32px] md:text-[40px] font-serif font-bold text-[#2C2C2C] mb-4">
        Order Confirmed
      </h1>
      
      <p className="text-[14px] text-[#777777] max-w-md mx-auto mb-2">
        Thank you for shopping with AURA. Your order has been received and is being processed.
      </p>
      
      {orderId && (
        <p className="text-[14px] font-bold text-[#2C2C2C] mb-12">
          Order ID: {orderId}
        </p>
      )}

      <Link 
        to="/shop" 
        className="inline-flex items-center gap-2 h-14 px-8 bg-[#C89A3D] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#B88A2D] transition-colors"
      >
        Continue Shopping <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
