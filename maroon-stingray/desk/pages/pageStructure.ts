import { ListItemBuilder, StructureBuilder } from 'sanity/structure';
import { BookIcon } from '@sanity/icons';
import { documentSettings } from '../documents/documentSettings';

const PAGE_LIST: ((S: StructureBuilder) => ListItemBuilder)[] = [documentSettings];

export const pageStructure = (S: StructureBuilder) =>
    S.listItem()
        .title('Pages')
        .icon(BookIcon)
        .child(
            S.list()
                .title('Pages')
                .items(PAGE_LIST.map((item) => item(S))),
        );
