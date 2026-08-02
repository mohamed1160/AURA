import { CreditCard, Banknote } from 'lucide-react';

export default function PaymentMethods({ register, errors, watch }) {
  const selectedMethod = watch("paymentMethod");

  const methods = [
    { id: "card", label: "Credit / Debit Card", icon: CreditCard, subtitle: "Visa, MasterCard" },
    { id: "cod", label: "Cash on Delivery", icon: Banknote, subtitle: "Pay when you receive" },
  ];

  return (
    <div className="bg-white rounded-[32px] p-6 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] mb-8">
      <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#2C2C2C] mb-8 pb-4 border-b border-[#ECE6DD]">
        Payment Method
      </h2>

      <div className="flex flex-col gap-4">
        {methods.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <label 
              key={method.id} 
              className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                isSelected ? 'border-[#C89A3D] bg-[#FAF7F2]' : 'border-[#ECE6DD] hover:border-[#C89A3D]'
              }`}
            >
              <input 
                type="radio" 
                value={method.id} 
                {...register("paymentMethod")} 
                className="hidden"
              />
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${
                isSelected ? 'border-[#C89A3D]' : 'border-[#ECE6DD]'
              }`}>
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#C89A3D]" />}
              </div>
              <method.icon className={`mr-4 ${isSelected ? 'text-[#C89A3D]' : 'text-[#777777]'}`} size={24} strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className={`text-[13px] font-bold ${isSelected ? 'text-[#2C2C2C]' : 'text-[#777777]'}`}>
                  {method.label}
                </span>
                <span className="text-[11px] text-[#777777]">
                  {method.subtitle}
                </span>
              </div>
            </label>
          );
        })}
      </div>
      {errors.paymentMethod && <p className="text-red-500 text-[11px] mt-4">{errors.paymentMethod.message}</p>}
    </div>
  );
}
