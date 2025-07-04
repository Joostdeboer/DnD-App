import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { ListingPage } from '@/src/components/templates/ListingPage';

export default async function Lineages({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | undefined>>;
}) {
    const { sort, sortDir } = await searchParams;

    const { data: lineages } = await sanityFetch({
        query: getAllByTypeQuery({ sorting: sort, direction: sortDir }),
        params: {
            type: 'lineage',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Lineages</Heading>
            <ListingPage products={lineages} href="/luroa/lineages/" />
        </PageLayout>
    );
}
