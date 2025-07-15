import { SortingRecord, sortingToIndexes } from '@/src/utils/constants/variables';
import { defineQuery } from 'next-sanity';

export interface AllByTypeSortingInput {
    sorting?: string;
    direction?: string;
    sortingRecords?: SortingRecord[];
    variant?: 'all' | 'writing';
    filters?: (string | undefined)[];
}

export type AllByTypeQueries = typeof allProductsOfType | typeof allWritingProductsOfType;

/**
 * TODO: refine all of the below so it feels less hack-y
 * @param sorting
 * @param direction
 * @param sortingRecords
 * @param variant
 * @param filters
 */
export const getAllByTypeQuery = ({
    sorting,
    direction,
    sortingRecords,
    variant = 'all',
    filters,
}: AllByTypeSortingInput): AllByTypeQueries => {
    let queryParam: string | undefined = '';
    if (sorting) {
        const sortingList = [...(sortingRecords ?? []), ...sortingToIndexes];
        queryParam = sortingList.find((sort) => sort.slug === sorting)?.key;
    }
    const query = variant === 'all' ? allProductsOfType : allWritingProductsOfType;

    // Append filtering to the query. As long as the '_type' remains the same, and with it the projection,
    // adding additional filters does not change the generated type, and can thus be safely kept with assertions.
    let fullQuery = query;
    const filteredFilters = filters?.filter((f) => f !== undefined);
    if (filteredFilters && filteredFilters.length > 0) {
        const splitValue = ']';
        const querySplitOnEnd = query.split(splitValue);
        const queryWithFilters = [querySplitOnEnd[0], filteredFilters].join(' && ');
        fullQuery = queryWithFilters + splitValue;
    }

    // we need to return here, as otherwise it is not properly appended, and thus not sorted
    if (!!queryParam && !!direction) {
        return defineQuery(fullQuery + ` | order(${queryParam} ${direction})`) as typeof query;
    }

    return fullQuery as typeof query;
};

export const specificTypePageQuery = defineQuery(`*[_type == $type && defaultAttributes.slug.current == $name][0]`);

export const specificWritingTypePageQuery = defineQuery(
    `*[_type == $type && writingType == $writingType && defaultAttributes.slug.current == $name][0]`,
);

export const allProductsOfType = defineQuery(`*[_type == $type && defined(defaultAttributes.slug.current)]`);

export const allWritingProductsOfType = defineQuery(
    `*[_type == $type && writingType == $writingType && defined(defaultAttributes.slug.current)]`,
);

export const specificMedia = defineQuery(`*[_type == "sanity.imageAsset" && _id == $id][0]`);

export const getAllRecentProducts = defineQuery(
    `*[defined(defaultAttributes.slug.current)]{ _type, _createdAt, _updatedAt, defaultAttributes, writingType } | order(_updatedAt desc)[$start..$end]`,
);

export const getAllTagsOfType = defineQuery(
    `*[_type == $type && defined(defaultAttributes.slug.current)]
    {
        "tags": defaultAttributes.tags
    }.tags[]`,
);
