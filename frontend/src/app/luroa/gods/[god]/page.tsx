import { Text } from '@/src/components/atoms/generic/Text';
import { runQuery } from '@/src/configs/sanityConfig';
import { specificGodQuery } from '@/src/groqd/queries/products/gods';
import { MappedPortableText } from '@/src/components/atoms/generic/MappedPortableText';
import { SidebarPageLayout } from '@/src/components/templates/SidebarPageLayout';

export const revalidate = 1000;

export default async function God({ params }: { params: { god: string } }) {
    if (!params.god) return <div>Loading...</div>;
    const god = await runQuery(specificGodQuery(params.god), ['god'], { god: params.god });
    if (!god) return <div>Loading data...</div>;

    return (
        <SidebarPageLayout>
            <Text size="xl">{god.defaultAttributes?.name}</Text>
            {god.appearance && <MappedPortableText value={god.appearance} />}
        </SidebarPageLayout>
    );
}
