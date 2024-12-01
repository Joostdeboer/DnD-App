import { defineType } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export default defineType({
    name: 'lineage',
    title: 'Lineage',
    type: 'document',
    icon: UsersIcon,
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
            name: 'appearance',
            title: 'Appearance',
            type: 'content',
        },
        {
            name: 'abilities',
            title: 'Abilities',
            type: 'content',
        },
        {
            name: 'habitat',
            title: 'Habitat',
            type: 'content',
        },
        {
            name: 'cultures',
            title: 'Cultures',
            type: 'content',
        },
        {
            name: 'society',
            title: 'Society',
            type: 'content',
        },
        {
            name: 'history',
            title: 'History',
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
