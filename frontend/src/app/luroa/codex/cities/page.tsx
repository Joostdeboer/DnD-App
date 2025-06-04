import { SortingRecord } from '@/src/utils/constants/variables';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { ListingPage } from '@/src/components/templates/ListingPage';
import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';

export default async function Cities({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
    const { sort, sortDir } = await searchParams;

    const sortingRecords: SortingRecord[] = [];
    const { data: cities } = await sanityFetch({
        query: getAllByTypeQuery({ sorting: sort, direction: sortDir, sortingRecords }),
        params: {
            type: 'city',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Cities</Heading>
            <ListingPage products={cities} sortingRecords={sortingRecords} href="/luroa/codex/cities/" />
        </PageLayout>
    );
}
