import { MOCK_PRODUCTS } from "./products";
import { applyFilters } from "../utils/filter";
import { applySort } from "../utils/sort";
import { applyPagination } from "../utils/pagination";

// Simulating a backend call that would normally be done by Strapi
export const shopService = {
  getProducts: async ({ filters, sort, page, limit = 12 }) => {
    // 1. Filter
    const filtered = applyFilters(MOCK_PRODUCTS, filters);
    // 2. Sort
    const sorted = applySort(filtered, sort);
    // 3. Paginate
    const paginated = applyPagination(sorted, page, limit);

    return {
      data: paginated,
      total: sorted.length,
      page,
      totalPages: Math.ceil(sorted.length / limit) || 1,
    };
  },
};
