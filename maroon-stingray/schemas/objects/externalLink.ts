import { defineType } from 'sanity';
import { LinkIcon } from '@sanity/icons';

export default defineType({
    title: 'External Link',
    name: 'externalLink',
    type: 'object',
    initialValue: {
        newWindow: true,
    },
    icon: LinkIcon,
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
        },
        // Open in a new window
        {
            title: 'Open in a new window?',
            name: 'newWindow',
            type: 'boolean',
        },
    ],
});
