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
export const KEYS_TO_IGNORE = ['_id', '_createdAt', '_updatedAt', '_type', 'defaultAttributes', 'information'];

export type ProductTypes = (typeof PRODUCT_TYPES)[number];

export interface SortingRecord {
    name: string;
    slug: string;
    key: string;
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
