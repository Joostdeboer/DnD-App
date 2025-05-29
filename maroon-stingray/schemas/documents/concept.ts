import { defineType } from 'sanity';
import { BulbOutlineIcon } from '@sanity/icons';

export default defineType({
    name: 'concept',
    title: 'Concept',
    type: 'document',
    icon: BulbOutlineIcon,
    description: 'Anything from "How Magic Works", "Religious Beliefs" or "Dungeon Creation"',
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
            name: 'variations',
            title: 'Variations',
            type: 'content',
        },
        {
            name: 'usage',
            title: 'Usage',
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
