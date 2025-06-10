import { sanityFetch } from '@/src/configs/sanityConfig';
import { allMedia } from '@/src/queries/products/queries';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { Text } from '@/src/components/atoms/generic/Text';
import { Image } from '@/src/components/atoms/generic/Image';

// TODO: show a listing page like sanity's Media page, or Pinterest's "more art" listing, loading more on scrolling down.
//  should have only artwork in there, and a way to filter the art. Not like a regular listing page
export default async function Art() {
    const { data: art } = await sanityFetch({
        query: allMedia,
    });

    return (
        <PageLayout>
            <Heading>List of Art</Heading>
            <div className="flex w-full gap-2">
                {art.map((item) => {
                    const altName = item.altText ?? item.originalFilename ?? item._id;
                    return (
                        item.url && (
                            <div className="flex flex-col p-4 bg-white rounded-lg" key={altName}>
                                <Image
                                    image={item.url}
                                    alt={altName}
                                    width={item.metadata?.dimensions?.width}
                                    height={item.metadata?.dimensions?.height}
                                />
                                <Text useDarkMode={false}>{altName}</Text>
                            </div>
                        )
                    );
                })}
            </div>
        </PageLayout>
    );
}
