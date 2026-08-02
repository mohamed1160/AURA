import { Product, FilterState } from '../types/product';

export const applyFilters = (products: Product[], filters: FilterState): Product[] => {
  return products.filter((product) => {
    // Search Query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      if (!product.name.toLowerCase().includes(query) && 
          !product.category.toLowerCase().includes(query) && 
          !product.collection.toLowerCase().includes(query)) {
        return false;
      }
    }

    // Category
    if (filters.category && filters.category !== 'All') {
      if (product.category !== filters.category) return false;
    }

    // Price
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }

    // Availability
    if (filters.inStock && !filters.outOfStock) {
      if (product.stock === 0) return false;
    }
    if (filters.outOfStock && !filters.inStock) {
      if (product.stock > 0) return false;
    }
    // If both false, maybe show none? Usually if neither checked, show all.
    // Let's assume if both are checked or neither is checked, we show all.

    // Sizes
    if (filters.sizes.length > 0) {
      if (!filters.sizes.some(size => product.sizes.includes(size as any))) return false;
    }

    // Colors
    if (filters.colors.length > 0) {
      if (!filters.colors.some(color => product.colors.includes(color as any))) return false;
    }

    // Materials
    if (filters.materials.length > 0) {
      if (!filters.materials.includes(product.material)) return false;
    }

    // Collections
    if (filters.collections.length > 0) {
      if (!filters.collections.includes(product.collection)) return false;
    }

    // Gender
    if (filters.genders.length > 0) {
      if (!filters.genders.includes(product.gender)) return false;
    }

    // Rating
    if (filters.minRating > 0) {
      if (product.rating < filters.minRating) return false;
    }

    // Discount Only
    if (filters.discountOnly) {
      if (!product.oldPrice || product.oldPrice <= product.price) return false;
    }

    return true;
  });
};
