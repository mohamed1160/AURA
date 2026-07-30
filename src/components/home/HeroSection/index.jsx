import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css'
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
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>

      {/* ── Center Content ─────────────────────────────── */}
      <div className={styles.content}>

        {/* Brand Logo */}
        <img src={logo} alt="AURA logo" className={styles.brandLogo} />

        {/* Tagline */}
        <p className={styles.tagline}>
          Ancient Soul.<br />Modern Aura.
        </p>

        {/* Decorative Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerIcon}>
            <img src={dividerIcon} alt="divider icon" />
          </span>
          <span className={styles.dividerLine} />
        </div>

        {/* CTA Button */}
        <Link to="/collections" className={styles.ctaBtn}>
          Discover the Collection
        </Link>
      </div>

      {/* ── Brand Values Strip ─────────────────────────── */}
      <div className={styles.brandValues}>
        {BRAND_VALUES.map((item, index) => {
          const iconName = HERO_ICON_NAMES[index]
          const iconSrc = heroIconModules[`../../../assets/images/hero/${iconName}`]
          return (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
              <div className={styles.valueItem}>
                {/* Icon Placeholder */}
                <div className={styles.valueIcon}>
                  {iconSrc ? (
                    <img src={iconSrc} alt={item.id} />
                  ) : (
                    `Icon ${index + 1}`
                  )}
                </div>

                <div className={styles.valueText}>
                  {item.lines.map((line, i) => (
                    <span key={i} className={styles.valueLabel}>{line}</span>
                  ))}
                </div>
              </div>

            {/* Separator — not after last item */}
            {index < BRAND_VALUES.length - 1 && (
              <div className={styles.valueSep} />
            )}
          </div>
        )
      })}
      </div>

    </section>
  )
}
