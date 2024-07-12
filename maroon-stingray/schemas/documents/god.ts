import { defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
    name: 'god',
    title: 'God',
    type: 'document',
    icon: UserIcon,
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
            name: 'appearance',
            title: 'Appearance',
            type: 'content',
        },
        {
            name: 'teachings',
            title: 'Teachings',
            type: 'content',
        },
        {
            name: 'symbology',
            title: 'Symbology',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'relations',
            title: 'Relations',
            type: 'content',
        },
        {
            name: 'religion',
            title: 'Religion',
            type: 'content',
        },
    ],
    preview: {
        select: {
            name: 'name',
        },
        prepare(selection: { name?: string; title?: string }) {
            const { name } = selection;
            return {
                title: name ?? 'Unknown',
            };
        },
    },
});
