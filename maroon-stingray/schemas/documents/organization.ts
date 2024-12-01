import { defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
    name: 'organization',
    title: 'Organization',
    type: 'document',
    icon: HomeIcon,
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
            name: 'name',
        },
        prepare(selection: { name?: string }) {
            const { name } = selection;
            return {
                title: name ?? 'Unknown',
            };
        },
    },
});
