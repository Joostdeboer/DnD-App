import { ReactNode } from 'react';
import Link from 'next/link';
import { Url } from 'node:url';
import { classNames } from '@/src/utils/functions/classnames';

export function Tag({
    tag,
    count,
    url,
    isSelected,
}: {
    tag: string | null;
    count?: ReactNode;
    url: Partial<Url> | string;
    isSelected?: boolean;
}) {
    return (
        <Link
            className={classNames([
                'rounded-full w-fit px-4 text-sm flex flex-row gap-1 justify-center',
                isSelected
                    ? 'bg-brand-primary-600 ring-2 ring-offset-2 ring-brand-primary-700 ring-offset-brand-neutral-100 dark:ring-offset-brand-neutral-900'
                    : 'bg-brand-primary-500 hover:bg-brand-primary-600',
            ])}
            href={url}
            replace
            prefetch={true}
        >
            <span>{tag}</span>
            {count !== undefined && <span>({count})</span>}
        </Link>
    );
}
