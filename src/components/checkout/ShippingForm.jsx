import { Mail, User, Phone, MapPin, Building, Hash, StickyNote } from 'lucide-react';

export default function ShippingForm({ register, errors }) {
  const inputClass = "w-full h-12 pl-11 pr-4 bg-[#FAF7F2] border rounded-xl text-[13px] outline-none transition-colors";
  
  return (
    <div className="bg-white rounded-[32px] p-6 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] mb-8">
      <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#2C2C2C] mb-8 pb-4 border-b border-[#ECE6DD]">
        Contact Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="relative md:col-span-2">
          <label className="block text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
            <input 
              {...register("contact.email")}
              type="email" 
              placeholder="you@example.com" 
              className={`${inputClass} ${errors.contact?.email ? 'border-red-500' : 'border-[#ECE6DD] focus:border-[#C89A3D]'}`} 
            />
          </div>
          {errors.contact?.email && <p className="text-red-500 text-[11px] mt-1">{errors.contact.email.message}</p>}
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <input type="checkbox" {...register("contact.newsletter")} id="newsletter" className="w-4 h-4 accent-[#C89A3D]" />
          <label htmlFor="newsletter" className="text-[12px] text-[#2C2C2C]">Email me with news and offers</label>
        </div>
      </div>

      <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#2C2C2C] mb-8 pb-4 border-b border-[#ECE6DD]">
        Shipping Address
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">Full Name *</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
            <input 
              {...register("shipping.fullName")}
              type="text" 
              placeholder="Enter your full name" 
              className={`${inputClass} ${errors.shipping?.fullName ? 'border-red-500' : 'border-[#ECE6DD] focus:border-[#C89A3D]'}`} 
            />
          </div>
          {errors.shipping?.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.shipping.fullName.message}</p>}
        </div>

        <div className="relative">
          <label className="block text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">Phone Number *</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
            <input 
              {...register("shipping.phone")}
              type="tel" 
              placeholder="01 2345 6789" 
              className={`${inputClass} ${errors.shipping?.phone ? 'border-red-500' : 'border-[#ECE6DD] focus:border-[#C89A3D]'}`} 
            />
          </div>
          {errors.shipping?.phone && <p className="text-red-500 text-[11px] mt-1">{errors.shipping.phone.message}</p>}
        </div>

        <div className="relative md:col-span-2">
          <label className="block text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">Address *</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
            <input 
              {...register("shipping.address")}
              type="text" 
              placeholder="Street address, house number, etc." 
              className={`${inputClass} ${errors.shipping?.address ? 'border-red-500' : 'border-[#ECE6DD] focus:border-[#C89A3D]'}`} 
            />
          </div>
          {errors.shipping?.address && <p className="text-red-500 text-[11px] mt-1">{errors.shipping.address.message}</p>}
        </div>

        <div className="relative">
          <label className="block text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">City *</label>
          <div className="relative">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
            <input 
              {...register("shipping.city")}
              type="text" 
              placeholder="Enter your city" 
              className={`${inputClass} ${errors.shipping?.city ? 'border-red-500' : 'border-[#ECE6DD] focus:border-[#C89A3D]'}`} 
            />
          </div>
          {errors.shipping?.city && <p className="text-red-500 text-[11px] mt-1">{errors.shipping.city.message}</p>}
        </div>

        <div className="relative">
          <label className="block text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">Governorate *</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
            <select 
              {...register("shipping.governorate")}
              className={`${inputClass} ${errors.shipping?.governorate ? 'border-red-500' : 'border-[#ECE6DD] focus:border-[#C89A3D]'} appearance-none cursor-pointer`}
            >
              <option value="">Select governorate</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Aswan">Aswan</option>
              <option value="Asyut">Asyut</option>
              <option value="Beheira">Beheira</option>
              <option value="Beni Suef">Beni Suef</option>
              <option value="Cairo">Cairo</option>
              <option value="Dakahlia">Dakahlia</option>
              <option value="Damietta">Damietta</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Gharbia">Gharbia</option>
              <option value="Giza">Giza</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Kafr El Sheikh">Kafr El Sheikh</option>
              <option value="Luxor">Luxor</option>
              <option value="Matrouh">Matrouh</option>
              <option value="Minya">Minya</option>
              <option value="Monufia">Monufia</option>
              <option value="New Valley">New Valley</option>
              <option value="North Sinai">North Sinai</option>
              <option value="Port Said">Port Said</option>
              <option value="Qalyubia">Qalyubia</option>
              <option value="Qena">Qena</option>
              <option value="Red Sea">Red Sea</option>
              <option value="Sharqia">Sharqia</option>
              <option value="Sohag">Sohag</option>
              <option value="South Sinai">South Sinai</option>
              <option value="Suez">Suez</option>
              <option value="Outside Egypt">Outside Egypt / International</option>
            </select>
          </div>
          {errors.shipping?.governorate && <p className="text-red-500 text-[11px] mt-1">{errors.shipping.governorate.message}</p>}
        </div>

        <div className="relative md:col-span-2">
          <label className="block text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">Postal Code *</label>
          <div className="relative">
            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
            <input 
              {...register("shipping.postalCode")}
              type="text" 
              placeholder="Enter postal code" 
              className={`${inputClass} ${errors.shipping?.postalCode ? 'border-red-500' : 'border-[#ECE6DD] focus:border-[#C89A3D]'}`} 
            />
          </div>
          {errors.shipping?.postalCode && <p className="text-red-500 text-[11px] mt-1">{errors.shipping.postalCode.message}</p>}
        </div>
        
        <div className="md:col-span-2 flex items-center gap-3">
          <input type="checkbox" {...register("shipping.saveInfo")} id="saveInfo" className="w-4 h-4 accent-[#C89A3D]" />
          <label htmlFor="saveInfo" className="text-[12px] text-[#2C2C2C]">Save this address for next time</label>
        </div>
      </div>
    </div>
  );
}
