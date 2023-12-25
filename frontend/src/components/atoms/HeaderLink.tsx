'use client';

import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';

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
        <nav className="relative group">
            <Link href={href} className="hover:bg-brand-primary-400 w-full h-full rounded-md">
                {name}
                {menuItems ? <KeyboardArrowDown /> : undefined}
            </Link>
            {menuItems?.length && (
                <div className="group-hover:flex hidden flex-col gap-2 absolute top-5">
                    {menuItems?.map((item) => {
                        return <HeaderLink key={item.name} name={item.name} href={item.href} />;
                    })}
                </div>
            )}
        </nav>
    );
}
