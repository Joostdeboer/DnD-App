import { defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export default defineType({
    name: 'historicalEvent',
    title: 'Historical Event',
    type: 'document',
    icon: CalendarIcon,
    description:
        'A moment in time that would be remembered in history, or be written about in historical texts. For example, a battle, victory over an enemy, eradication of a particular monster type, etc.',
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
            name: 'events',
            title: 'Events',
            type: 'content',
        },
        {
            name: 'consequences',
            title: 'Consequences',
            type: 'content',
        },
        {
            name: 'etymology',
            title: 'Etymology',
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
