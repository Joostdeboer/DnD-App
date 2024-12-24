import { q, Selection } from 'groqd';
import { ProductTypes, SortingRecord, sortingToIndexes } from '@/src/utils/constants/variables';

export interface AllByTypeSortingInput {
    sorting?: string;
    direction?: string;
    sortingRecords?: SortingRecord[];
}

interface AllByTypeQueryInput<T> extends AllByTypeSortingInput {
    type: ProductTypes;
    input: T;
    filter?: string;
}

export const getAllByTypeQuery = <T extends Selection>({
    type,
    input,
    filter,
    sorting,
    direction,
    sortingRecords,
}: AllByTypeQueryInput<T>) => {
    // TODO: refine all of the below so it feels less hack-y
    let queryParam: string | undefined = '';
    if (sorting) {
        const sortingList = [...(sortingRecords ?? []), ...sortingToIndexes];
        queryParam = sortingList.find((sort) => sort.slug === sorting)?.key;
    }

    const query = q('*')
        .filterByType(type)
        .filter(filter)
        .grab$({ ...input });

    // we need to return here, as otherwise it is not properly appended, and thus not sorted
    if (!!queryParam && !!direction) {
        return query.order(`${queryParam} ${direction}`);
    }

    return query;
};

export const getTypeQuery = <T extends Selection>({
    type,
    name,
    input,
    filter,
}: {
    type: ProductTypes;
    name: string;
    input: T;
    filter?: string;
}) =>
    q('*')
        .filterByType(type)
        .filter(filter)
        .filter(`defaultAttributes.slug.current == "${name}"`)
        .slice(0)
        .grab$({
            ...input,
        });
