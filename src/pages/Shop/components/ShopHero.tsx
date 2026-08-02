import { motion } from 'framer-motion';
import shopBg from '../../../assets/images/hero/Shop.png';
import hero44 from '../../../assets/images/hero/hero44.png';
import dividerLogo from '../../../assets/images/hero/dividerLogo.PNG';

export default function ShopHero() {
  return (
    <div className="w-full bg-[#FDFBF7]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div 
          className="w-full relative flex flex-col items-center justify-center py-12 md:py-16 bg-cover bg-center rounded-[2rem] overflow-hidden"
          style={{ backgroundImage: `url(${shopBg})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center relative z-10"
          >
            <div className="w-[300px] sm:w-[450px] md:w-[550px] flex justify-center -mb-[60px] sm:-mb-[90px] md:-mb-[120px]">
              <img 
                src={hero44} 
                alt="AURA Icon" 
                className="w-full h-auto object-contain opacity-90 drop-shadow-md"
                style={{ clipPath: 'inset(0 0 36% 0)' }}
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#D4AF37] tracking-widest mb-6 sm:mb-10 drop-shadow-md">
              SHOP
            </h1>

            <div className="flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="flex-1 h-[1px] bg-[#B08D57] opacity-30"></div>
              <img 
                src={dividerLogo} 
                alt="AURA Divider" 
                className="h-10 sm:h-16 md:h-20 mx-4 sm:mx-6 object-contain drop-shadow-md"
              />
              <div className="flex-1 h-[1px] bg-[#B08D57] opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
