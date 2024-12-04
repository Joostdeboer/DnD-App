import { Text } from '@/src/components/atoms/generic/Text';
import { runQuery } from '@/src/configs/sanityConfig';
import { specificGodQuery } from '@/src/groqd/queries/products/gods';
import Link from 'next/link';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import { MappedPortableText } from '@/src/components/atoms/generic/MappedPortableText';
import { SidebarPageLayout } from '@/src/components/templates/SidebarPageLayout';

export const revalidate = 1000;

export default async function God({ params }: { params: { god: string } }) {
    if (!params.god) return <div>Loading...</div>;
    const god = await runQuery(specificGodQuery(params.god), ['god'], { god: params.god });
    if (!god) return <div>Loading data...</div>;

    return (
        <SidebarPageLayout>
            <Link href="/luroa/gods" className={classNames(['w-fit', LINK_CLASSES['primary']])}>
                Back to Gods
            </Link>
            <Text size="xl">{god.defaultAttributes?.name}</Text>
            {god.appearance && <MappedPortableText value={god.appearance} />}
        </SidebarPageLayout>
    );
}
