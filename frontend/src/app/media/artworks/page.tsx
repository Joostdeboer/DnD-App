import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { OrganizedArtworkListing } from '@/src/components/organisms/products/OrganizedArtworkListing';
import { TagListing } from '@/src/components/organisms/products/TagListing';

/**
 * TODO:
 *  - add pagination
 *  - add sorting
 *  - add tag overflow in case of too many
 */
export default async function Artworks({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | undefined>>;
}) {
    const { tag } = await searchParams;

    const { data: artworks } = await sanityFetch({
        query: getAllByTypeQuery({
            sorting: 'createdAt',
            direction: 'asc',
            filters: [tag ? '$filterTag in defaultAttributes.tags' : undefined],
        }),
        params: {
            type: 'artwork',
            filterTag: tag ?? '',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Artworks</Heading>
            <TagListing type="artwork" />
            <OrganizedArtworkListing artworks={artworks} />
        </PageLayout>
    );
}
