// import HeroSection from '../../components/home/HeroSection'

import BestSellersSection from "../../components/home/BestSellers/BestSeller";
import BrandValuesSection from "../../components/home/BrandValues/BrandValues";
import FeaturedCollectionsSection from "../../components/home/FeaturedCollections/Featured";
import HeroSection from "../../components/home/HeroSection";
import NewsletterSection from "../../components/home/newsletter/NewSletter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandValuesSection />
      <FeaturedCollectionsSection/>
      <BestSellersSection/>
      <NewsletterSection/>
  
    </main>
  )
}
