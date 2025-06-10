import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import { Image } from '@/src/components/atoms/generic/Image';
import { Text } from '@/src/components/atoms/generic/Text';
import { ReactNode } from 'react';
import { formatDate } from '@/src/utils/functions/products';
import { TableHeaderCell } from '@/src/components/molecules/products/TableHeaderCell';
import { SortingRecord, WritingPaths } from '@/src/utils/constants/variables';
import { AllProductsOfTypeResult } from '@/src/sanity/types';

function TableBodyCell({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={classNames(['table-cell text-sm align-middle p-2', className])}>{children}</div>;
}

export function ProductListing({
    products,
    link,
    sortingRecords,
    redirectSubType = false,
}: {
    products: AllProductsOfTypeResult;
    link: string;
    sortingRecords?: SortingRecord[];
    redirectSubType?: boolean;
}) {
    if (products.length === 0)
        return (
            <Text isMuted>
                No articles found for <i>{link}</i>
            </Text>
        );

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
                        href={
                            // we need to grab the specific subpath used to display the writing paths, and insert it between the link and product slug
                            link +
                            (redirectSubType && product._type === 'writing' && product.writingType
                                ? WritingPaths[product.writingType] + '/'
                                : '') +
                            product.defaultAttributes?.slug?.current
                        }
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
                                        image={product.defaultAttributes.image}
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
                                // reduce the property from a path in the object to an interpretable value in the object
                                const productValue = record.key
                                    .split('.')
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .reduce((result: any, path: string | keyof AllProductsOfTypeResult[number]) => {
                                        if (path === '' || !result || typeof result === 'string') return;
                                        return result[path];
                                    }, product as string | AllProductsOfTypeResult[number]);
                                return (
                                    <TableBodyCell key={record.key}>
                                        {typeof productValue === 'string' ? productValue : '-'}
                                    </TableBodyCell>
                                );
                            })}
                        <TableBodyCell>{formatDate(new Date(product._createdAt))}</TableBodyCell>
                        <TableBodyCell>{formatDate(new Date(product._updatedAt))}</TableBodyCell>
                    </Link>
                ))}
            </div>
        </div>
    );
}
