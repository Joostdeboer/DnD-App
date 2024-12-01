import { StructureBuilder } from 'sanity/structure';
import { ComposeIcon } from '@sanity/icons';

const DOCUMENT_LIST: { categoryName: string; fileName: string; title: string }[] = [
    { categoryName: 'Art', fileName: 'artwork', title: 'Artwork' },
    { categoryName: 'Cities', fileName: 'city', title: 'City' },
    { categoryName: 'Concepts', fileName: 'concept', title: 'Concept' },
    { categoryName: 'Creatures', fileName: 'creature', title: 'Creature' },
    { categoryName: 'Entities', fileName: 'entity', title: 'Entity' },
    { categoryName: 'Flora', fileName: 'flora', title: 'Flora' },
    { categoryName: 'Gods', fileName: 'god', title: 'God' },
    { categoryName: 'Historical Events', fileName: 'historicalEvent', title: 'Historical Event' },
    { categoryName: 'Landmarks', fileName: 'landmark', title: 'Landmark' },
    { categoryName: 'Lineages', fileName: 'lineage', title: 'Lineage' },
    { categoryName: 'Myths', fileName: 'writing', title: 'Myth' },
    { categoryName: 'Organizations', fileName: 'organization', title: 'Organization' },
    { categoryName: 'People', fileName: 'person', title: 'Person' },
    { categoryName: 'Planes', fileName: 'plane', title: 'Plane' },
    { categoryName: 'Poems', fileName: 'writing', title: 'Poem' },
    { categoryName: 'Regions', fileName: 'region', title: 'Region' },
    { categoryName: 'Stories', fileName: 'writing', title: 'Story' },
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
