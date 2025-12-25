import { defineType } from 'sanity';
import { BulbFilledIcon } from '@sanity/icons';

export default defineType({
    name: 'fact',
    title: 'Fact',
    type: 'document',
    icon: BulbFilledIcon,
    description: 'A piece of lore about the world',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description:
                'A title for internal use only. Might be used for displaying the section title in the future, but that is to be decided',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'content',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'internalLink',
                            description:
                                'Link to another internal page. If left empty, it instead takes you to the search page.',
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare(selection: { title?: string }) {
            return {
                title: selection.title ?? 'New Fact',
            };
        },
    },
});
