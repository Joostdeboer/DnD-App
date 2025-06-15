import { PathsToProps } from '@/src/types/generic';
import { AllProductsOfTypeResult } from '@/src/sanity/types';

export enum WRITING_TYPES {
    STORY = 'story',
    POEM = 'poem',
    MYTH = 'myth',
}
export const WritingPaths: Record<WRITING_TYPES, string> = {
    story: 'stories',
    poem: 'poetry',
    myth: 'myths',
};

export enum PRODUCT_TYPES {
    ART = 'artwork',
    CITY = 'city',
    CONCEPT = 'concept',
    CREATURE = 'creature',
    ENTITY = 'entity',
    FLORA = 'flora',
    GOD = 'god',
    HISTORICAL_EVENT = 'historicalEvent',
    LANDMARK = 'landmark',
    LINEAGE = 'lineage',
    ORGANIZATION = 'organization',
    PERSON = 'person',
    PLANE = 'plane',
    REGION = 'region',
    WRITING = 'writing',
}

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
