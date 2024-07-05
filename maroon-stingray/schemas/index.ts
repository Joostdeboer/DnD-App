import { SchemaTypeDefinition } from 'sanity';
import documentSettings from './pages/documentSettings';

import god from './documents/god';

import content from './objects/body';
import internalLink from './objects/internalLink';
import externalLink from './objects/externalLink';
import defaultAttributes from './objects/defaultAttributes';
import information, {
    basicInformation,
    dateInformation,
    geographicalInformation,
    commerceInformation,
    divineInformation,
    historicalInformation,
    relationalInformation,
    appearanceInformation,
    membershipInformation,
} from './objects/information';

export const schemaTypes: SchemaTypeDefinition[] = [
    // pages
    documentSettings,
    // documents
    god,
    // objects
    content,
    internalLink,
    externalLink,
    defaultAttributes,
    information,
    basicInformation,
    dateInformation,
    geographicalInformation,
    commerceInformation,
    divineInformation,
    historicalInformation,
    relationalInformation,
    appearanceInformation,
    membershipInformation,
];
