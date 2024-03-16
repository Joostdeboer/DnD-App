import { defineType } from 'sanity';
import { PAGE_REFERENCES } from '../../constants';
import { LinkIcon } from '@sanity/icons';

export default defineType({
    title: 'Internal Link',
    name: 'internalLink',
    type: 'object',
    icon: LinkIcon,
    fields: [
        {
            name: 'reference',
            type: 'reference',
            weak: true,
            validation: (Rule) => Rule.required(),
            to: PAGE_REFERENCES,
        },
    ],
});
