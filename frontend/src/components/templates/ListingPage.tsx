import { ProductListing } from '@/src/components/organisms/products/ProductListing';
import { Product } from '@/src/types/generic';
import { SortingRecord } from '@/src/utils/constants/variables';

export function ListingPage({
    products,
    sortingRecords,
    href,
}: {
    products: Product[];
    sortingRecords?: SortingRecord[];
    href: string;
}) {
    return (
        <div className="relative">
            <ProductListing products={products} sortingRecords={sortingRecords} link={href} />
        </div>
    );
}
