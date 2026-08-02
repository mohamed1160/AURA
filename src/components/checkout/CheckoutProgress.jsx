import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  { id: 1, title: "Information", subtitle: "Contact & Shipping" },
  { id: 2, title: "Shipping", subtitle: "Delivery Method" },
  { id: 3, title: "Payment", subtitle: "Payment Details" },
  { id: 4, title: "Review", subtitle: "Review Your Order" },
];

export default function CheckoutProgress({ currentStep }) {
  return (
    <div className="w-full py-8 mb-8 border-b border-[#ECE6DD]/60">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#ECE6DD] -z-10" />
        
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="relative flex flex-col items-center group bg-[#FAF7F2] px-4">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isActive || isCompleted ? '#C89A3D' : '#FFFFFF',
                  borderColor: isActive || isCompleted ? '#C89A3D' : '#ECE6DD',
                  color: isActive || isCompleted ? '#FFFFFF' : '#777777',
                }}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                  isActive ? 'shadow-[0_0_15px_rgba(200,154,61,0.4)]' : ''
                }`}
              >
                {isCompleted ? <Check size={14} strokeWidth={3} /> : step.id}
              </motion.div>
              <div className="absolute top-10 w-32 text-center">
                <p className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${isActive ? 'text-[#2C2C2C]' : 'text-[#777777]'}`}>
                  {step.id}. {step.title}
                </p>
                <p className="text-[10px] text-[#777777] hidden md:block">
                  {step.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
