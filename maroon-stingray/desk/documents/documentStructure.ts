import { StructureBuilder } from 'sanity/desk';
import { ComposeIcon } from '@sanity/icons';

const DOCUMENT_LIST: { categoryName: string; fileName: string; title: string }[] = [
    { categoryName: 'Gods', fileName: 'god', title: 'God' },
];

export const documentStructure = (S: StructureBuilder) =>
    S.listItem()
        .title('Documents')
        .icon(ComposeIcon)
        .child(
            S.list()
                .title('Documents')
                .items(
                    DOCUMENT_LIST.map((item) =>
                        S.listItem()
                            .title(item.categoryName)
                            .child(S.documentTypeList(item.fileName).title(item.title)),
                    ),
                ),
        );
