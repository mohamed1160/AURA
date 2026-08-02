import { Product } from '../../../types/product';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import EmptyState from './EmptyState';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

export default function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
