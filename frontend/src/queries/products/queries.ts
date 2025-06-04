import { SortingRecord, sortingToIndexes } from '@/src/utils/constants/variables';
import { defineQuery } from 'next-sanity';

export interface AllByTypeSortingInput {
    sorting?: string;
    direction?: string;
    sortingRecords?: SortingRecord[];
}

/**
 * TODO: refine all of the below so it feels less hack-y
 * TODO: allow different 'allProducts' queries to be made with this
 * @param sorting
 * @param direction
 * @param sortingRecords
 */
export const getAllByTypeQuery = ({
    sorting,
    direction,
    sortingRecords,
}: AllByTypeSortingInput): typeof allProductsFromType => {
    let queryParam: string | undefined = '';
    if (sorting) {
        const sortingList = [...(sortingRecords ?? []), ...sortingToIndexes];
        queryParam = sortingList.find((sort) => sort.slug === sorting)?.key;
    }

    // we need to return here, as otherwise it is not properly appended, and thus not sorted
    if (!!queryParam && !!direction) {
        return defineQuery(allProductsFromType + ` | order(${queryParam} ${direction})`) as typeof allProductsFromType;
    }

    return allProductsFromType;
};

export const specificTypePageQuery = defineQuery(`*[_type == $type && defaultAttributes.slug.current == $name][0]`);

export const allProductsFromType = defineQuery(`*[_type == $type && defined(defaultAttributes.slug.current)]`);

export const allWritingProductsOfType = defineQuery(
    `*[_type == $type && defined(defaultAttributes.slug.current) && writingType == $writingType]`,
);
