import { Product, SortOption } from '../types/product';

export const applySort = (products: Product[], sort: SortOption): Product[] => {
  const sorted = [...products];

  switch (sort) {
    case 'Newest':
      return sorted.sort((a, b) => (a.isNewArrival === b.isNewArrival ? 0 : a.isNewArrival ? -1 : 1));
    case 'Highest Rated':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'Best Selling':
      return sorted.sort((a, b) => (a.isBestSeller === b.isBestSeller ? 0 : a.isBestSeller ? -1 : 1));
    case 'Price Low → High':
      return sorted.sort((a, b) => a.price - b.price);
    case 'Price High → Low':
      return sorted.sort((a, b) => b.price - a.price);
    case 'Alphabetical A-Z':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'Alphabetical Z-A':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'Featured':
    default:
      // Featured can just be best sellers + new arrivals first
      return sorted.sort((a, b) => {
        const scoreA = (a.isBestSeller ? 2 : 0) + (a.isNewArrival ? 1 : 0);
        const scoreB = (b.isBestSeller ? 2 : 0) + (b.isNewArrival ? 1 : 0);
        return scoreB - scoreA;
      });
  }
};
