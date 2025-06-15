import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificWritingTypePageQuery } from '@/src/queries/products/queries';

export default async function Poem({ params }: { params: Promise<{ poem: string }> }) {
    const { poem: searchParam } = await params;

    const { data: poem } = await sanityFetch({
        query: specificWritingTypePageQuery,
        params: {
            type: 'writing',
            name: decodeURI(searchParam),
            writingType: 'poem',
        },
    });

    return <GenericProductPage product={poem} />;
}
