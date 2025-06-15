import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Creature({ params }: { params: Promise<{ creature: string }> }) {
    const { creature: searchParam } = await params;

    const { data: creature } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'creature',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={creature} />;
}
