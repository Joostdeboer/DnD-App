import { Heading } from '@/src/components/atoms/generic/Heading';
import { Image } from '@/src/components/atoms/generic/Image';
import { runQuery } from '@/src/configs/sanityConfig';
import { godsQuery } from '@/src/groqd/queries/products/gods';
import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import { PageLayout } from '@/src/components/templates/PageLayout';

export const revalidate = 1000;

export default async function Gods() {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    // https://github.com/vercel/next.js/tree/canary/examples/cms-sanity
    const gods = await runQuery(godsQuery, ['gods']);

    // TODO: sorting
    // TODO: extract table to its own file for easy re-use

    return (
        <PageLayout>
            <Heading>List of Gods</Heading>
            {gods.length > 0 && (
                <div className="table w-full">
                    <div className="table-header-group">
                        <div className="table-row text-left text-black dark:text-white font-bold">
                            <div className="table-cell p-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="w-5 h-5" />
                                    <span>Name</span>
                                </div>
                            </div>
                            <div className="table-cell">Created At</div>
                            <div className="table-cell">Updated At</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {gods.map((god) => {
                            return (
                                <Link
                                    key={god.defaultAttributes?.name}
                                    href={'/luroa/gods/' + god.defaultAttributes?.slug?.current}
                                    className="group table-row text-left text-black dark:text-white dark:odd:bg-brand-neutral-800 odd:bg-brand-neutral-200"
                                >
                                    <div className="table-cell p-2">
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
                                    </div>
                                    <div className="table-cell text-sm align-middle">
                                        {god._createdAt.toLocaleString()}
                                    </div>
                                    <div className="table-cell text-sm align-middle">
                                        {god._updatedAt.toLocaleString()}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </PageLayout>
    );
}
