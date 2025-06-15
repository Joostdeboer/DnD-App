import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificWritingTypePageQuery } from '@/src/queries/products/queries';

export default async function Myth({ params }: { params: Promise<{ myth: string }> }) {
    const { myth: searchParam } = await params;

    const { data: myth } = await sanityFetch({
        query: specificWritingTypePageQuery,
        params: {
            type: 'writing',
            name: decodeURI(searchParam),
            writingType: 'myth',
        },
    });

    return <GenericProductPage product={myth} />;
}
