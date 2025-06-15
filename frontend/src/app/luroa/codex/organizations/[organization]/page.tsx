import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function Organization({ params }: { params: Promise<{ organization: string }> }) {
    const { organization: searchParam } = await params;

    const { data: organization } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'organization',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={organization} />;
}
