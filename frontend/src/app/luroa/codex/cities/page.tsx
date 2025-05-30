import { SortingRecord } from '@/src/utils/constants/variables';
import { runQuery } from '@/src/configs/sanityConfig';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { ListingPage } from '@/src/components/templates/ListingPage';
import { citiesQuery } from '@/src/groqd/queries/products/cities';

export default async function Cities({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
    const { sort, sortDir } = await searchParams;

    const sortingRecords: SortingRecord[] = [];
    const cities = await runQuery(citiesQuery({ sorting: sort, direction: sortDir, sortingRecords }), ['cities']);

    return (
        <PageLayout>
            <Heading>List of Cities</Heading>
            <ListingPage products={cities} sortingRecords={sortingRecords} href="/luroa/cities/" />
        </PageLayout>
    );
}
