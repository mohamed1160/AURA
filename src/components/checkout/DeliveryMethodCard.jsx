import { motion } from 'framer-motion';
import { Truck, Zap, Shield, HelpCircle } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

const getIcon = (iconName) => {
  switch (iconName?.toLowerCase()) {
    case 'truck': return Truck;
    case 'zap': return Zap;
    case 'shield': return Shield;
    default: return HelpCircle;
  }
};

export default function DeliveryMethodCard({ method, isSelected, onSelect }) {
  const Icon = getIcon(method.icon);
  const isFree = method.price === 0;

  return (
    <motion.div
      whileHover={method.available ? { scale: 1.01 } : {}}
      whileTap={method.available ? { scale: 0.99 } : {}}
      onClick={() => method.available && onSelect(method._id)}
      className={`relative w-full rounded-2xl border p-5 md:p-6 cursor-pointer transition-all duration-300 flex items-center justify-between
        ${!method.available ? 'opacity-50 cursor-not-allowed bg-gray-50 border-gray-200' : 
          isSelected ? 'border-[#C89A3D] bg-[#FAF7F2] shadow-[0_0_20px_rgba(200,154,61,0.15)]' : 'border-[#ECE6DD] bg-white hover:border-[#C89A3D] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
        }`}
    >
      <div className="flex items-center gap-4 md:gap-6">
        {/* Animated Radio Button */}
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-300
          ${isSelected ? 'border-[#C89A3D]' : 'border-[#ECE6DD]'}`}
        >
          {isSelected && (
            <motion.div
              layoutId="radio-indicator"
              className="w-2.5 h-2.5 rounded-full bg-[#C89A3D]"
            />
          )}
        </div>

        {/* Icon */}
        <Icon size={24} className={isSelected ? 'text-[#C89A3D]' : 'text-[#777777]'} strokeWidth={1.5} />

        {/* Info */}
        <div className="flex flex-col">
          <span className={`text-[14px] font-bold ${isSelected ? 'text-[#2C2C2C]' : 'text-[#2C2C2C]'}`}>
            {method.name}
            {!method.available && <span className="ml-2 text-[10px] text-red-500 bg-red-50 px-2 py-0.5 rounded-full">Unavailable</span>}
          </span>
          <span className="text-[12px] text-[#777777] mt-0.5">{method.estimatedDays}</span>
          <span className="text-[11px] text-[#999999] mt-1 hidden md:block">{method.description}</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col items-end text-right shrink-0 ml-4">
        {isFree ? (
          <>
            <span className="text-[14px] font-bold text-[#2C2C2C]">FREE</span>
            <span className="text-[11px] text-[#777777]">EGP 0.00</span>
          </>
        ) : (
          <span className="text-[14px] font-bold text-[#2C2C2C]">{formatCurrency(method.price)}</span>
        )}
      </div>
    </motion.div>
  );
}
