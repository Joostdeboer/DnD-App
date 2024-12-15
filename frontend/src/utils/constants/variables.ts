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

export const KEYS_TO_IGNORE = ['_id', '_createdAt', '_updatedAt', '_type', 'defaultAttributes', 'information'];
