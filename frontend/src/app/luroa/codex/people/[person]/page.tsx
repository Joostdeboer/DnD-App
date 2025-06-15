import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Person({ params }: { params: Promise<{ person: string }> }) {
    const { person: searchParam } = await params;

    const { data: person } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'person',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={person} />;
}
