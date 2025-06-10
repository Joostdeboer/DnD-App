import { SortingRecord, sortingToIndexes } from '@/src/utils/constants/variables';
import { defineQuery } from 'next-sanity';

export interface AllByTypeSortingInput {
    sorting?: string;
    direction?: string;
    sortingRecords?: SortingRecord[];
    variant?: 'all' | 'writing';
}

export type AllByTypeQueries = typeof allProductsOfType | typeof allWritingProductsOfType;

/**
 * TODO: refine all of the below so it feels less hack-y
 * @param sorting
 * @param direction
 * @param sortingRecords
 * @param variant
 */
export const getAllByTypeQuery = ({
    sorting,
    direction,
    sortingRecords,
    variant = 'all',
}: AllByTypeSortingInput): AllByTypeQueries => {
    let queryParam: string | undefined = '';
    if (sorting) {
        const sortingList = [...(sortingRecords ?? []), ...sortingToIndexes];
        queryParam = sortingList.find((sort) => sort.slug === sorting)?.key;
    }
    const query = variant === 'all' ? allProductsOfType : allWritingProductsOfType;

    // we need to return here, as otherwise it is not properly appended, and thus not sorted
    if (!!queryParam && !!direction) {
        return defineQuery(query + ` | order(${queryParam} ${direction})`) as typeof query;
    }

    return query;
};

export const specificTypePageQuery = defineQuery(`*[_type == $type && defaultAttributes.slug.current == $name][0]`);

export const specificWritingTypePageQuery = defineQuery(
    `*[_type == $type && writingType == $writingType && defaultAttributes.slug.current == $name][0]`,
);

export const allProductsOfType = defineQuery(`*[_type == $type && defined(defaultAttributes.slug.current)]`);

export const allWritingProductsOfType = defineQuery(
    `*[_type == $type && writingType == $writingType && defined(defaultAttributes.slug.current) ]`,
);
