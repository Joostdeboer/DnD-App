import { defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    icon: ImageIcon,
    description: 'Anything from a painting, drawings, videos, or other media made of the world',
    fields: [
        {
            name: 'defaultAttributes',
            title: 'Default Attributes',
            type: 'defaultAttributes',
        },
        {
            name: 'information',
            title: 'Information',
            type: 'information',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'content',
        },
    ],
    preview: {
        select: {
            defaultAttributes: 'defaultAttributes',
        },
        prepare(selection: { defaultAttributes?: { name?: string } }) {
            const { defaultAttributes } = selection;
            return {
                title: defaultAttributes?.name ?? 'Unknown',
            };
        },
    },
});
