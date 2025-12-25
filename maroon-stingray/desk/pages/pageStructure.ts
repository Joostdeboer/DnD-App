import { ListItemBuilder, StructureBuilder } from 'sanity/structure';
import { BookIcon } from '@sanity/icons';
import { documentSettings } from '../documents/documentSettings';
import { facts } from '../documents/facts';

const PAGE_LIST: ((S: StructureBuilder) => ListItemBuilder)[] = [documentSettings, facts];

export const pageStructure = (S: StructureBuilder) =>
    S.listItem()
        .title('Pages')
        .icon(BookIcon)
        .child(
            S.list()
                .title('Pages')
                .items(PAGE_LIST.map((item) => item(S))),
        );
