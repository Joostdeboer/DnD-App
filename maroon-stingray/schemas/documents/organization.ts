import { defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
    name: 'organization',
    title: 'Organization',
    type: 'document',
    icon: HomeIcon,
    description:
        'Anything that groups people together under a common belief, whether that is religious, commercial partnership, or otherwise',
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
            name: 'goals',
            title: 'Goals',
            type: 'content',
        },
        {
            name: 'baseOfOperations',
            title: 'Base of Operations',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'activities',
            title: 'Activities',
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
