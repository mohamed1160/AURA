import { motion } from "framer-motion";
import ProductCard from "../../Shop/components/ProductCard";

const RECOMMENDED_PRODUCTS = [
  {
    id: "rec-1",
    name: "AURA Hieroglyphic Hoodie",
    category: "HOODIES",
    price: 899,
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"],
    stock: 10,
  },
  {
    id: "rec-2",
    name: "AURA Hieroglyphic Tee",
    category: "T-SHIRTS",
    price: 499,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"],
    stock: 15,
  },
  {
    id: "rec-3",
    name: "AURA Beaded Bracelet",
    category: "ACCESSORIES",
    price: 349,
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"],
    stock: 5,
  },
  {
    id: "rec-4",
    name: "AURA Signature Tote",
    category: "BAGS",
    price: 699,
    images: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800"],
    stock: 8,
  },
  {
    id: "rec-5",
    name: "AURA Signature Ring",
    category: "JEWELRY",
    price: 299,
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b6348e?auto=format&fit=crop&q=80&w=800"],
    stock: 20,
  },
];

export default function RecommendedProducts() {
  return (
    <section className="w-full mt-16 sm:mt-24 mb-16">
      <h2 className="text-[16px] sm:text-[20px] font-bold text-[#2C2C2C] uppercase tracking-widest mb-8">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
        {RECOMMENDED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
