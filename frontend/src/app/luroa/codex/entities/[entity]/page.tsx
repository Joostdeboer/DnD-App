import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Entity({ params }: { params: Promise<{ entity: string }> }) {
    const { entity: searchParam } = await params;

    const { data: entity } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'entity',
            name: searchParam,
        },
    });

    return <GenericProductPage product={entity} />;
}
