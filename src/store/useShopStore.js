import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultFilters = {
  searchQuery: "",
  category: "All",
  minPrice: 0,
  maxPrice: 1000,
  inStock: false,
  outOfStock: false,
  sizes: [],
  colors: [],
  materials: [],
  collections: [],
  genders: [],
  minRating: 0,
  discountOnly: false,
};

export const useShopStore = create()(
  persist(
    (set) => ({
      filters: defaultFilters,
      setFilter: (key, value) =>
        set((state) => ({
          filters: { ...state.filters, [key]: value },
          page: 1,
        })),
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
          page: 1,
        })),
      resetFilters: () => set({ filters: defaultFilters, page: 1 }),

      sort: "Featured",
      setSort: (sort) => set({ sort, page: 1 }),

      page: 1,
      setPage: (page) => set({ page }),

      isDrawerOpen: false,
      setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),

      wishlist: [],
      toggleWishlist: (productId) =>
        set((state) => {
          const exists = state.wishlist.includes(productId);
          return {
            wishlist: exists
              ? state.wishlist.filter((id) => id !== productId)
              : [...state.wishlist, productId],
          };
        }),

      cartCount: 0,
      addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
    }),
    {
      name: "aura-shop-storage",
      partialize: (state) => ({
        wishlist: state.wishlist,
        cartCount: state.cartCount,
      }),
    },
  ),
);
