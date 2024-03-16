import { SchemaTypeDefinition } from 'sanity';
import god from './documents/god';
import content from './objects/body';
import internalLink from './objects/internalLink';
import externalLink from './objects/externalLink';

export const schemaTypes: SchemaTypeDefinition[] = [god, content, internalLink, externalLink];
