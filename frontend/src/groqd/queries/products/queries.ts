import { q, Selection } from 'groqd';
import { ProductTypes } from '@/src/utils/constants/variables';

export const getAllByTypeQuery = <T extends Selection>({
    type,
    input,
    filter,
}: {
    type: ProductTypes;
    input: T;
    filter?: string;
}) =>
    q('*')
        .filterByType(type)
        .filter(filter)
        .grab$({ ...input })
        .order('defaultAttributes.name asc');

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
