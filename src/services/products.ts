import { Product } from '../types/product';
import placeholder1 from '../assets/images/products/placeholder-1.jpeg';
import placeholder2 from '../assets/images/products/placeholder-2.jpeg';

const categories: Product['category'][] = ['T-Shirts', 'Oversized', 'Hoodies', 'Accessories'];
const sizesList: Product['sizes'] = ['S', 'M', 'L', 'XL', 'XXL'];
const colorsList: Product['colors'] = ['White', 'Black', 'Gold', 'Beige'];
const materialsList: Product['material'][] = ['Cotton', 'Premium Cotton', 'Heavy Cotton'];
const collectionsList: Product['collection'][] = ['New Arrival', 'Best Seller', 'Limited Edition', 'Standard'];
const gendersList: Product['gender'][] = ['Men', 'Women', 'Unisex'];

const generateMockProducts = (count: number): Product[] => {
  const products: Product[] = [];
  
  for (let i = 1; i <= count; i++) {
    const category = categories[i % categories.length];
    const isNewArrival = i % 5 === 0;
    const isBestSeller = i % 7 === 0;
    const hasDiscount = i % 6 === 0;
    
    const price = 50 + (i * 15) % 300;
    const oldPrice = hasDiscount ? price + Math.floor(price * 0.3) : undefined;
    const discountPercentage = hasDiscount ? Math.round(((oldPrice! - price) / oldPrice!) * 100) : undefined;

    products.push({
      id: `prod-${i}`,
      slug: `aura-product-${i}`,
      name: `AURA Signature ${category} ${i}`,
      description: `Premium quality ${category.toLowerCase()} crafted from the finest materials. Featuring the iconic AURA luxury design, this piece provides unmatched comfort and elegance for any occasion.`,
      category,
      price,
      oldPrice,
      rating: 3.5 + (i % 15) / 10, // Ratings from 3.5 to 4.9
      reviewsCount: 10 + (i * 7) % 500,
      discountPercentage,
      stock: i % 10 === 0 ? 0 : 5 + i % 50, // Some out of stock
      sizes: sizesList.slice(0, 2 + i % 3), // Different size availability
      colors: colorsList.slice(0, 1 + i % 3),
      material: materialsList[i % materialsList.length],
      collection: isNewArrival ? 'New Arrival' : isBestSeller ? 'Best Seller' : collectionsList[i % collectionsList.length],
      gender: gendersList[i % gendersList.length],
      isNewArrival,
      isBestSeller,
      images: i % 2 === 0 ? [placeholder1, placeholder2] : [placeholder2, placeholder1],
    });
  }
  
  return products;
};

export const MOCK_PRODUCTS = generateMockProducts(50);
