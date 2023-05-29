import { StructureBuilder } from 'sanity/desk';
import { gods } from './desk/gods';

const DOCUMENTS_IN_STRUCTURE = [
    // defined desk items
    'gods',
    // individual schema that are already in the desk item list
    'god',
];

export default (S: StructureBuilder) => {
    return S.list()
        .title('Content')
        .items([
            gods(S),
            ...S.documentTypeListItems().filter((item) => !DOCUMENTS_IN_STRUCTURE.includes(item?.getId() ?? '')),
        ]);
};
