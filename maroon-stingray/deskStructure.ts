import { StructureBuilder } from 'sanity/structure';
import { documentStructure } from './desk/documents/documentStructure';
import { pageStructure } from './desk/pages/pageStructure';

const DOCUMENTS_IN_STRUCTURE = [
    // defined desk items
    'gods',
    'documentSettings',
    // individual schema that are already in the desk item list
    'artwork',
    'city',
    'concept',
    'creature',
    'entity',
    'flora',
    'god',
    'historicalEvent',
    'landmark',
    'lineage',
    'organization',
    'person',
    'plane',
    'region',
    'writing',
    'media.tag',
];

export default (S: StructureBuilder) => {
    return S.list()
        .title('Content')
        .items([
            documentStructure(S),
            pageStructure(S),
            ...S.documentTypeListItems().filter((item) => !DOCUMENTS_IN_STRUCTURE.includes(item?.getId() ?? '')),
        ]);
};
