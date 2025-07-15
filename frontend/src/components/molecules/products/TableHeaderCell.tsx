'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { useSearchParams } from 'next/navigation';

export function TableHeaderCell({
    children,
    className,
    sortBy,
}: {
    children: ReactNode;
    className?: string;
    sortBy?: string;
}) {
    const params = useSearchParams();
    const sort = params.get('sort');
    const sortDir = params.get('sortDir');

    let newDirection: string | undefined;
    if (sortBy !== sort || !sortDir) {
        newDirection = 'desc';
    } else if (sortBy === sort && sortDir === 'desc') {
        newDirection = 'asc';
    } else if (sortBy === sort && sortDir === 'asc') {
        newDirection = undefined;
    }

    return (
        <Link
            href={{ query: { ...(sortBy && { sort: sortBy }), ...(newDirection && { sortDir: newDirection }) } }}
            className={classNames([
                'table-cell px-2 first:pl-9 bg-brand-primary-500 border-brand-primary-600 border-b border-r last:border-r-0',
                className,
            ])}
            replace
        >
            <div className="flex flex-row justify-between items-center">
                {children}
                <div className="flex flex-col">
                    <ArrowDropUp
                        className={classNames([
                            '-mb-1.5',
                            sortBy === sort && sortDir === 'desc' ? 'dark:text-black text-white' : '',
                        ])}
                    />
                    <ArrowDropDown
                        className={classNames([
                            '-mt-1.5',
                            sortBy === sort && sortDir === 'asc' ? 'dark:text-black text-white' : '',
                        ])}
                    />
                </div>
            </div>
        </Link>
    );
}
