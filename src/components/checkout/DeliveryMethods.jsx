import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, RefreshCw } from 'lucide-react';
import DeliveryMethodCard from './DeliveryMethodCard';
import { useShippingMethods } from '../../hooks/useShippingMethods';

export default function DeliveryMethods({ selectedMethodId, onMethodSelect }) {
  const { data: methods = [], isLoading, isError, refetch } = useShippingMethods();

  return (
    <div className="bg-white rounded-[32px] p-6 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] mb-8">
      <div className="mb-8">
        <h2 className="text-[32px] font-serif font-bold text-[#2C2C2C] mb-2">2. Shipping</h2>
        <p className="text-[14px] text-[#777777]">Choose your preferred shipping method</p>
      </div>

      <h3 className="text-[14px] font-bold tracking-[0.05em] text-[#2C2C2C] mb-6">
        Delivery Method
      </h3>

      <div className="flex flex-col gap-4">
        {isLoading ? (
          // Skeleton Loaders
          [1, 2, 3].map(i => (
            <div key={i} className="w-full h-[100px] rounded-2xl border border-[#ECE6DD] bg-gray-50 animate-pulse" />
          ))
        ) : isError ? (
          // Error State
          <div className="flex flex-col items-center justify-center p-8 bg-red-50 rounded-2xl border border-red-100 text-center">
            <p className="text-red-500 text-[13px] mb-4">Unable to load shipping methods.</p>
            <button 
              onClick={() => refetch()}
              className="flex items-center gap-2 text-red-600 font-bold text-[11px] uppercase tracking-widest hover:text-red-700"
            >
              <RefreshCw size={14} /> Try Again
            </button>
          </div>
        ) : !Array.isArray(methods) || methods.length === 0 ? (
          // Empty State
          <div className="p-8 text-center text-[#777777] text-[13px] bg-gray-50 rounded-2xl border border-[#ECE6DD]">
            No shipping methods available at this time.
          </div>
        ) : (
          <AnimatePresence>
            {methods.map((method) => (
              <motion.div
                key={method._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <DeliveryMethodCard 
                  method={method} 
                  isSelected={selectedMethodId === method._id}
                  onSelect={onMethodSelect}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-[#FAF7F2] rounded-2xl p-5 flex items-start gap-4 border border-[#ECE6DD]">
        <ShieldCheck className="text-[#C89A3D] shrink-0 mt-0.5" size={20} />
        <div>
          <p className="text-[13px] font-bold text-[#2C2C2C] mb-1">All orders are fully insured and tracked</p>
          <p className="text-[11px] text-[#777777]">You will receive tracking information via email once your order ships.</p>
        </div>
      </div>
    </div>
  );
}
