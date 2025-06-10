import { defineType } from 'sanity';
import { BookIcon } from '@sanity/icons';

export default defineType({
    name: 'writing',
    title: 'Writing',
    type: 'document',
    icon: BookIcon,
    description:
        'A custom piece of writing telling a story about the world. This may include poems, myths, short stories, or similar pieces of writing',
    fields: [
        {
            name: 'writingType',
            title: 'Writing Type',
            type: 'string',
            options: {
                list: ['myth', 'story', 'poem'],
            },
            validation: (rule) => rule.required(),
        },
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
