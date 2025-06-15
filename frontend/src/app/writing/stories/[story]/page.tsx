import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificWritingTypePageQuery } from '@/src/queries/products/queries';

export default async function Story({ params }: { params: Promise<{ story: string }> }) {
    const { story: searchParam } = await params;

    const { data: story } = await sanityFetch({
        query: specificWritingTypePageQuery,
        params: {
            type: 'writing',
            name: decodeURI(searchParam),
            writingType: 'story',
        },
    });

    return <GenericProductPage product={story} />;
}
