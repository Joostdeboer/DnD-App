'use client';

import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';
import { classNames } from '@/src/utils/functions/classnames';

export function HeaderLink({
    name,
    href,
    menuItems,
}: {
    name: string;
    href: string;
    menuItems?: { name: string; href: string }[];
}) {
    return (
        <nav className="relative group w-full">
            <Link
                href={href}
                id="headerLink"
                className={classNames([
                    'flex h-full w-full flex-row items-center justify-center rounded-md relative p-3',
                    // 'hover:bg-gradient-to-r hover:from-brand-primary-500 hover:via-brand-primary-400 hover:to-brand-primary-500',
                    // 'hover:bg-gradient-to-t hover:from-brand-primary-500 hover:via-brand-primary-400 hover:to-brand-primary-500',
                ])}
            >
                <span className="">{name}</span>
                {menuItems ? <KeyboardArrowDown className="absolute right-0" /> : undefined}
            </Link>
            {menuItems?.length && (
                <div className="group-hover:flex hidden w-full flex-col gap-2 absolute top-12 bg-brand-primary-500 border-2 border-brand-neutral-500">
                    {menuItems?.map((item) => {
                        return <HeaderLink key={item.name} name={item.name} href={item.href} />;
                    })}
                </div>
            )}
        </nav>
    );
}
