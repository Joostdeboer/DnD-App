export const SANITY_PROJECT_ID = 'g21vpug0';

const pages = [
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

export const PAGE_REFERENCES = pages.map((page) => ({ type: page }));
