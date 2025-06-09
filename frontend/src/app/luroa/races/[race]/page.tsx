import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Race({ params }: { params: Promise<{ race: string }> }) {
    const { race: searchParam } = await params;

    const { data: race } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'lineage',
            name: searchParam,
        },
    });

    return <GenericProductPage product={race} />;
}
