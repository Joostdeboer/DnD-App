import { ProductListing } from '@/src/components/organisms/products/ProductListing';
import { Product } from '@/src/types/generic';

export function ListingPage({ products }: { products: Product[] }) {
    return (
        <div className="relative">
            <ProductListing products={products} />
        </div>
    );
}
