import { Text } from '@/src/components/atoms/generic/Text';
import { runQuery } from '@/src/configs/sanityConfig';
import { specificGodQuery } from '@/src/groqd/queries/products/gods';

export default async function God({ params }: { params: { god: string } }) {
    if (!params.god) return <div>Loading...</div>;
    const god = await runQuery(specificGodQuery(params.god));
    if (!god) return <div>Loading data...</div>;

    return (
        <div className="flex flex-col gap-2">
            <Text>TODO: God</Text>
            <Text>
                {god.name}, {god.title}.
            </Text>
        </div>
    );
}
