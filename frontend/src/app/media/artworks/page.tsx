import { sanityFetch } from '@/src/configs/sanityConfig';
import { getAllByTypeQuery } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { OrganizedArtworkListing } from '@/src/components/organisms/products/OrganizedArtworkListing';
import { TagListing } from '@/src/components/organisms/products/TagListing';
import { SortSelection } from '@/src/components/molecules/products/SortSelection';
import { Divider } from '@/src/components/atoms/generic/Divider';
import { sortingOptions } from '@/src/utils/constants/variables';

/**
 * TODO:
 *  - add pagination
 */
export default async function Artworks({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | undefined>>;
}) {
    const { tag, sort, dir } = await searchParams;
    const sortParam = sort ?? sortingOptions[0].sort;
    const dirParam = dir ?? sortingOptions[0].dir;

    const { data: artworks } = await sanityFetch({
        query: getAllByTypeQuery({
            sorting: sortParam,
            direction: dirParam,
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
            <section className="max-w-sm">
                <SortSelection sortParam={sortParam} dirParam={dirParam} />
            </section>
            <Divider />
            <OrganizedArtworkListing artworks={artworks} />
        </PageLayout>
    );
}
