import { defineType } from 'sanity';

export default defineType({
    name: 'defaultAttributes',
    title: 'Default Attributes',
    type: 'object',
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (rule) => rule.required(),
            options: {
                source: (doc) => (doc.defaultAttributes as { name?: string })?.name ?? doc._id,
                slugify: (input) => {
                    console.log({ input });
                    return input.toLowerCase().replace(/\s+/g, '-');
                },
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
            description: 'A short description, meant for being displayed in the search bar',
            type: 'content',
        },
        {
            name: 'altNames',
            title: 'Alt Names',
            description:
                'A list of alternative names that can be searched for, or which have to redirect to the main page',
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
            description: "Image to be shown on the overview list, or as the main image on the item's page",
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
