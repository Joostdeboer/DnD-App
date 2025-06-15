import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Concept({ params }: { params: Promise<{ concept: string }> }) {
    const { concept: searchParam } = await params;

    const { data: concept } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'concept',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={concept} />;
}
