import { PathsToProps } from '@/src/types/generic';
import { AllProductsOfTypeResult } from '@/src/sanity/types';

export const WRITING_TYPES = ['story', 'poem', 'myth'] as const;
export type WritingTypes = (typeof WRITING_TYPES)[number];
export const WritingPaths: Record<WritingTypes, string> = {
    story: 'stories',
    poem: 'poetry',
    myth: 'myths',
};

export const PRODUCT_TYPES = [
    'artwork',
    'city',
    'concept',
    'creature',
    'entity',
    'flora',
    'god',
    'historicalEvent',
    'landmark',
    'lineage',
    'organization',
    'person',
    'plane',
    'region',
    'writing',
] as const;
export type ProductTypes = (typeof PRODUCT_TYPES)[number];

export const KEYS_TO_IGNORE = ['_id', '_createdAt', '_updatedAt', '_type', 'defaultAttributes', 'information', '_rev'];

export interface SortingRecord {
    name: string;
    slug: string;
    key: PathsToProps<AllProductsOfTypeResult[number], string | Date>;
}

export const sortingToIndexes: SortingRecord[] = [
    {
        name: 'Name',
        slug: 'name',
        key: 'defaultAttributes.name',
    },
    {
        name: 'Created At',
        slug: 'createdAt',
        key: '_createdAt',
    },
    {
        name: 'Updated At',
        slug: 'updatedAt',
        key: '_updatedAt',
    },
];
