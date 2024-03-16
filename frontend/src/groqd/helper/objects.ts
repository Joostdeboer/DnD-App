import { q, Selection, TypeFromSelection } from 'groqd';

const imageSelection = {
    crop: q
        .object({
            top: q.number(),
            right: q.number(),
            bottom: q.number(),
            left: q.number(),
        })
        .nullable(),
    hotspot: q
        .object({
            x: q.number(),
            y: q.number(),
            width: q.number(),
            height: q.number(),
        })
        .nullable(),
    asset: q('asset')
        .deref()
        .grab({
            width: ['metadata.dimensions.width', q.number()],
            height: ['metadata.dimensions.height', q.number()],
            aspectRatio: ['metadata.dimensions.aspectRatio', q.number()],
            lqip: ['metadata.lqip', q.string()],
            url: q.string().nullable(),
            altText: q.string().nullable(),
        }),
    // Custom fields that I added to my schema
    alt: q.string().nullable(),
    caption: q.string().nullable(),
    alignment: q.string().nullable(),
} satisfies Selection;

export type Image = TypeFromSelection<typeof imageSelection>;

const contentBlockSelection = {
    _type: q.literal('block'),
    _key: q.string(),
    children: q.array(
        q.object({
            _key: q.string(),
            _type: q.string(),
            text: q.string(),
            marks: q.array(q.string()),
        }),
    ),
    markDefs: q('markDefs')
        .filter()
        .select({
            '_type == "internalLink"': {
                _key: q.string(),
                _type: q.literal('internalLink'),
                type: ['@.reference->_type', q.string()],
                slug: ['@.reference->slug.current', q.string()],
            },
            '_type == "externalLink"': {
                _key: q.string(),
                _type: q.literal('externalLink'),
                url: q.string().optional(),
                newWindow: q.boolean().optional(),
            },
        })
        .nullable(),
    style: q.string().nullish(),
    listItem: q.string().nullish(),
    level: q.number().nullish(),
} satisfies Selection;

export const PortableTextSelection = {
    "_type == 'block'": contentBlockSelection,
    "_type == 'image'": {
        _type: q.literal('image'),
        _key: q.string(),
        ...imageSelection,
    },
    default: contentBlockSelection,
};
