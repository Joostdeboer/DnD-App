import { StructureBuilder } from 'sanity/structure';
import { BulbFilledIcon } from '@sanity/icons';

export const facts = (S: StructureBuilder) =>
    S.listItem().title('Facts').icon(BulbFilledIcon).child(S.documentTypeList('fact').title('Facts'));
