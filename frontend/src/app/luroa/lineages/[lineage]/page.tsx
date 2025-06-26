import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Race({ params }: { params: Promise<{ lineage: string }> }) {
    const { lineage: searchParam } = await params;

    const { data: lineage } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'lineage',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={lineage} />;
}
