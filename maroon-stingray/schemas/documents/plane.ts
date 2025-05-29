import { defineType } from 'sanity';
import { EarthAmericasIcon } from '@sanity/icons';

export default defineType({
    name: 'plane',
    title: 'Plane',
    type: 'document',
    icon: EarthAmericasIcon,
    description:
        'A grouping of locations where people live. A realm, demiplane, subplane, etc. can be meant here, like the Plane of Fire, Shadow Realm, etc.',
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
            name: 'layers',
            title: 'Layers',
            type: 'content',
        },
        {
            name: 'inhabitants',
            title: 'Inhabitants',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'cosmography',
            title: 'Cosmography',
            type: 'content',
        },
        {
            name: 'locations',
            title: 'Locations',
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
