import { StructureBuilder } from 'sanity/desk';
import { UserIcon } from '@sanity/icons';

export const gods = (S: StructureBuilder) =>
    S.listItem().title('Gods').icon(UserIcon).child(S.documentTypeList('god').title('God'));
