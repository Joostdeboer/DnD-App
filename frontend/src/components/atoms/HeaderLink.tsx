'use client';

import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';
import { classNames } from '@/src/utils/functions/classnames';

export interface HeaderLinkProps {
    name: string;
    href: string;
    menuItems?: HeaderLinkProps[];
}

export function HeaderLink({ name, href, menuItems }: HeaderLinkProps) {
    return (
        <nav className="relative group w-full">
            <Link
                href={href}
                id="headerLink"
                className={classNames(['flex h-11 w-full flex-row items-center justify-center relative', 'rounded-lg'])}
            >
                <span className="">{name}</span>
                {menuItems ? (
                    <KeyboardArrowDown className="absolute right-5 group-hover:rotate-180 duration-100 ease-in-out" />
                ) : undefined}
            </Link>
            {/* TODO: make nested menu items drop to the right */}
            {menuItems?.length && (
                <div className="group-hover:flex hidden w-full flex-col absolute top-12 bg-brand-primary-500 border-2 border-t-0 border-brand-primary-600 -mt-1">
                    {menuItems?.map((item) => {
                        return (
                            <HeaderLink key={item.name} name={item.name} href={item.href} menuItems={item.menuItems} />
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
