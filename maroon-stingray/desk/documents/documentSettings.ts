import { StructureBuilder } from 'sanity/desk';
import { CogIcon } from '@sanity/icons';

export const documentSettings = (S: StructureBuilder) =>
    S.listItem()
        .title('Document Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('documentSettings').documentId('documentSettings'));
