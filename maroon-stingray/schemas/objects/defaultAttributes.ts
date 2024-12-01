import { defineType } from 'sanity';

export default defineType({
    name: 'defaultAttributes',
    title: 'Default Attributes',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
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
            name: 'shortDescription',
            title: 'Short Description',
            type: 'content',
        },
        {
            name: 'altNames',
            title: 'Alt Names',
            type: 'array',
            of: [
                {
                    name: 'altName',
                    title: 'Alt Name',
                    type: 'string',
                },
            ],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'tags',
            title: 'Tags',
            description: 'Tags can be used to search for items',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string',
                },
            ],
        },
        {
            name: 'appendix',
            title: 'Appendix',
            description: 'Includes subsections such as "External Links", "References", "Credits", or "See Also"',
            type: 'content',
        },
    ],
});
