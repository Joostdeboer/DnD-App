import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { sanityFetch } from '@/src/configs/sanityConfig';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function God({ params }: { params: Promise<{ god: string }> }) {
    const { god: godParam } = await params;
    if (!godParam) return <div>Loading...</div>;
    const { data: god } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'god',
            name: godParam,
        },
    });

    return <GenericProductPage product={god} />;
}
