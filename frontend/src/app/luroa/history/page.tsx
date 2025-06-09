import { Text } from '@/src/components/atoms/generic/Text';
import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { ListingPage } from '@/src/components/templates/ListingPage';

export default async function History({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
    const { sort, sortDir } = await searchParams;

    const { data: historicalEvents } = await sanityFetch({
        query: getAllByTypeQuery({ sorting: sort, direction: sortDir }),
        params: {
            type: 'historicalEvent',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Historical Events</Heading>
            <ListingPage products={historicalEvents} href="/luroa/history/" />
        </PageLayout>
    );
}
