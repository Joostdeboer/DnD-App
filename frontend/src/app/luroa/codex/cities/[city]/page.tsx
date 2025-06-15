import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function City({ params }: { params: Promise<{ city: string }> }) {
    const { city: searchParam } = await params;

    const { data: city } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'city',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={city} />;
}
