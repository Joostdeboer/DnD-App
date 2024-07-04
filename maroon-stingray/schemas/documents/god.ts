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
        {
            name: 'shortDescription',
            title: 'Short description',
            type: 'string',
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
                title: name ?? 'Unknown',
                subtitle: title ?? 'No subtitle',
            };
        },
    },
});
