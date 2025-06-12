import { sanityFetch } from '@/src/configs/sanityConfig';
import { allProductsOfType } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { Text } from '@/src/components/atoms/generic/Text';
import { Image } from '@/src/components/atoms/generic/Image';
import Link from 'next/link';

// TODO: show a listing page like sanity's Media page, or Pinterest's "more art" listing, loading more on scrolling down.
//  should have only artwork in there, and a way to filter the art. Not like a regular listing page
export default async function Art() {
    const { data: artworks } = await sanityFetch({
        query: allProductsOfType,
        params: {
            type: 'artwork',
        },
    });

    return (
        <PageLayout>
            <Heading>List of Art</Heading>
            <div className="flex w-full gap-2">
                {artworks.map((artwork) => {
                    const altName =
                        artwork.defaultAttributes?.name ?? artwork.defaultAttributes?.slug?.current ?? artwork._id;
                    const image = artwork.defaultAttributes?.image;
                    return (
                        image && (
                            <Link
                                className="flex flex-col px-3 pt-3 bg-white rounded-lg"
                                key={altName}
                                href={`/writing/media/art/${artwork.defaultAttributes?.slug?.current}`}
                            >
                                <Image image={image} alt={altName} width={200} height={200} />
                                <Text className="py-3" useDarkMode={false}>
                                    {altName}
                                </Text>
                            </Link>
                        )
                    );
                })}
            </div>
        </PageLayout>
    );
}
