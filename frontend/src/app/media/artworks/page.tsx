import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { OrganizedArtworkListing } from '@/src/components/organisms/products/OrganizedArtworkListing';

/**
 * TODO:
 *  - add pagination?
 *  - add filters?
 */
export default async function Artworks() {
    const { data: artworks } = await sanityFetch({
        query: getAllByTypeQuery({ sorting: 'createdAt', direction: 'asc' }),
        params: {
            type: 'artwork',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Artworks</Heading>
            <OrganizedArtworkListing artworks={artworks} />
        </PageLayout>
    );
}
