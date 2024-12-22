import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import { Image } from '@/src/components/atoms/generic/Image';
import { ReactNode } from 'react';
import { Product } from '@/src/types/generic';
import { formatDate } from '@/src/utils/functions/products';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

function TableHeaderCell({
    children,
    className,
    sortBy,
}: {
    children: ReactNode;
    className?: string;
    sortBy?: string;
}) {
    return (
        /**
         * TODO: restyle the header using:
         *   - an icon
         *      - show highlighted arrow if sorting direction
         *   - better background
         * TODO: refine this sorting query param
         */
        <Link href={{ query: { sort: sortBy } }} className={classNames(['table-cell p-2 first:pl-9', className])}>
            <div className="flex flex-row justify-between items-center">
                {children}
                <div className="flex flex-col">
                    <ArrowDropUp className="-mb-1.5" />
                    <ArrowDropDown className="-mt-1.5" />
                </div>
            </div>
        </Link>
    );
}

function TableBodyCell({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={classNames(['table-cell text-sm align-middle p-2', className])}>{children}</div>;
}

// TODO: add better hovering
export function ProductListing({ products, link }: { products: Product[]; link: string }) {
    if (products.length === 0) return null;

    return (
        <div className="table w-full">
            <div className="table-header-group">
                <div className="table-row text-left text-black dark:text-white font-bold">
                    <TableHeaderCell sortBy="name">Name</TableHeaderCell>
                    <TableHeaderCell sortBy="createdAt">Created At</TableHeaderCell>
                    <TableHeaderCell sortBy="updatedAt">Updated At</TableHeaderCell>
                </div>
            </div>
            <div className="table-row-group">
                {products.map((product) => (
                    <Link
                        key={product.defaultAttributes?.name}
                        href={link + product.defaultAttributes?.slug?.current}
                        className="group table-row text-left text-black dark:text-white dark:odd:bg-brand-neutral-800 odd:bg-brand-neutral-200"
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
                        <TableBodyCell>{formatDate(product._createdAt)}</TableBodyCell>
                        <TableBodyCell>{formatDate(product._updatedAt)}</TableBodyCell>
                    </Link>
                ))}
            </div>
        </div>
    );
}
