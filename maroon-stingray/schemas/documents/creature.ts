import { defineType } from 'sanity';
import { ActivityIcon } from '@sanity/icons';

export default defineType({
    name: 'creature',
    title: 'Creature',
    type: 'document',
    icon: ActivityIcon,
    description:
        'Any monstrous or normal creature that might roam the lands. From special animals, to beasts, to monsters and aberrations',
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
            name: 'behavior',
            title: 'Behavior',
            type: 'content',
        },
        {
            name: 'abilities',
            title: 'Abilities',
            type: 'content',
        },
        {
            name: 'ecology',
            title: 'Ecology',
            type: 'content',
        },
        {
            name: 'biology',
            title: 'Biology',
            type: 'content',
        },
        {
            name: 'combat',
            title: 'Combat',
            type: 'content',
        },
        {
            name: 'subspecies',
            title: 'Subspecies',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
            type: 'content',
        },
        {
            name: 'society',
            title: 'Society',
            type: 'content',
        },
        {
            name: 'usage',
            title: 'Usage',
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
