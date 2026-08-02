import { Product } from '../types/product';

export const applyPagination = (products: Product[], page: number, limit: number): Product[] => {
  const startIndex = (page - 1) * limit;
  return products.slice(startIndex, startIndex + limit);
};
