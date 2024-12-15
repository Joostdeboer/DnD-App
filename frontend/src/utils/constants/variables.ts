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
export const SORTING_VARIANTS = [
    'name_asc',
    'name_desc',
    'created_asc',
    'created_desc',
    'updated_asc',
    'updated_desc',
] as const;

export type ProductTypes = (typeof PRODUCT_TYPES)[number];
export type SortingTypes = (typeof SORTING_VARIANTS)[number];
