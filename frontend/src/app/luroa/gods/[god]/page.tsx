import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function God({ params }: { params: Promise<{ god: string }> }) {
    const { god: searchParam } = await params;

    const { data: god } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'god',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={god} />;
}
