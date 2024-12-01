import { defineType } from 'sanity';
import { BookIcon } from '@sanity/icons';

export default defineType({
    name: 'writing',
    title: 'Writing',
    type: 'document',
    icon: BookIcon,
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
            name: 'content',
            title: 'Content',
            type: 'content',
        },
        {
            name: 'writingType',
            title: 'Writing Type',
            type: 'string',
            options: {
                list: ['myth', 'story', 'poem'],
            },
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
