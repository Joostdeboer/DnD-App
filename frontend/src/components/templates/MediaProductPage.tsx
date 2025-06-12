import { Artwork, SpecificMediaResult } from '@/src/sanity/types';
import { Image } from '@/src/components/atoms/generic/Image';
import { NoProductText } from '@/src/components/atoms/generic/NoProductText';
import { PortableTextSection } from '@/src/components/molecules/products/PortableTextSection';
import { ProductTemplate } from '@/src/components/templates/ProductTemplate';

export interface MediaProductPageProps {
    product: Artwork & { mediaData?: SpecificMediaResult };
}

export async function MediaProductPage({ product }: MediaProductPageProps) {
    if (!product?.defaultAttributes?.image) return <NoProductText />;

    return (
        <ProductTemplate defaultAttributes={product.defaultAttributes ?? undefined} updatedAt={product._updatedAt}>
            <div className="flex flex-col gap-6 justify-center items-center">
                <Image
                    image={product.defaultAttributes?.image}
                    alt={product.defaultAttributes?.name ?? product.defaultAttributes?.slug?.current ?? product._id}
                    width={product?.mediaData?.metadata?.dimensions?.width ?? 500}
                    height={product?.mediaData?.metadata?.dimensions?.height ?? 500}
                />
                <PortableTextSection title="Description" productSection={product.description} />
            </div>
        </ProductTemplate>
    );
}
