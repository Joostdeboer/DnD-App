import { ProductListing } from '@/src/components/organisms/products/ProductListing';
import { Product } from '@/src/types/generic';
import { SortingRecord } from '@/src/utils/constants/variables';

export function ListingPage({ products, sortingRecords }: { products: Product[]; sortingRecords?: SortingRecord[] }) {
    return (
        <div className="relative">
            <ProductListing products={products} sortingRecords={sortingRecords} link="/luroa/gods/" />
        </div>
    );
}
