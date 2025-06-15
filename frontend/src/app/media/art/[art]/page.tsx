import { sanityFetch } from '@/src/configs/sanityConfig';
import { specificMedia, specificTypePageQuery } from '@/src/queries/products/queries';
import { MediaProductPage, MediaProductPageProps } from '@/src/components/templates/MediaProductPage';
import { NoProductText } from '@/src/components/atoms/generic/NoProductText';

export default async function Poem({ params }: { params: Promise<{ art: string }> }) {
    const { art: searchParam } = await params;

    const { data: art } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'artwork',
            name: decodeURI(searchParam),
        },
    });
    if (art === null || art._type !== 'artwork' || !art?.defaultAttributes?.image) return <NoProductText />;

    const { data: currentMedia } = await sanityFetch({
        query: specificMedia,
        params: {
            id: art?.defaultAttributes.image.asset?._ref,
        },
    });

    const product: MediaProductPageProps['product'] = {
        ...art,
        mediaData: currentMedia,
    };

    return <MediaProductPage product={product} />;
}
