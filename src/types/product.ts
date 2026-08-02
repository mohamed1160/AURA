export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: 'T-Shirts' | 'Oversized' | 'Hoodies' | 'Accessories';
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  discountPercentage?: number;
  stock: number;
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  colors: ('White' | 'Black' | 'Gold' | 'Beige')[];
  material: 'Cotton' | 'Premium Cotton' | 'Heavy Cotton';
  collection: 'New Arrival' | 'Best Seller' | 'Limited Edition' | 'Standard';
  gender: 'Men' | 'Women' | 'Unisex';
  isNewArrival: boolean;
  isBestSeller: boolean;
  images: string[];
}

export interface FilterState {
  searchQuery: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
  outOfStock: boolean;
  sizes: string[];
  colors: string[];
  materials: string[];
  collections: string[];
  genders: string[];
  minRating: number;
  discountOnly: boolean;
}

export type SortOption = 
  | 'Featured' 
  | 'Newest' 
  | 'Highest Rated' 
  | 'Best Selling' 
  | 'Price Low → High' 
  | 'Price High → Low' 
  | 'Alphabetical A-Z' 
  | 'Alphabetical Z-A';
