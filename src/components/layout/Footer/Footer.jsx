import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Headphones, Phone, Clock, X } from 'lucide-react'

// TEMP placeholders — replace with your real assets once ready
import brandImage from '../../../assets/images/logo/Aura_logo.PNG'
import bottomBarBg from '../../../assets/images/backgrounds/footer-bg.PNG'
// const bottomBarBg = null
import bottomCenterIcon from '../../../assets/images/hero/hero-icons-3.PNG'
// const bottomCenterIcon = null

// TEMP placeholders — payment method logos (replace with your real icon images)

import cashOnDeliveryLogo from '../../../assets/icons/cashOnDelivery-icon.png'
import instapayLogo from '../../../assets/icons/instapay-icon.png'
import visaLogo from '../../../assets/icons/visa-icon.png'
import vodafoneCashLogo from '../../../assets/icons/vodafoneCash-icon.png'


const PAYMENT_METHODS = [
  { id: 'visa', label: 'VISA', image: visaLogo },
  { id: 'vodafone-cash', label: 'Vodafone Cash', image: vodafoneCashLogo },
  { id: 'instapay', label: 'InstaPay', image: instapayLogo },
  { id: 'cod', label: 'Cash on Delivery', image: cashOnDeliveryLogo },
]

const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'New Arrivals', href: '/new-arrivals' },
      { label: 'Best Sellers', href: '/best-sellers' },
      { label: 'Polo', href: '/collections/Polo' },
      { label: 'Modern', href: '/collections/Modern' },
      { label: 'Ancient', href: '/collections/Ancient' },
    ],
  },
  {
    title: 'Collections',
    links: [
      { label: 'Polo', href: '/collections/Polo' },
      { label: 'Modern', href: '/collections/Modern' },
      { label: 'Ancient', href: '/collections/Ancient' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      {
        label: 'FAQs',
        modal: {
          title: 'FAQs',
          content: 'هنا تقدر تحط الأسئلة الشائعة الخاصة بالمتجر، زي مواعيد التوصيل، طرق الدفع المتاحة، وسياسة الاستبدال.',
        },
      },
      {
        label: 'Shipping & Delivery',
        modal: {
          title: 'Shipping & Delivery',
          content: 'التوصيل بياخد من 2 لـ 5 أيام عمل داخل القاهرة والجيزة، ومن 4 لـ 7 أيام لباقي المحافظات. الشحن مجاني للطلبات أكتر من 1500 جنيه.',
        },
      },
      {
        label: 'Returns & Exchanges',
        modal: {
          title: 'Returns & Exchanges',
          content: 'تقدر ترجع أو تستبدل أي منتج خلال 14 يوم من تاريخ الاستلام، بشرط إن المنتج يكون في حالته الأصلية وملوش أي علامات استخدام.',
        },
      },
      {
        label: 'Size Guide',
        modal: {
          title: 'Size Guide',
          content: 'جدول المقاسات بيختلف حسب نوع المنتج. للتيشيرتات والهوديز، قيس أعرض نقطة في الصدر وقارنها بجدول المقاسات الموجود في صفحة كل منتج.',
        },
      },
      {
        label: 'Track Your Order',
        modal: {
          title: 'Track Your Order',
          content: 'تقدر تتابع حالة طلبك من صفحة "طلباتي" بعد تسجيل الدخول، أو من خلال رقم التتبع اللي بيوصلك على الإيميل بعد الشحن.',
        },
      },
      {
        label: 'Contact Us',
        modal: {
          title: 'Contact Us',
          content: 'تقدر تتواصل معانا عبر الإيميل support@aura.com أو رقم الهاتف +20 123 456 7890، من السبت للخميس، من 9 صباحًا لـ 9 مساءً.',
        },
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Journal', href: '/journal' },
      { label: 'Careers', href: '/careers' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.6V3.7C15.9 3.6 15 3.5 13.9 3.5c-2.4 0-4 1.5-4 4.1v2.3H7.2v3.1h2.7v8h3.6z" />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://tiktok.com',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.6 5.82c-1-.9-1.6-2.17-1.6-3.57h-3.3v13.6c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .6.05.9.14V9.86c-.3-.04-.6-.06-.9-.06-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6V8.9c1.2.86 2.7 1.36 4.3 1.36V6.96c-.9 0-1.7-.2-2.5-.6 0 0-1 .06 0 0 0-.02 0-.5 0-.54z" />
      </svg>
    ),
  },

]

export default function FooterSection() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <footer className="relative w-full">
      {/* ── Top Section (light) ── */}
      <div className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-10 pt-10 lg:pt-14 pb-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] gap-x-6 gap-y-10 lg:gap-x-8">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-1">
            {brandImage ? (
              <img src={brandImage} alt="AURA - Ancient Soul. Modern Aura." className="h-16 lg:h-25 w-auto m-0 object-cover" />
            ) : (
              <div className="h-16 lg:h-20 w-[190px] flex items-center justify-center border border-dashed border-[var(--color-gold-light)]/60 rounded-sm">
                <span className="text-[0.6rem] uppercase tracking-wide text-[#B4AC98] text-center px-2">
                  logo + tagline image
                </span>
              </div>
            )}

            <p className="text-[0.78rem] text-[#6B6456] leading-[1.6] max-w-[240px]">
              Luxury Egyptian fashion reimagined for the modern era. Timeless heritage, crafted with passion.
            </p>

            <div className="flex items-center gap-2.5 mt-5">
              {SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--color-gold-light)]/50 text-[var(--color-gold)] transition-colors duration-200 hover:bg-[var(--color-gold)] hover:text-white"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-[var(--font-ui)] text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[var(--color-gold)] mb-4">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.modal ? (
                      <button
                        type="button"
                        onClick={() => setActiveModal(link.modal)}
                        className="text-[0.78rem] text-[#5C5648] transition-colors duration-200 hover:text-[var(--color-gold)] text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[0.78rem] text-[#5C5648] transition-colors duration-200 hover:text-[var(--color-gold)]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Support Column */}
          <div>
            <h3 className="font-[var(--font-ui)] text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[var(--color-gold)] mb-4">
              Support
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <Headphones className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                <a href="mailto:support@aura.com" className="text-[0.78rem] text-[#5C5648] hover:text-[var(--color-gold)] transition-colors duration-200">
                  support@aura.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                <a href="tel:+201234567890" className="text-[0.78rem] text-[#5C5648] hover:text-[var(--color-gold)] transition-colors duration-200">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                <span className="text-[0.78rem] text-[#5C5648] leading-[1.5]">
                  Mon - Sat: 9AM - 9PM<br />Sun: 11AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar (dark) — full-width background image, no payment section ── */}
      <div
        className="relative py-10 sm:py-10 md:py-12 lg:py-0 lg:h-[40vh] w-full bg-[#1A1712] bg-cover bg-center bg-no-repeat"
        style={bottomBarBg ? { backgroundImage: `url(${bottomBarBg})` } : undefined}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
          {/* Left: Secure Payments */}
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-9 h-9 flex items-center justify-center border border-[var(--color-gold-light)]/40 rounded-sm text-[var(--color-gold)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
                <rect x="5" y="11" width="14" height="9" rx="1.5" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[var(--color-gold)]">
                Secure Payments
              </p>
              <p className="text-[0.68rem] text-[#9A9384] mt-0.5">
                Your payment information is always safe and encrypted.
              </p>
            </div>
          </div>

          {/* Middle: Payment method badges */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.id}
                className="h-8 px-1 flex items-center justify-center border border-[var(--color-gold-light)]/40 rounded-sm bg-[#1A1712]"
              >
                {method.image ? (
                  <img src={method.image} alt={method.label} className="h-18 w-18 object-contain" />
                ) : (
                  <span className="text-[0.62rem] font-semibold text-[#5C5648] whitespace-nowrap">
                    {method.label}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right: stacked copyright text */}
          <div className="flex flex-col gap-1 text-center sm:text-right">
            <p className="text-[0.72rem] text-[#C9C2B2]">
              © 2024 AURA. All rights reserved.
            </p>
            <p className="text-[0.72rem] text-[#C9C2B2]">
              Designed with <span className="text-[var(--color-gold)]">♥</span> in Egypt.
            </p>
          </div>
        </div>

        {/* Bottom-center small icon sitting on the top edge of the dark bar */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 flex items-center justify-center bg-[#1A1712] rounded-full">
          {bottomCenterIcon ? (
            <img src={bottomCenterIcon} alt="" className="w-10 h-10 object-contain" />
          ) : (
            <span className="w-2 h-2 rounded-full border border-[var(--color-gold-light)]/60" />
          )}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              key="modal-content"
              className="relative w-full max-w-md bg-white rounded-lg shadow-2xl border border-[var(--color-gold-light)]/40 p-6 sm:p-7"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-[#8A8272] hover:bg-[#F5F2EA] hover:text-[var(--color-gold)] transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-[var(--font-ui)] text-[1.05rem] font-semibold tracking-[0.02em] text-[var(--color-gold)] mb-3 pr-6">
                {activeModal.title}
              </h3>
              <p className="text-[0.85rem] text-[#5C5648] leading-[1.7]">
                {activeModal.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}