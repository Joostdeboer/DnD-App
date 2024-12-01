import { defineType } from 'sanity';
import { MarkerIcon } from '@sanity/icons';

export default defineType({
    name: 'landmark',
    title: 'Landmark',
    type: 'document',
    icon: MarkerIcon,
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
