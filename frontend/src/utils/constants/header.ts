export const HEADERLINKS = [
    {
        name: 'Luroa',
        href: '/luroa',
        menuItems: [
            { name: 'About', href: '/luroa/about' },
            {
                name: 'Test',
                href: '/luroa/about',
                menuItems: [
                    {
                        name: 'Nested 1',
                        href: '/luroa/about',
                    },
                    {
                        name: 'Nested 2',
                        href: '/luroa/about',
                        menuItems: [
                            {
                                name: 'Nested Nested 1',
                                href: '/luroa/about',
                            },
                        ],
                    },
                    {
                        name: 'Nested 3',
                        href: '/luroa/about',
                        menuItems: [
                            {
                                name: 'Nested Nested 2',
                                href: '/luroa/about',
                                menuItems: [
                                    {
                                        name: 'Nested Nested Nested 1',
                                        href: '/luroa/about',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Nested 4',
                        href: '/luroa/about',
                    },
                    {
                        name: 'Nested 5',
                        href: '/luroa/about',
                    },
                ],
            },
            { name: 'Test 2', href: '/luroa/about' },
            {
                name: 'Test 3',
                href: '/luroa/about',
                menuItems: [
                    {
                        name: 'Inner Test 2',
                        href: '/luroa/about',
                    },
                ],
            },
        ],
    },
    { name: 'Writing', href: '/writing' },
    { name: 'Gameplay', href: '/gameplay' },
    { name: 'Tools', href: '/tools' },
];
