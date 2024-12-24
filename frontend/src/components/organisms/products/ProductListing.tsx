import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import { Image } from '@/src/components/atoms/generic/Image';
import { ReactNode } from 'react';
import { Product } from '@/src/types/generic';
import { formatDate } from '@/src/utils/functions/products';
import { TableHeaderCell } from '@/src/components/molecules/products/TableHeaderCell';
import { SortingRecord } from '@/src/utils/constants/variables';

function TableBodyCell({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={classNames(['table-cell text-sm align-middle p-2', className])}>{children}</div>;
}

export function ProductListing({
    products,
    sortingRecords,
    link,
}: {
    products: Product[];
    link: string;
    sortingRecords?: SortingRecord[];
}) {
    if (products.length === 0) return null;

    return (
        <div className="table w-full">
            <div className="table-header-group">
                <div className="table-row text-left text-black dark:text-white font-bold">
                    <TableHeaderCell sortBy="name">Name</TableHeaderCell>
                    {sortingRecords &&
                        sortingRecords.length > 0 &&
                        sortingRecords.map((record) => {
                            return (
                                <TableHeaderCell key={record.key} sortBy={record.slug}>
                                    {record.name}
                                </TableHeaderCell>
                            );
                        })}
                    <TableHeaderCell sortBy="createdAt">Created At</TableHeaderCell>
                    <TableHeaderCell sortBy="updatedAt">Updated At</TableHeaderCell>
                </div>
            </div>
            <div className="table-row-group">
                {products.map((product) => (
                    <Link
                        key={product.defaultAttributes?.name}
                        href={link + product.defaultAttributes?.slug?.current}
                        className={classNames([
                            'group table-row text-left text-black dark:text-white',
                            'dark:odd:bg-brand-neutral-800 odd:bg-brand-neutral-200',
                            'hover:bg-brand-secondary-200 hover:odd:bg-brand-secondary-200',
                            'hover:dark:odd:bg-brand-secondary-800 hover:dark:bg-brand-secondary-800',
                        ])}
                    >
                        <TableBodyCell className="!text-base">
                            <div
                                className={classNames([
                                    'flex flex-row gap-2 items-center group-hover:underline group-hover:text-brand-primary-600',
                                    LINK_CLASSES['primary'],
                                ])}
                            >
                                {product.defaultAttributes?.image ? (
                                    <Image
                                        alt={product.defaultAttributes.slug?.current ?? ''}
                                        src={product.defaultAttributes.image.asset.url}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover !w-5 !h-5 border border-brand-primary-500"
                                    />
                                ) : (
                                    <div className="w-5 h-5" />
                                )}
                                <span>{product.defaultAttributes?.name}</span>
                            </div>
                        </TableBodyCell>
                        {sortingRecords &&
                            sortingRecords.length > 0 &&
                            sortingRecords.map((record) => {
                                // TODO: get this value dynamically from the key
                                const productValue = product.information?.basics?.titles ?? '-';
                                return <TableBodyCell key={record.key}>{productValue}</TableBodyCell>;
                            })}
                        <TableBodyCell>{formatDate(product._createdAt)}</TableBodyCell>
                        <TableBodyCell>{formatDate(product._updatedAt)}</TableBodyCell>
                    </Link>
                ))}
            </div>
        </div>
    );
}
