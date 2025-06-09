import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Flora({ params }: { params: Promise<{ flora: string }> }) {
    const { flora: searchParam } = await params;

    const { data: flora } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'flora',
            name: searchParam,
        },
    });

    return <GenericProductPage product={flora} />;
}
