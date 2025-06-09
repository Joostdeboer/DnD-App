import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { ListingPage } from '@/src/components/templates/ListingPage';

export default async function Landmarks({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | undefined>>;
}) {
    const { sort, sortDir } = await searchParams;

    const { data: landmarks } = await sanityFetch({
        query: getAllByTypeQuery({ sorting: sort, direction: sortDir }),
        params: {
            type: 'landmark',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Landmarks</Heading>
            <ListingPage products={landmarks} href="/luroa/landmarks/" />
        </PageLayout>
    );
}
