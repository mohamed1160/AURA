import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Home   from '../pages/Home'
import Shop   from '../pages/Shop'
import OurStory from '../pages/OurStory'
import Contact  from '../pages/Contact'

/* ── Placeholder pages ───────────────────────────── */
const ComingSoon = ({ name }) => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cinzel, serif',
    fontSize: '1.2rem',
    letterSpacing: '0.2em',
    color: '#B8924A',
    paddingTop: '64px',
  }}>
    {name} — Coming Soon
  </div>
)

/* ── Router ──────────────────────────────────────── */
export default function AppRouter() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ── Main Pages ── */}
        <Route path="/"                   element={<Home />} />
        <Route path="/shop"               element={<Shop />} />
        <Route path="/shop/:category"     element={<Shop />} />
        <Route path="/collections"        element={<ComingSoon name="Collections" />} />
        <Route path="/collections/:slug"  element={<ComingSoon name="Collection" />} />
        <Route path="/product/:id"        element={<ComingSoon name="Product" />} />
        <Route path="/new-arrivals"       element={<ComingSoon name="New Arrivals" />} />
        <Route path="/best-sellers"       element={<ComingSoon name="Best Sellers" />} />

        {/* ── Brand Pages ── */}
        <Route path="/our-story"          element={<OurStory />} />
        <Route path="/journal"            element={<ComingSoon name="Journal" />} />
        <Route path="/journal/:slug"      element={<ComingSoon name="Journal Post" />} />
        <Route path="/contact"            element={<Contact />} />

        {/* ── Commerce Pages ── */}
        <Route path="/cart"               element={<ComingSoon name="Cart" />} />
        <Route path="/checkout"           element={<ComingSoon name="Checkout" />} />
        <Route path="/wishlist"           element={<ComingSoon name="Wishlist" />} />
        <Route path="/track-order"        element={<ComingSoon name="Track Order" />} />

        {/* ── Customer Care ── */}
        <Route path="/faqs"               element={<ComingSoon name="FAQs" />} />
        <Route path="/shipping-delivery"  element={<ComingSoon name="Shipping & Delivery" />} />
        <Route path="/returns-exchanges"  element={<ComingSoon name="Returns & Exchanges" />} />
        <Route path="/size-guide"         element={<ComingSoon name="Size Guide" />} />

        {/* ── Legal ── */}
        <Route path="/privacy-policy"     element={<ComingSoon name="Privacy Policy" />} />
        <Route path="/terms-conditions"   element={<ComingSoon name="Terms & Conditions" />} />
        <Route path="/careers"            element={<ComingSoon name="Careers" />} />

        {/* ── Auth ── */}
        <Route path="/login"              element={<ComingSoon name="Login" />} />
        <Route path="/register"           element={<ComingSoon name="Register" />} />
        <Route path="/forgot-password"    element={<ComingSoon name="Forgot Password" />} />

        {/* ── 404 ── */}
        <Route path="*"                   element={<ComingSoon name="404 — Page Not Found" />} />
      </Routes>
    </>
  )
}
