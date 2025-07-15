'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Text } from '@/src/components/atoms/generic/Text';
import HomeIcon from '@mui/icons-material/Home';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import { useEffect, useState } from 'react';

export function Breadcrumbs() {
    const pathSegments = usePathname().split('/');

    const Divider = () => <span className="text-brand-primary-500 cursor-default">&gt;</span>;

    // because we're accessing the DOM in a client, we need to fetch and wait for it in a useEffect
    const [_window, setWindowObject] = useState<(Window & typeof globalThis) | null>(null);
    const [_document, setDocumentObject] = useState<Document | null>(null);

    useEffect(() => {
        const _window = window;
        const _document = document;
        if (_document && _window) {
            setWindowObject(_window);
            setDocumentObject(_document);
        }
    }, []);

    return (
        <nav className={classNames(['flex flex-row gap-2 w-fit justify-center'])}>
            <Link href="/" className={LINK_CLASSES['primary']} prefetch={true}>
                <HomeIcon />
            </Link>
            {pathSegments.map((item, index) => {
                // the first one is always empty, need to only have a divider here
                if (item === '') return <Divider key="start" />;

                const itemName = item[0].toUpperCase() + item.slice(1);
                // the final element should not be clickable
                if (index === pathSegments.length - 1) {
                    const pageTitle =
                        _window !== undefined ? _document?.getElementById('pageTitle')?.innerText : undefined;
                    return (
                        <Text key={item} className="!text-brand-primary-600 font-bold underline cursor-default">
                            {pageTitle ?? itemName}
                        </Text>
                    );
                }

                // we need to repeat the '../' to make sure we are able to dynamically go back to previous pages, no matter the depth
                return (
                    <section key={item} className="contents">
                        <Link
                            href={{ pathname: '../'.repeat(pathSegments.length - index - 1) + item }}
                            className={LINK_CLASSES['primary']}
                        >
                            {itemName}
                        </Link>
                        <Divider />
                    </section>
                );
            })}
        </nav>
    );
}
