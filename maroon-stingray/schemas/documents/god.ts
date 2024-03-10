import { defineType } from 'sanity';

export default defineType({
    name: 'god',
    title: 'God',
    type: 'document',
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
