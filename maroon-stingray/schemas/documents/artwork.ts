import { defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    icon: ImageIcon,
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
            name: 'name',
        },
        prepare(selection: { name?: string }) {
            const { name } = selection;
            return {
                title: name ?? 'Unknown',
            };
        },
    },
});
