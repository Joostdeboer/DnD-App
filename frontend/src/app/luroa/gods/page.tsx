import { Heading } from '@/src/components/atoms/generic/Heading';
import { sanityFetch } from '@/src/configs/sanityConfig';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { ListingPage } from '@/src/components/templates/ListingPage';
import { SortingRecord } from '@/src/utils/constants/variables';
import { getAllByTypeQuery } from '@/src/queries/products/queries';

export default async function Gods({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
    // important to note: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
    // https://github.com/vercel/next.js/tree/canary/examples/cms-sanity
    const { sort, sortDir } = await searchParams;

    const sortingRecords: SortingRecord[] = [{ name: 'Title', key: 'information.basics.titles', slug: 'titles' }];
    const { data: gods } = await sanityFetch({
        query: getAllByTypeQuery({ sorting: sort, direction: sortDir, sortingRecords }),
        params: {
            type: 'god',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Gods</Heading>
            <ListingPage products={gods} sortingRecords={sortingRecords} href="/luroa/gods/" />
        </PageLayout>
    );
}
