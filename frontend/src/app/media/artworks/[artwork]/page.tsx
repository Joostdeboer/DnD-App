import { sanityFetch } from '@/src/configs/sanityConfig';
import { specificMedia, specificTypePageQuery } from '@/src/queries/products/queries';
import { MediaProductPage, MediaProductPageProps } from '@/src/components/templates/MediaProductPage';
import { NoProductText } from '@/src/components/atoms/generic/NoProductText';

export default async function Artwork({ params }: { params: Promise<{ artwork: string }> }) {
    const { artwork: searchParam } = await params;

    const { data: artwork } = await sanityFetch({
        query: specificTypePageQuery,
        params: {
            type: 'artwork',
            name: decodeURI(searchParam),
        },
    });
    if (artwork === null || artwork._type !== 'artwork' || !artwork?.defaultAttributes?.image) return <NoProductText />;

    const { data: currentMedia } = await sanityFetch({
        query: specificMedia,
        params: {
            id: artwork?.defaultAttributes.image.asset?._ref,
        },
    });

    const product: MediaProductPageProps['product'] = {
        ...artwork,
        mediaData: currentMedia,
    };

    return <MediaProductPage product={product} />;
}
