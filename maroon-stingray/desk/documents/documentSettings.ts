import { StructureBuilder } from 'sanity/structure';
import { CogIcon } from '@sanity/icons';

export const documentSettings = (S: StructureBuilder) =>
    S.listItem()
        .title('Document Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('documentSettings').documentId('documentSettings'));
