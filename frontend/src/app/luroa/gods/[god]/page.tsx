import { Text } from '@/src/components/atoms/generic/Text';
import { runQuery } from '@/src/configs/sanityConfig';
import { specificGodQuery } from '@/src/groqd/queries/products/gods';
import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';

export const revalidate = 1000;

export default async function God({ params }: { params: { god: string } }) {
    if (!params.god) return <div>Loading...</div>;
    const god = await runQuery(specificGodQuery(params.god), ['god'], { god: params.god });
    if (!god) return <div>Loading data...</div>;

    return (
        <div className="flex flex-col gap-2">
            <Link href="/luroa/gods" className={classNames(['w-fit', LINK_CLASSES['primary']])}>
                Back to Gods
            </Link>
            <Text size="xl">
                {god.name}, {god.title}
            </Text>
            {god.description && <Text>{god.description}</Text>}
        </div>
    );
}
