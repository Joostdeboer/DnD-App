import { defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
    name: 'god',
    title: 'God',
    type: 'document',
    icon: UserIcon,
    description:
        'Any god or demigod that would be part of the pantheon. Includes lesser, but still powerful, entities as well, such as Charybdis',
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
