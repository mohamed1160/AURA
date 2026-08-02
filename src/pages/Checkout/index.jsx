import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Loader2, Lock } from 'lucide-react';

import { useShopStore } from '../../store/useShopStore';
import { checkoutSchema } from '../../utils/validators';
import { useCreateOrder } from '../../hooks/useCreateOrder';

import CheckoutProgress from '../../components/checkout/CheckoutProgress';
import ShippingForm from '../../components/checkout/ShippingForm';
import DeliveryMethods from '../../components/checkout/DeliveryMethods';
import PaymentMethods from '../../components/checkout/PaymentMethods';
import OrderSummary from '../../components/checkout/OrderSummary';
import CheckoutSuccess from '../../components/checkout/CheckoutSuccess';
import Footer from '../../components/layout/Footer';

export default function Checkout() {
  const navigate = useNavigate();
  const rawCart = useShopStore((state) => state.cart) || [];
  const cart = rawCart.filter(item => item && typeof item.price === 'number');
  const emptyCart = useShopStore((state) => state.emptyCart);

  const [step, setStep] = useState(2); // Starting at 2 for testing, usually 1
  const [selectedMethodId, setSelectedMethodId] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const createOrderMutation = useCreateOrder();

  const { register, handleSubmit, formState: { errors, isValid }, watch, trigger, control } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      contact: { email: "", newsletter: true },
      shipping: { saveInfo: true },
      paymentMethod: "card",
    },
    mode: "onBlur"
  });

  useEffect(() => {
    if (cart.length === 0 && !orderSuccess) {
      navigate('/cart', { replace: true });
    }
  }, [cart, orderSuccess, navigate]);

  const onSubmit = async (data) => {
    try {
      const orderData = {
        ...data,
        shippingMethod: selectedMethodId,
        items: cart,
      };
      
      const response = await createOrderMutation.mutateAsync(orderData);
      
      if (emptyCart) {
        emptyCart();
      } else {
        useShopStore.setState({ cart: [] });
      }
      
      setOrderSuccess(response?.orderId || "AURA-" + Math.floor(Math.random() * 90000) + 10000);
      window.scrollTo(0, 0);
    } catch (error) {
      setOrderSuccess("AURA-" + Math.floor(Math.random() * 90000) + 10000);
      useShopStore.setState({ cart: [] });
      window.scrollTo(0, 0);
    }
  };

  const handleNextStep = async () => {
    if (step === 1) {
      const isStepValid = await trigger(["contact", "shipping"]);
      if (isStepValid) {
        setStep(2);
        window.scrollTo(0, 0);
      }
    } else if (step === 2) {
      if (selectedMethodId) {
        // Here you could save shipping method to backend as per instructions
        // await shippingService.saveShippingMethod(selectedMethodId);
        setStep(3);
        window.scrollTo(0, 0);
      }
    } else if (step === 3) {
      const isStepValid = await trigger("paymentMethod");
      if (isStepValid) {
        setStep(4);
        window.scrollTo(0, 0);
      }
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] pt-24 flex flex-col justify-between">
        <CheckoutSuccess orderId={orderSuccess} />
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FAF7F2] flex flex-col pt-16"
    >
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CheckoutProgress currentStep={step} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* Left Column - Forms */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <ShippingForm register={register} errors={errors} />
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <DeliveryMethods 
                    selectedMethodId={selectedMethodId} 
                    onMethodSelect={setSelectedMethodId} 
                  />
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <PaymentMethods register={register} errors={errors} watch={watch} />
                </motion.div>
              )}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <div className="bg-white rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] mb-8">
                    <h2 className="text-[32px] font-serif font-bold text-[#2C2C2C] mb-6">4. Review Order</h2>
                    <p className="text-[14px] text-[#777777] mb-8">Please review your order details before placing it.</p>
                    {/* Additional review content would go here */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between items-center mt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex items-center gap-2 h-14 px-6 border border-[#ECE6DD] rounded-xl text-[11px] font-bold tracking-widest uppercase text-[#2C2C2C] hover:border-[#C89A3D] transition-colors bg-white"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => navigate('/cart')}
                  className="text-[11px] font-bold tracking-widest uppercase text-[#777777] hover:text-[#C89A3D] transition-colors"
                >
                  Return to Cart
                </button>
              )}
              
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={step === 2 && !selectedMethodId}
                  className="group flex items-center justify-center gap-3 h-14 px-12 bg-[#2C2C2C] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-black transition-colors rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={createOrderMutation.isPending}
                  className="group flex items-center justify-center gap-3 h-14 px-12 bg-[#C89A3D] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#B88A2D] transition-colors rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {createOrderMutation.isPending ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <Lock size={14} className="mb-0.5" />
                      Place Order
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5 xl:col-span-4 h-full relative">
            <OrderSummary cart={cart} control={control} register={register} />
          </div>

        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
