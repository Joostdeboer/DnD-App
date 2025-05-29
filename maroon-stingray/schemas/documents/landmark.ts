import { defineType } from 'sanity';
import { MarkerIcon } from '@sanity/icons';

export default defineType({
    name: 'landmark',
    title: 'Landmark',
    type: 'document',
    icon: MarkerIcon,
    description:
        'A special location that has special properties or historical connotation, such as the Auroran Wall, Tricrater Lake, etc.',
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
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'geography',
            title: 'Geography',
            type: 'content',
        },
        {
            name: 'myths',
            title: 'Rumors, Legends and Myths',
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
