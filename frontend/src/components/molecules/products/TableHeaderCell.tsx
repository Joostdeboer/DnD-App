'use client';

import { ReactNode, useState } from 'react';
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
    const [direction, setDirection] = useState<string | undefined>('asc');
    const params = useSearchParams();
    const sort = params.get('sort');

    /**
     * TODO: reset direction if swapping between sorting targets
     *  Don't use 'useEffect' -> that gives race condition
     */

    return (
        /**
         * TODO: restyle the header:
         *   - better background
         */
        <Link
            href={{ query: { sort: sortBy, direction } }}
            className={classNames(['table-cell p-2 first:pl-9', className])}
            onClick={() => (direction === 'asc' ? setDirection('desc') : setDirection('asc'))}
        >
            <div className="flex flex-row justify-between items-center">
                {children}
                <div className="flex flex-col">
                    <ArrowDropUp
                        className={classNames(['-mb-1.5', sortBy === sort && direction === 'desc' ? 'text-black' : ''])}
                    />
                    <ArrowDropDown
                        className={classNames(['-mt-1.5', sortBy === sort && direction === 'asc' ? 'text-black' : ''])}
                    />
                </div>
            </div>
        </Link>
    );
}
