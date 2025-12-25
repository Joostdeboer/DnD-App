import { SchemaTypeDefinition } from 'sanity';
import documentSettings from './pages/documentSettings';

import artwork from './documents/artwork';
import city from './documents/city';
import concept from './documents/concept';
import creature from './documents/creature';
import entity from './documents/entity';
import flora from './documents/flora';
import god from './documents/god';
import historicalEvent from './documents/historicalEvent';
import landmark from './documents/landmark';
import lineage from './documents/lineage';
import organization from './documents/organization';
import person from './documents/person';
import plane from './documents/plane';
import region from './documents/region';
import writing from './documents/writing';

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

import fact from './documents/fact';

export const schemaTypes: SchemaTypeDefinition[] = [
    // pages
    documentSettings,
    fact,
    // documents
    artwork,
    city,
    concept,
    creature,
    entity,
    flora,
    god,
    historicalEvent,
    landmark,
    lineage,
    organization,
    person,
    plane,
    region,
    writing,
    // entities
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
