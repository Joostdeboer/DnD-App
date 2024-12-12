import { Text } from '@/src/components/atoms/generic/Text';
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

    return (
        <PageLayout>
            <Text>TODO: Gods</Text>
            {gods.map((god) => {
                return (
                    <Text key={god.defaultAttributes?.name}>
                        God name:{' '}
                        <Link
                            href={'/luroa/gods/' + god.defaultAttributes?.slug?.current}
                            className={classNames(['w-fit', LINK_CLASSES['primary']])}
                        >
                            {god.defaultAttributes?.name}
                        </Link>
                    </Text>
                );
            })}
        </PageLayout>
    );
}
