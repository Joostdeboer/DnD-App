import { sanityFetch } from '@/src/configs/sanityConfig';
import { allProductsOfType } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { Text } from '@/src/components/atoms/generic/Text';
import { Image } from '@/src/components/atoms/generic/Image';
import Link from 'next/link';

/**
 * TODO:
 *  - add pagination
 *  - add overflow to next line
 *  - add filters?
 */
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
                                href={`/media/art/${artwork.defaultAttributes?.slug?.current}`}
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
