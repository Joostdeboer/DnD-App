import { defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
    name: 'city',
    title: 'City',
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
            name: 'society',
            title: 'Society and Culture',
            type: 'content',
        },
        {
            name: 'government',
            title: 'Government',
            type: 'content',
        },
        {
            name: 'districts',
            title: 'Districts',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'organizations',
            title: 'Organizations',
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
