import { ProductListing } from '@/src/components/organisms/products/ProductListing';
import { SortingRecord } from '@/src/utils/constants/variables';
import { AllProductsOfTypeResult } from '@/src/sanity/types';

export function ListingPage({
    products,
    sortingRecords,
    href,
    redirectSubType,
}: {
    products: AllProductsOfTypeResult;
    sortingRecords?: SortingRecord[];
    href: string;
    redirectSubType?: boolean;
}) {
    return (
        <div className="relative">
            <ProductListing
                products={products}
                sortingRecords={sortingRecords}
                link={href}
                redirectSubType={redirectSubType}
            />
        </div>
    );
}
