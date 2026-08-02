import { motion } from "framer-motion";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Feather,
  HeartHandshake,
  Leaf,
  MapPin,
  Award,
} from "lucide-react";

// Images (Assumes files exist as requested)
import story1 from "../../assets/images/story1.webp";
import story2 from "../../assets/images/story2.webp";
import shopBg from "../../assets/images/shop.webp";
import crafted from "../../assets/images/crafted.webp";

import scarabIcon from "../../assets/images/scarab_icon.png";
import ankhIcon from "../../assets/images/ankh_icon.png";
import pyramidIcon from "../../assets/images/pyramid_icon.png";
import eyeIcon from "../../assets/images/eye_icon.png";
import pharaohIcon from "../../assets/images/pharaoh_icon.png";
import sunsetBg from "../../assets/images/sunset_bg_wide.png";
import Footer from "../../components/layout/Footer";

// Reusable Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function OurStory() {
  return (
    <div className="w-full bg-[#FCFAF7] text-[#2D2A26] font-sans overflow-hidden pt-16">
      {/* =======================
           SECTION 1: Hero (White Blended Background)
           ======================= */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-start overflow-hidden bg-[#FCFAF7]">
        {/* Background Image - Anchored on the Right */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-y-0 right-0 w-full lg:w-[85%] bg-cover bg-[position:80%_center] bg-no-repeat"
          style={{ backgroundImage: `url(${story1})` }}
        />

        {/* White Filters and Overlays - Fading from Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF7] from-30% via-[#FCFAF7]/80 via-40% to-transparent to-50%"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="flex flex-col items-start max-w-xl"
          >
            <Feather
              className="w-8 h-8 text-[#B88932] mb-6 drop-shadow-sm"
              strokeWidth={1.5}
            />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#B88932] tracking-widest uppercase mb-4 drop-shadow-sm">
              Our Story
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-[#B88932] mb-6 leading-snug drop-shadow-sm">
              From Ancient Roots,
              <br />
              To Modern Legacy.
            </h2>
            <p className="text-[#2D2A26] font-medium text-lg leading-relaxed mb-10 opacity-90 drop-shadow-sm">
              AURA is more than a brand — it's a revival of Egypt's timeless
              spirit. Blending ancient symbols with modern design, we craft
              pieces that carry history into the future.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-8 py-3 border border-[#B88932] text-[#B88932] bg-[#FCFAF7]/60 backdrop-blur-sm rounded-full hover:bg-[#B88932] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="uppercase tracking-widest text-xs font-semibold">
                Our Journey
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* =======================
           SECTION 2: The Vision
           ======================= */}
      <section className="relative w-full min-h-[65vh] flex items-center justify-end overflow-hidden bg-[#FCFAF7] border-t border-[#E8E0D5]/50">
        {/* Background Image - Anchored on the Left */}
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 w-full lg:w-[90%] bg-cover bg-[position:15%_center] bg-no-repeat"
          style={{ backgroundImage: `url(${story2})` }}
        />

        {/* White Filters and Overlays - Fading from Right to Left */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#FCFAF7] from-20% via-[#FCFAF7]/90 via-50% to-transparent"></div>

        {/* Content - Positioned on the Right */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-16 flex justify-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-xl"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-[#B88932] tracking-widest uppercase mb-4 drop-shadow-sm">
              The AURA Story
            </h3>
            <div className="w-16 h-[1px] bg-[#B88932] mb-8 opacity-50"></div>
            <div className="space-y-6 text-[#2D2A26] font-medium text-lg leading-relaxed opacity-90 drop-shadow-sm">
              <p>
                Born from a deep love for Egypt's rich heritage, AURA was
                created to reconnect the past with the present. Every design is
                inspired by ancient civilizations, powerful symbols, and the
                eternal beauty of our culture.
              </p>
              <p>
                We believe that what we wear is more than fabric — it's
                identity, pride, and legacy. Our garments are meticulously
                crafted to embody the elegance of our ancestors while serving
                the modern wardrobe.
              </p>
              <p className="text-[#B88932] font-semibold italic">
                This is not just fashion. This is AURA.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================
           SECTION 3: Values
           ======================= */}
      <section className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center bg-[#1A1816]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${shopBg})` }}
        ></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-serif text-[#B88932] tracking-widest uppercase mb-6 drop-shadow-md">
              Our Values
            </h3>
            <div className="flex items-center gap-[2px]">
              <div className="w-24 h-[1px] lg:h-[1.5px] bg-[#B88932] opacity-70"></div>
              <img
                src={scarabIcon}
                alt="Divider"
                className="w-16 h-16 object-contain drop-shadow-[0_0_6px_rgba(184,137,50,0.6)]"
              />
              <div className="w-24 h-[1px] lg:h-[1.5px] bg-[#B88932] opacity-70"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-y-12 lg:gap-y-0">
            {[
              {
                imgIcon: pyramidIcon,
                title: "Heritage",
                desc: "We honor ancient Egypt and keep its legacy alive in everything we create.",
              },
              {
                imgIcon: scarabIcon,
                title: "Authenticity",
                desc: "Every detail is inspired by real history, not just passing trends.",
              },
              {
                imgIcon: eyeIcon,
                title: "Quality",
                desc: "We use premium materials and fine craftsmanship to deliver excellence.",
              },
              {
                imgIcon: ankhIcon,
                title: "Timeless Design",
                desc: "Our pieces are made to be timeless, just like the legacy we represent.",
              },
            ].map((value, i, arr) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:w-1/4"
              >
                {/* Content Column */}
                <div className="flex flex-col items-center text-center px-4 sm:px-8 group">
                  <img
                    src={value.imgIcon}
                    alt={value.title}
                    className="w-16 h-16 object-contain mb-6 drop-shadow-[0_0_8px_rgba(184,137,50,0.4)] transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <h4 className="text-[#B88932] font-bold tracking-widest uppercase text-sm mb-4">
                    {value.title}
                  </h4>
                  <p className="text-white text-sm leading-relaxed max-w-[250px] opacity-90">
                    {value.desc}
                  </p>
                </div>

                {/* Vertical Divider (Hidden on last item and mobile) */}
                {i !== arr.length - 1 && (
                  <div className="hidden lg:flex flex-col items-center justify-center self-stretch mx-2">
                    <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#B88932]/70 to-transparent"></div>
                  </div>
                )}
                {/* Horizontal Divider for Mobile (Hidden on last item and desktop) */}
                {i !== arr.length - 1 && (
                  <div className="lg:hidden w-32 h-[1px] bg-gradient-to-r from-transparent via-[#B88932]/50 to-transparent mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
           SECTION 4: Timeline
           ======================= */}
      <section className="relative w-full bg-[#FCFAF7] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-serif text-[#B88932] tracking-widest uppercase mb-6 drop-shadow-[0_0_15px_rgba(184,137,50,0.5)] text-center">
              Our Journey
            </h3>
            <div className="flex items-center gap-[2px]">
              <div className="w-24 h-[1px] lg:h-[1.5px] bg-[#B88932] opacity-70"></div>
              <img
                src={scarabIcon}
                alt="Divider"
                className="w-16 h-16 object-contain drop-shadow-[0_0_6px_rgba(184,137,50,0.6)]"
              />
              <div className="w-24 h-[1px] lg:h-[1.5px] bg-[#B88932] opacity-70"></div>
            </div>
          </motion.div>

          <div className="relative w-full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col lg:flex-row items-start justify-between relative z-10 gap-12 lg:gap-0 w-full"
            >
              {[
                {
                  imgIcon: pyramidIcon,
                  year: "2021",
                  title: "The Idea",
                  desc: "A spark of inspiration to revive Egypt's heritage.",
                },
                {
                  imgIcon: scarabIcon,
                  year: "2022",
                  title: "Beginning",
                  desc: "Turning our vision into designs that speak history.",
                },
                {
                  imgIcon: ankhIcon,
                  year: "2023",
                  title: "First Collection",
                  desc: "Our first collection launched — where ancient meets modern.",
                },
                {
                  imgIcon: eyeIcon,
                  year: "2024",
                  title: "Growing Legacy",
                  desc: "Expanding our family and sharing our story with the world.",
                },
                {
                  imgIcon: pharaohIcon,
                  year: "Future",
                  title: "The Legacy",
                  desc: "Continuing to create, inspire, and leave a legacy behind.",
                },
              ].map((item, i, arr) => (
                <Fragment key={i}>
                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-center text-center group flex-shrink-0 w-full lg:w-48"
                  >
                    <div className="h-20 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                      <img
                        src={item.imgIcon}
                        alt={item.title}
                        className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-[0_0_8px_rgba(184,137,50,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(184,137,50,0.7)] group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <h5 className="text-[#B88932] font-serif font-bold text-2xl tracking-wider drop-shadow-sm mb-2">
                      {item.year}
                    </h5>
                    <h6 className="text-[#2D2A26] font-bold text-sm uppercase tracking-widest mb-3">
                      {item.title}
                    </h6>
                    <p className="text-[#6F6A63] text-sm max-w-[200px] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* Connector Line with Diamond */}
                  {i !== arr.length - 1 && (
                    <div className="hidden lg:flex flex-1 h-20 items-center justify-center px-4">
                      <div className="w-full h-[1px] bg-[#D1C6B4] relative flex items-center justify-center">
                        <div className="absolute w-2 h-2 bg-[#B88932] rotate-45 shadow-[0_0_5px_rgba(184,137,50,0.5)]"></div>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =======================
           SECTION 5: Craftsmanship
           ======================= */}
      <section className="relative w-full bg-[#FCFAF7] overflow-hidden flex flex-col lg:flex-row border-t border-[#E8E0D5]/50">
        {/* Left Side: Image (Spans exactly 50% of viewport) */}
        <div className="w-full lg:w-1/2 lg:absolute lg:inset-y-0 lg:left-0 relative">
          <img
            src={crafted}
            alt="Craftsmanship"
            className="w-full h-[300px] lg:h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex justify-end relative z-10">
          <div className="w-full lg:w-1/2 py-12 lg:py-16 lg:pl-16 flex flex-col justify-center bg-[#FCFAF7] lg:bg-transparent">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeRight}
            >
              <h3 className="text-3xl font-serif text-[#8C6523] tracking-widest uppercase mb-4 drop-shadow-sm">
                Crafted With Passion
              </h3>
              <div className="w-16 h-[1px] bg-[#B88932] mb-8 opacity-50"></div>
              <p className="text-[#6F6A63] font-serif italic text-base leading-loose mb-12 opacity-90">
                Behind every AURA piece, there are skilled hands, careful
                attention to detail, and a passion for perfection. We work with
                local artisans who share our belief that true beauty lies in
                heritage and craftsmanship.
              </p>

              <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between w-full gap-y-8">
                {[
                  { icon: HeartHandshake, text: "Made with Care" },
                  { icon: Leaf, text: "Ethically Sourced" },
                  { icon: MapPin, text: "Proudly Egyptian" },
                  { icon: Award, text: "Premium Quality" },
                ].map((item, i, arr) => (
                  <Fragment key={i}>
                    <div className="flex flex-col items-center text-center gap-3 group w-[45%] lg:w-auto">
                      <item.icon
                        className="w-6 h-6 text-[#B88932] group-hover:scale-110 transition-transform"
                        strokeWidth={1.5}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2D2A26] leading-relaxed max-w-[120px]">
                        {item.text}
                      </span>
                    </div>
                    {i !== arr.length - 1 && (
                      <div className="hidden lg:block h-12 w-[1px] bg-[#B88932] opacity-40 self-center"></div>
                    )}
                  </Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =======================
           SECTION 6: Quote Banner
           ======================= */}
      <section
        className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center text-center px-4 bg-cover bg-center border-y border-[#B88932]/20"
        style={{ backgroundImage: `url(${sunsetBg})` }}
      >
        {/* Warm Dark Overlay */}
        <div className="absolute inset-0 bg-[#1A1105]/60 backdrop-blur-[1px]"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-4xl flex flex-col items-center"
        >
          {/* Icon with side lines */}
          <div className="flex items-center gap-6 mb-4">
            <div className="w-12 md:w-24 h-[1px] bg-[#B88932] opacity-60 shadow-[0_0_8px_rgba(184,137,50,0.8)]"></div>
            <img
              src={scarabIcon}
              alt="AURA Icon"
              className="w-20 h-16 md:w-28 md:h-20 object-contain drop-shadow-[0_0_12px_rgba(184,137,50,0.8)]"
            />
            <div className="w-12 md:w-24 h-[1px] bg-[#B88932] opacity-60 shadow-[0_0_8px_rgba(184,137,50,0.8)]"></div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#B88932] tracking-wider uppercase mb-4 drop-shadow-xl">
            The Legacy Continues
          </h2>
          <p className="text-[#FCFAF7] text-lg md:text-xl font-medium tracking-wide mb-10 drop-shadow-md">
            Wear history. Shape the future.
          </p>

          <Link
            to="/collections"
            className="group flex items-center gap-4 px-10 py-3 bg-white/10 border border-[#E3CD91]/60 text-white hover:bg-white/20 hover:border-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-sm backdrop-blur-sm"
          >
            <span className="uppercase tracking-widest text-sm font-semibold">
              Explore Collection
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* =======================
           SECTION 7: Footer
           ======================= */}
      <Footer />
    </div>
  );
}
