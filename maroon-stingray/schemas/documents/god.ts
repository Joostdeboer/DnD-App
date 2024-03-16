import { defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
    name: 'god',
    title: 'God',
    type: 'document',
    icon: UserIcon,
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'domains',
            title: 'Domains',
            type: 'array',
            of: [
                {
                    name: 'domain',
                    title: 'Domain',
                    type: 'string',
                },
            ],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'content',
        },
    ],
    preview: {
        select: {
            name: 'name',
            title: 'title',
        },
        prepare(selection: { name?: string; title?: string }) {
            const { name, title } = selection;
            return {
                title: name ?? 'No name',
                subtitle: title ?? 'No subtitle',
            };
        },
    },
});
