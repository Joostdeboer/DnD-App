import { q, Selection } from 'groqd';
import { ProductTypes } from '@/src/utils/constants/variables';

export const getAllByTypeQuery = ({ type, input, filter }: { type: ProductTypes; input: Selection; filter?: string }) =>
    q('*')
        .filterByType(type)
        .filter(filter)
        .grab$({ ...input });

export const getTypeQuery = ({
    type,
    name,
    input,
    filter,
}: {
    type: ProductTypes;
    name: string;
    input: Selection;
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
