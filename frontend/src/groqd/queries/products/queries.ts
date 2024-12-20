import { q, Selection } from 'groqd';
import { ProductTypes, sortingToIndexes } from '@/src/utils/constants/variables';

export const getAllByTypeQuery = <T extends Selection>({
    type,
    input,
    filter,
    sorting,
}: {
    type: ProductTypes;
    input: T;
    filter?: string;
    sorting?: string;
}) => {
    // TODO: refine this
    let queryParam: string | undefined = '';
    if (sorting) {
        queryParam = sortingToIndexes.find((sort) => sort.slug === sorting)?.key;
    }
    return q('*')
        .filterByType(type)
        .filter(filter)
        .grab$({ ...input })
        .order(`${queryParam} asc`);
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
