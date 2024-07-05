import { defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
    name: 'documentSettings',
    title: 'Document Settings',
    type: 'document',
    icon: UserIcon,
    fields: [
        {
            name: 'information',
            title: 'Information',
            type: 'information',
            description: 'Fill here the names that should be shown in the app for each key of each category',
        },
        {
            name: 'informationCategories',
            title: 'Information Categories',
            description: 'Fill here the names that should be shown in the app for each category key',
            type: 'object',
            options: {
                collapsed: true,
                collapsible: true,
            },
            fields: [
                {
                    name: 'basics',
                    title: 'Basics',
                    type: 'string',
                },
                {
                    name: 'dates',
                    title: 'Dates',
                    type: 'string',
                },
                {
                    name: 'geography',
                    title: 'Geography',
                    type: 'string',
                },
                {
                    name: 'commerce',
                    title: 'Commerce',
                    type: 'string',
                },
                {
                    name: 'divinity',
                    title: 'Divinity',
                    type: 'string',
                },
                {
                    name: 'history',
                    title: 'History',
                    type: 'string',
                },
                {
                    name: 'relations',
                    title: 'Relations',
                    type: 'string',
                },
                {
                    name: 'appearance',
                    title: 'Appearance',
                    type: 'string',
                },
                {
                    name: 'membership',
                    title: 'Membership',
                    type: 'string',
                },
            ],
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Document Settings',
            };
        },
    },
});
