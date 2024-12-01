import { defineType } from 'sanity';
import { BugIcon } from '@sanity/icons';

export default defineType({
    name: 'flora',
    title: 'Flora',
    type: 'document',
    icon: BugIcon,
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
