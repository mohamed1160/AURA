import { NavLink } from 'react-router-dom'
import { Search, User, ShoppingBag } from 'lucide-react'
import { useShopStore } from '../../../store/useShopStore'
import logoImg from '../../../assets/images/aura-logo.png'

const NAV_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/shop',        label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/our-story',   label: 'Our Story' },
  { to: '/journal',     label: 'Journal' },
  { to: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const cart = useShopStore((state) => state.cart);
  // Filter out any corrupted items that don't have a valid price
  const validCart = cart ? cart.filter(item => item && typeof item.price === 'number') : [];
  const cartCount = validCart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className="
      fixed top-0 left-0 right-0 z-50
      flex items-center justify-between
      px-11 h-16
      backdrop-blur-sm
      border-b border-[#D4C4A0]/40
    ">
      {/* Logo */}
      <NavLink
        to="/"
        className="hover:opacity-75 transition-opacity flex items-center justify-center"
      >
        <img src={logoImg} alt="AURA" className="h-20 w-auto object-contain mix-blend-multiply scale-110 origin-center" />
      </NavLink>

      {/* Nav Links */}
      <nav>
        <ul className="flex items-center gap-10">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `
                  relative font-[family-name:var(--font-ui)] text-[0.7rem] font-medium
                  tracking-[0.18em] uppercase pb-1 transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-[1.5px]
                  after:bg-[#B8924A] after:transition-all after:duration-300
                  ${isActive
                    ? 'text-[#B8924A] after:w-full'
                    : 'text-[#3D2B0E] after:w-0 hover:text-[#B8924A] hover:after:w-full'
                  }
                `}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Action Icons */}
      <div className="flex items-center gap-4">
        {[
          { icon: Search,      label: 'Search' },
          { icon: User,        label: 'Account' },
          { icon: ShoppingBag, label: 'Cart',    to: '/cart', badge: true },
        ].map(({ icon: Icon, label, to, badge }) => {
          const Wrapper = to ? NavLink : 'button';
          return (
            <Wrapper
              key={label}
              to={to}
              aria-label={label}
              className="relative w-9 h-9 flex items-center justify-center text-[#3D2B0E] hover:text-[#B8924A] transition-colors duration-200"
            >
              <Icon size={18} strokeWidth={1.5} />
              {badge && cartCount > 0 && (
                <span className="
                  absolute -top-1 -right-1
                  w-4 h-4 rounded-full
                  bg-[#B8924A] text-white
                  flex items-center justify-center
                  text-[0.55rem] font-semibold font-[family-name:var(--font-ui)]
                ">
                  {cartCount}
                </span>
              )}
            </Wrapper>
          );
        })}
      </div>
    </header>
  )
}
