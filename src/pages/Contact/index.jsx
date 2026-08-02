import { motion } from "framer-motion";
import { Mail, Phone, Clock, ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

import contactBg from "../../assets/images/contact_bg.jpg";
import pharaohIcon from "../../assets/images/pharaoh_icon.png";
import scarabIcon from "../../assets/images/scarab_icon.png";

// Reusable Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 14-day return policy for all unused items in their original packaging. Custom pieces are non-refundable.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping costs are calculated at checkout based on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you will receive a tracking number via email to monitor its journey.",
    },
  ];

  return (
    <div className="w-full bg-[#FCFAF7] min-h-screen pt-16">
      {/* =======================
           SECTION 1: Hero Banner
           ======================= */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundPosition: "center calc(50% - 5px)",
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-4 flex flex-col items-center max-w-3xl mx-auto"
        >
          <img
            src={pharaohIcon}
            alt="AURA"
            className="w-24 h-24 object-contain mb-4 drop-shadow-2xl"
          />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-widest uppercase mb-6 drop-shadow-lg">
            Contact Us
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#E3CD91] shadow-lg"></div>
            <img
              src={scarabIcon}
              alt="Scarab"
              className="w-6 h-6 object-contain"
            />
            <div className="w-12 h-[1px] bg-[#E3CD91] shadow-lg"></div>
          </div>

          <p className="text-[#F6F4F0] text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
            We would love to hear from you.
            <br />
            Reach out to us for any inquiries, collaborations,
            <br />
            or support.
          </p>
        </motion.div>
      </section>

      {/* =======================
           SECTION 2: Contact Form (Floated Over Banner)
           ======================= */}
      <section className="relative w-full px-4 sm:px-8 -mt-12 md:-mt-20 z-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-[#FCFAF7]/70 backdrop-blur-md rounded-[30px] shadow-[0_0_50px_rgba(184,137,50,0.6),0_0_15px_rgba(227,205,145,0.4)] border border-[#E3CD91]/50 p-8 md:p-12 lg:p-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-[#8C6523] tracking-widest uppercase mb-4">
              Send Us A Message
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-[#B88932]/40"></div>
              <img
                src={scarabIcon}
                alt="Scarab"
                className="w-4 h-4 object-contain opacity-60"
              />
              <div className="w-8 h-[1px] bg-[#B88932]/40"></div>
            </div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-[#D1C6B4]/60 rounded-sm text-[#2D2A26] placeholder-[#8F8A83] focus:outline-none focus:border-[#B88932] focus:bg-white/80 transition-all"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-[#D1C6B4]/60 rounded-sm text-[#2D2A26] placeholder-[#8F8A83] focus:outline-none focus:border-[#B88932] focus:bg-white/80 transition-all"
                />
              </div>
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-[#D1C6B4]/60 rounded-sm text-[#2D2A26] placeholder-[#8F8A83] focus:outline-none focus:border-[#B88932] focus:bg-white/80 transition-all"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-[#D1C6B4]/60 rounded-sm text-[#2D2A26] placeholder-[#8F8A83] focus:outline-none focus:border-[#B88932] focus:bg-white/80 transition-all resize-none"
            ></textarea>

            <button
              type="button"
              className="group flex items-center justify-center gap-4 w-full py-5 border border-[#B88932] text-white hover:text-[#B88932] shadow-[0_0_15px_rgba(184,137,50,0.4)] hover:shadow-[0_0_25px_rgba(184,137,50,0.7)] transition-all duration-300 rounded-sm mt-2"
              style={{ backgroundColor: "#B88932" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#B88932")
              }
            >
              <span className="uppercase tracking-[0.2em] text-sm font-bold">
                Send Message
              </span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>
      </section>

      {/* =======================
           SECTION 3: Contact Info Cards
           ======================= */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#D1C6B4]/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-16 h-16 rounded-full border border-[#B88932]/30 flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-[#B88932]" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#2D2A26] mb-3">
              Email Us
            </h3>
            <a
              href="mailto:hello@auraluxury.com"
              className="text-lg font-serif text-[#6F6A63] hover:text-[#B88932] transition-colors mb-2"
            >
              hello@auraluxury.com
            </a>
            <p className="text-xs text-[#8F8A83]">We reply within 24 hours</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-16 h-16 rounded-full border border-[#B88932]/30 flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-[#B88932]" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#2D2A26] mb-3">
              Call Us
            </h3>
            <a
              href="tel:+201234567890"
              className="text-lg font-serif text-[#6F6A63] hover:text-[#B88932] transition-colors mb-2"
            >
              +20 123 456 7890
            </a>
            <p className="text-xs text-[#8F8A83]">Mon - Sat: 10AM - 6PM</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-16 h-16 rounded-full border border-[#B88932]/30 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-[#B88932]" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#2D2A26] mb-3">
              Working Hours
            </h3>
            <p className="text-lg font-serif text-[#6F6A63] mb-2">
              Mon - Sat: 10AM - 6PM
            </p>
            <p className="text-xs text-[#8F8A83]">Sun: 11AM - 5PM</p>
          </motion.div>
        </div>
      </section>

      {/* =======================
           SECTION 4: FAQ Accordion
           ======================= */}
      <section className="w-full bg-white py-24 px-4 border-t border-[#E8E0D5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-[#8C6523] tracking-widest uppercase mb-4">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#B88932]/40"></div>
              <img
                src={scarabIcon}
                alt="Scarab"
                className="w-12 h-12 object-contain opacity-60"
              />
              <div className="w-12 h-[1px] bg-[#B88932]/40"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-[#D1C6B4]/50 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 bg-[#FCFAF7] hover:bg-white transition-colors text-left"
                >
                  <span className="text-sm font-medium text-[#2D2A26] pr-4">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-[#B88932] transform transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 border-t border-[#D1C6B4]/30" : "max-h-0"}`}
                >
                  <p className="p-5 text-sm text-[#6F6A63] leading-relaxed bg-white">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#6F6A63] text-sm">
              Still have questions? Visit our{" "}
              <a href="#" className="text-[#B88932] hover:underline">
                FAQ page
              </a>{" "}
              <ArrowRight className="inline w-3 h-3 ml-1" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
