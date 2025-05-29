import { defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
    name: 'city',
    title: 'City',
    type: 'document',
    icon: HomeIcon,
    description:
        'A town, city, village, capital or otherwise interesting location that holds people or a gathering of creatures',
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
