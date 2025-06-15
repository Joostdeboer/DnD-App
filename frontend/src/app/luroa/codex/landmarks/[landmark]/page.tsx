import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Landmark({ params }: { params: Promise<{ landmark: string }> }) {
    const { landmark: searchParam } = await params;

    const { data: landmark } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'landmark',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={landmark} />;
}
