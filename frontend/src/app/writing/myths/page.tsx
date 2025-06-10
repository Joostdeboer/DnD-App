import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { ListingPage } from '@/src/components/templates/ListingPage';

export default async function Myths({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
    const { sort, sortDir } = await searchParams;

    const { data: writing } = await sanityFetch({
        query: getAllByTypeQuery({ sorting: sort, direction: sortDir, variant: 'writing' }),
        params: {
            type: 'writing',
            writingType: 'myth',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Myths</Heading>
            <ListingPage products={writing} href="/writing/myths/" />
        </PageLayout>
    );
}
