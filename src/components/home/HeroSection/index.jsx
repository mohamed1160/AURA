import { Link } from 'react-router-dom'
import heroBg from '../../../assets/images/hero/hero-bg.jpeg'
import dividerIcon from '../../../assets/images/hero/dividerLogo.PNG'
import logo from '../../../assets/images/logo/Aura_logo.PNG'

const heroIconModules = import.meta.glob('../../../assets/images/hero/hero-icons-*.PNG', { eager: true, import: 'default' })
const HERO_ICON_NAMES = [
  'hero-icons-1.PNG',
  'hero-icons-2.PNG',
  'hero-icons-3.PNG',
  'hero-icons-4.PNG',
]

/* ── Brand Values Data ───────────────────────────────── */
const BRAND_VALUES = [
  { id: 'legacy',   lines: ['Inspired', 'by Legacy']  },
  { id: 'pride',    lines: ['Crafted', 'with Pride']  },
  { id: 'history',  lines: ['Wear Your', 'History']   },
  { id: 'standout', lines: ['Made to', 'Stand Out']   },
]

/* ── HeroSection ─────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--color-cream)] bg-center bg-cover bg-no-repeat overflow-hidden py-[32px] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(184,146,74,0.06)_0%,transparent_70%)] before:pointer-events-none" style={{ backgroundImage: `url(${heroBg})` }}>

      {/* ── Center Content ─────────────────────────────── */}
      <div className="relative z-[1] flex flex-col items-center text-center gap-0 px-[var(--space-xl)] py-[var(--space-xl)]">

        {/* Brand Logo */}
        <img src={logo} alt="AURA logo" className="w-[min(760px,80vw)] h-auto -mb-[6rem] block" />

        {/* Tagline */}
        <p className="font-[family-name:var(--font-ui)] text-[clamp(0.85rem,2vw,1.05rem)] font-normal tracking-[0.3em] text-[var(--color-gold)] uppercase leading-[1.8] -mt-[3rem]">
          Ancient Soul.<br />Modern Aura.
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center gap-[var(--space-md)] w-[260px]">
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-light)] to-transparent" />
          <span className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
            <img src={dividerIcon} alt="divider icon" className="w-full h-auto block" />
          </span>
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-light)] to-transparent" />
        </div>

        {/* CTA Button */}
        <Link to="/collections" className="inline-block py-[14px] px-[40px] border-[1.5px] border-[var(--color-gold)] bg-transparent font-[family-name:var(--font-ui)] text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-dark)] cursor-pointer transition-[background,color,box-shadow] duration-[0.35s] ease-[ease] mt-[var(--space-sm)] hover:bg-[var(--color-gold)] hover:text-[var(--color-white)] hover:shadow-[var(--shadow-gold)]">
          Discover the Collection
        </Link>
      </div>

      {/* ── Brand Values Strip ─────────────────────────── */}
      <div className="relative z-[1] w-full py-[var(--space-lg)] px-[var(--space-xl)] flex items-center justify-center gap-[var(--space-2xl)]">
        {BRAND_VALUES.map((item, index) => {
          const iconName = HERO_ICON_NAMES[index]
          const iconSrc = heroIconModules[`../../../assets/images/hero/${iconName}`]
          return (
            <div key={item.id} className="flex items-center gap-[48px]">
              <div className="flex items-center gap-[var(--space-md)]">
                {/* Icon Placeholder */}
                <div className="w-[80px] h-[80px] border-none rounded-none flex items-center justify-center text-[var(--color-gold-light)] text-[0.45rem] font-[family-name:var(--font-ui)] tracking-[0.04em] uppercase shrink-0">
                  {iconSrc ? (
                    <img src={iconSrc} alt={item.id} className="w-full h-full object-contain" />
                  ) : (
                    `Icon ${index + 1}`
                  )}
                </div>

                <div className="flex flex-col">
                  {item.lines.map((line, i) => (
                    <span key={i} className="font-[family-name:var(--font-ui)] text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-text)] leading-[1.5]">{line}</span>
                  ))}
                </div>
              </div>

            {/* Separator — not after last item */}
            {index < BRAND_VALUES.length - 1 && (
              <div className="w-[1px] h-[40px] bg-[var(--color-border)]" />
            )}
          </div>
        )
      })}
      </div>

    </section>
  )
}
