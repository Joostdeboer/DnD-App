import { defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
    name: 'region',
    title: 'Region',
    type: 'document',
    icon: ImageIcon,
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
            name: 'geography',
            title: 'Geography',
            type: 'content',
        },
        {
            name: 'inhabitants',
            title: 'Inhabitants',
            type: 'content',
        },
        {
            name: 'society',
            title: 'Society',
            type: 'content',
        },
        {
            name: 'trade',
            title: 'Trade',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'notableLocations',
            title: 'Notable Locations',
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
