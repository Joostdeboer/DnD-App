import { Text } from '@/src/components/atoms/generic/Text';
import { runQuery } from '@/src/configs/sanityConfig';
import { godsQuery } from '@/src/groqd/queries/products/gods';
import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';

export default async function Gods() {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    // https://github.com/vercel/next.js/tree/canary/examples/cms-sanity
    const gods = await runQuery(godsQuery, ['gods']);

    return (
        <div className="flex flex-col gap-2">
            <Text>TODO: Gods</Text>
            {gods.map((god) => {
                return (
                    <Text key={god.name}>
                        God name:{' '}
                        <Link
                            href={'/luroa/gods/' + god.slug?.current}
                            className={classNames(['w-fit', LINK_CLASSES['primary']])}
                        >
                            {god.name}
                        </Link>
                        , the {god.title}.
                    </Text>
                );
            })}
        </div>
    );
}
