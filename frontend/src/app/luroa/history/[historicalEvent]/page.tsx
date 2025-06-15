import { sanityFetch } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificTypePageQuery } from '@/src/queries/products/queries';

export default async function HistoricalEvent({ params }: { params: Promise<{ historicalEvent: string }> }) {
    const { historicalEvent: searchParam } = await params;

    const { data: historicalEvent } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'historicalEvent',
            name: decodeURI(searchParam),
        },
    });

    return <GenericProductPage product={historicalEvent} />;
}
