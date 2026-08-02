import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useShopStore } from "../../store/useShopStore";
import { shopService } from "../../services/shopService";

import ShopHero from "./components/ShopHero";
import ProductToolbar from "./components/ProductToolbar";
import FilterDrawer from "./components/FilterDrawer";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import BottomBanner from "./components/BottomBanner";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useShopStore((state) => state.filters);
  const sort = useShopStore((state) => state.sort);
  const page = useShopStore((state) => state.page);
  const setFilters = useShopStore((state) => state.setFilters);
  const setSort = useShopStore((state) => state.setSort);
  const setPage = useShopStore((state) => state.setPage);

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Parse initial URL params ONCE
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    const urlPage = searchParams.get("page");
    const urlSort = searchParams.get("sort");
    const urlSizes = searchParams.getAll("size");
    const urlColors = searchParams.getAll("color");

    const updates = {};
    if (urlCategory) updates.category = urlCategory;
    if (urlSizes.length) updates.sizes = urlSizes;
    if (urlColors.length) updates.colors = urlColors;

    if (Object.keys(updates).length > 0) {
      setFilters(updates);
    }
    if (urlSort) {
      setSort(urlSort);
    }
    if (urlPage) {
      setPage(Number(urlPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category && filters.category !== "All")
      params.set("category", filters.category);
    filters.sizes.forEach((s) => params.append("size", s));
    filters.colors.forEach((c) => params.append("color", c));
    if (sort !== "Featured") params.set("sort", sort);
    if (page > 1) params.set("page", page.toString());
    setSearchParams(params, { replace: true });
  }, [filters, sort, page, setSearchParams]);

  // Fetch data
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const fetchData = async () => {
      // Small fake delay to show skeleton loaders
      await new Promise((res) => setTimeout(res, 500));
      const res = await shopService.getProducts({
        filters,
        sort,
        page,
        limit: 12,
      });

      if (isMounted) {
        setProducts(res.data);
        setTotalProducts(res.total);
        setTotalPages(res.totalPages);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [filters, sort, page]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans pt-16">
      <ShopHero />
      <ProductToolbar
        totalProducts={totalProducts}
        currentPage={page}
        limit={12}
      />

      <FilterDrawer />
      <ProductGrid products={products} isLoading={isLoading} />

      <Pagination totalPages={totalPages} />
      <BottomBanner />
    </div>
  );
}
