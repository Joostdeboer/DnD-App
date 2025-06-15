import { PRODUCT_TYPES, WRITING_TYPES } from '@/src/utils/constants/variables';

export interface HeaderLinkType {
    name: string;
    href: string;
    sanityType?: PRODUCT_TYPES;
    writingType?: WRITING_TYPES;
    disabled?: boolean;
    menuItems?: HeaderLinkType[];
}

export interface FooterLinkType {
    name: string;
    href: string;
}

export const HEADERLINKS: HeaderLinkType[] = [
    {
        name: 'Luroa',
        href: '/luroa',
        menuItems: [
            { name: 'About', href: '/luroa/about' },
            { name: 'History', href: '/luroa/history', sanityType: PRODUCT_TYPES.HISTORICAL_EVENT },
            { name: 'Gods', href: '/luroa/gods', sanityType: PRODUCT_TYPES.GOD },
            { name: 'Races', href: '/luroa/races', sanityType: PRODUCT_TYPES.LINEAGE },
            {
                name: 'Codex',
                href: '/luroa/codex',
                menuItems: [
                    { name: 'Cities', href: '/luroa/codex/cities', sanityType: PRODUCT_TYPES.CITY },
                    { name: 'Concepts', href: '/luroa/codex/concepts', sanityType: PRODUCT_TYPES.CONCEPT },
                    { name: 'Creatures', href: '/luroa/codex/creatures', sanityType: PRODUCT_TYPES.CREATURE },
                    { name: 'Entities', href: '/luroa/codex/entities', sanityType: PRODUCT_TYPES.ENTITY },
                    { name: 'Flora', href: '/luroa/codex/flora', sanityType: PRODUCT_TYPES.FLORA },
                    { name: 'Landmarks', href: '/luroa/codex/landmarks', sanityType: PRODUCT_TYPES.LANDMARK },
                    {
                        name: 'Organizations',
                        href: '/luroa/codex/organizations',
                        sanityType: PRODUCT_TYPES.ORGANIZATION,
                    },
                    { name: 'People', href: '/luroa/codex/people', sanityType: PRODUCT_TYPES.PERSON },
                    { name: 'Planes', href: '/luroa/codex/planes', sanityType: PRODUCT_TYPES.PLANE },
                    { name: 'Regions', href: '/luroa/codex/regions', sanityType: PRODUCT_TYPES.REGION },
                ],
            },
        ],
    },
    {
        name: 'Writing',
        href: '/writing',
        menuItems: [
            {
                name: 'Myths',
                href: '/writing/myths',
                sanityType: PRODUCT_TYPES.WRITING,
                writingType: WRITING_TYPES.MYTH,
            },
            {
                name: 'Poetry',
                href: '/writing/poetry',
                sanityType: PRODUCT_TYPES.WRITING,
                writingType: WRITING_TYPES.POEM,
            },
            {
                name: 'Stories',
                href: '/writing/stories',
                sanityType: PRODUCT_TYPES.WRITING,
                writingType: WRITING_TYPES.STORY,
            },
        ],
    },
    {
        name: 'Media',
        href: '/media',
        menuItems: [
            { name: 'Art', href: '/media/art', sanityType: PRODUCT_TYPES.ART },
            { name: 'Comics', href: '/media/comics', disabled: true },
            { name: 'Songs', href: '/media/songs', disabled: true },
            { name: 'Videos', href: '/media/videos', disabled: true },
            { name: 'Games', href: '/media/games', disabled: true },
        ],
    },
    {
        name: 'Gameplay',
        href: '/gameplay',
        menuItems: [
            { name: 'Session 0', href: '/gameplay/sessionZero' },
            { name: 'Homebrew', href: '/gameplay/homebrew' },
            {
                name: 'Character creation',
                href: '/gameplay/creation',
                menuItems: [
                    { name: 'Official Guidelines', href: '/gameplay/creation/guidelines' },
                    { name: 'Character options', href: '/gameplay/creation/options' },
                    { name: 'Tips', href: '/gameplay/creation/tips' },
                ],
            },
            { name: 'Playlists', href: '/gameplay/playlists' },
        ],
    },
    {
        name: 'Tools',
        href: '/tools',
        menuItems: [
            { name: 'Calendar', href: '/tools/calendar' },
            { name: 'Map', href: '/tools/map' },
        ],
    },
];

export const FOOTERLINKS: FooterLinkType[] = [
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
    {
        name: 'Terms of Use',
        href: '/terms',
    },
];
