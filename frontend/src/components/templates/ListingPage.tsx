import { ProductListing } from '@/src/components/organisms/products/ProductListing';
import { SortingRecord } from '@/src/utils/constants/variables';
import { AllProductsFromTypeResult } from '@/src/sanity/types';

export function ListingPage({
    products,
    sortingRecords,
    href,
}: {
    products: AllProductsFromTypeResult;
    sortingRecords?: SortingRecord[];
    href: string;
}) {
    return (
        <div className="relative">
            <ProductListing products={products} sortingRecords={sortingRecords} link={href} />
        </div>
    );
}
