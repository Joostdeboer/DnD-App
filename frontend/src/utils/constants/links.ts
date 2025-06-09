export const HEADERLINKS = [
    {
        name: 'Luroa',
        href: '/luroa',
        menuItems: [
            { name: 'About', href: '/luroa/about' },
            { name: 'History', href: '/luroa/history' },
            { name: 'Gods', href: '/luroa/gods' },
            { name: 'Races', href: '/luroa/races' },
            {
                name: 'Codex',
                href: '/luroa/codex',
                menuItems: [
                    { name: 'Cities', href: '/luroa/codex/cities' },
                    { name: 'Concepts', href: '/luroa/codex/concepts' },
                    { name: 'Creatures', href: '/luroa/codex/creatures' },
                    { name: 'Entities', href: '/luroa/codex/entities' },
                    { name: 'Flora', href: '/luroa/codex/flora' },
                    { name: 'Landmarks', href: '/luroa/codex/landmarks' },
                    { name: 'Organizations', href: '/luroa/codex/organizations' },
                    { name: 'People', href: '/luroa/codex/people' },
                    { name: 'Planes', href: '/luroa/codex/planes' },
                    { name: 'Regions', href: '/luroa/codex/regions' },
                ],
            },
        ],
    },
    {
        name: 'Writing',
        href: '/writing',
        menuItems: [
            { name: 'Myths', href: '/writing/myths' },
            { name: 'Poetry', href: '/writing/poetry' },
            { name: 'Stories', href: '/writing/stories' },
            {
                name: 'Media',
                href: '/writing/media',
                menuItems: [
                    { name: 'Art', href: '/writing/media/art' },
                    { name: 'Comics', href: '/writing/media/comics', disabled: true },
                    { name: 'Songs', href: '/writing/media/songs', disabled: true },
                    { name: 'Videos', href: '/writing/media/videos', disabled: true },
                    { name: 'Games', href: '/writing/media/games', disabled: true },
                ],
            },
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

export const FOOTERLINKS = [
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
