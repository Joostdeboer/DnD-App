'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Text } from '@/src/components/atoms/generic/Text';
import HomeIcon from '@mui/icons-material/Home';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';

export function Breadcrumbs() {
    const pathSegments = usePathname().split('/');

    const Divider = () => <span className="text-brand-primary-500 cursor-default">&gt;</span>;

    return (
        <nav className={classNames(['flex flex-row gap-2 w-fit justify-center'])}>
            <Link href="/" className={LINK_CLASSES['primary']}>
                <HomeIcon />
            </Link>
            {pathSegments.map((item, index) => {
                // the first one is always empty, need to only have a divider here
                if (item === '') return <Divider key="start" />;

                const itemName = item[0].toUpperCase() + item.slice(1);
                // the final element should not be clickable
                if (index === pathSegments.length - 1) {
                    return (
                        <Text key={item} className="!text-brand-primary-600 font-bold underline cursor-default">
                            {itemName}
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
