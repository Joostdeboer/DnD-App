import { defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
    name: 'region',
    title: 'Region',
    type: 'document',
    icon: ImageIcon,
    description:
        'A place that is a collection of locations, whether that is a country made up of cities, a stretch of lands filled with landmarks, or a wide stretch of sea. Gulfs and Bays are included here, and so are deserts or mountain ranges if you refer to their entirety as a place filled with locations',
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
