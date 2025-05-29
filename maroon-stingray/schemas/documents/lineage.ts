import { defineType } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export default defineType({
    name: 'lineage',
    title: 'Lineage',
    type: 'document',
    icon: UsersIcon,
    description:
        'A race or species that can be either played, or found in the world. Ranges from existing ones such as Humans, to custom ones, like the Avior, or generic alternatives like Vampires or Werewolves',
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
