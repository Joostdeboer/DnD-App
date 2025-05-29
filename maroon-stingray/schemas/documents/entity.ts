import { defineType } from 'sanity';
import { ListIcon } from '@sanity/icons';

export default defineType({
    name: 'entity',
    title: 'Entity',
    type: 'document',
    icon: ListIcon,
    description: 'A sword, piece of armor, magic item (cursed or not), etc.',
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
            name: 'usage',
            title: 'Usage',
            type: 'content',
        },
        {
            name: 'appearance',
            title: 'Appearance',
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
