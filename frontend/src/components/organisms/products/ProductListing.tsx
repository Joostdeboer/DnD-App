import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import { Image } from '@/src/components/atoms/generic/Image';
import { DefaultAttributesType } from '@/src/groqd/types/subqueries';
import { ReactNode } from 'react';

function TableHeaderCell({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={classNames(['table-cell p-2', className])}>{children}</div>;
}

function TableBodyCell({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={classNames(['table-cell text-sm align-middle p-2', className])}>{children}</div>;
}

export function ProductListing({
    products,
}: {
    products: { _updatedAt: Date; _createdAt: Date; defaultAttributes?: DefaultAttributesType | null }[];
}) {
    if (products.length === 0) return null;
    return (
        <div className="table w-full">
            <div className="table-header-group">
                <div className="table-row text-left text-black dark:text-white font-bold">
                    <TableHeaderCell>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="w-5 h-5" />
                            <span>Name</span>
                        </div>
                    </TableHeaderCell>
                    <TableHeaderCell>Created At</TableHeaderCell>
                    <TableHeaderCell>Updated At</TableHeaderCell>
                </div>
            </div>
            <div className="table-row-group">
                {products.map((god) => (
                    <Link
                        key={god.defaultAttributes?.name}
                        href={'/luroa/gods/' + god.defaultAttributes?.slug?.current}
                        className="group table-row text-left text-black dark:text-white dark:odd:bg-brand-neutral-800 odd:bg-brand-neutral-200"
                    >
                        <TableBodyCell className="!text-base">
                            <div
                                className={classNames([
                                    'flex flex-row gap-2 items-center group-hover:underline group-hover:text-brand-primary-600',
                                    LINK_CLASSES['primary'],
                                ])}
                            >
                                {god.defaultAttributes?.image ? (
                                    <Image
                                        alt={god.defaultAttributes.slug?.current ?? ''}
                                        src={god.defaultAttributes.image.asset.url}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover !w-5 !h-5 border border-brand-primary-500"
                                    />
                                ) : (
                                    <div className="w-5 h-5" />
                                )}
                                <span>{god.defaultAttributes?.name}</span>
                            </div>
                        </TableBodyCell>
                        <TableBodyCell>{god._createdAt.toLocaleString()}</TableBodyCell>
                        <TableBodyCell>{god._updatedAt.toLocaleString()}</TableBodyCell>
                    </Link>
                ))}
            </div>
        </div>
    );
}
