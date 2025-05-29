import { defineType } from 'sanity';
import { BugIcon } from '@sanity/icons';

export default defineType({
    name: 'flora',
    title: 'Flora',
    type: 'document',
    icon: BugIcon,
    description: 'Any plant, tree, moss, fungi, etc. that might be found in the world',
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
            name: 'variants',
            title: 'Variants',
            type: 'content',
        },
        {
            name: 'habitat',
            title: 'Habitat',
            type: 'content',
        },
        {
            name: 'usage',
            title: 'Usage',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
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
