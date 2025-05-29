import { defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
    name: 'person',
    title: 'Person',
    type: 'document',
    icon: UserIcon,
    description: 'A person that is either a PC or NPC, located in a city, at a landmark, or part of an organization',
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
            name: 'appearance',
            title: 'Appearance',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'relationships',
            title: 'Relationships',
            type: 'content',
        },
        {
            name: 'personality',
            title: 'Personality',
            type: 'content',
        },
        {
            name: 'abilities',
            title: 'Abilities',
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
