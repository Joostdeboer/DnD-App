import { defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export default defineType({
    name: 'historicalEvent',
    title: 'Historical Event',
    type: 'document',
    icon: CalendarIcon,
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
