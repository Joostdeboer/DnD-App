import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Region({ params }: { params: Promise<{ region: string }> }) {
    const { region: searchParam } = await params;

    const { data: region } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'region',
            name: searchParam,
        },
    });

    return <GenericProductPage product={region} />;
}
