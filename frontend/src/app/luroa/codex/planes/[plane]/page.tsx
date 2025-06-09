import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Plane({ params }: { params: Promise<{ plane: string }> }) {
    const { plane: searchParam } = await params;

    const { data: plane } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'plane',
            name: searchParam,
        },
    });

    return <GenericProductPage product={plane} />;
}
