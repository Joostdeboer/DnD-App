'use client';

import { Artwork, SpecificMediaResult } from '@/src/sanity/types';
import { Image } from '@/src/components/atoms/generic/Image';
import { Text } from '@/src/components/atoms/generic/Text';
import { NoProductText } from '@/src/components/atoms/generic/NoProductText';
import { PortableTextSection } from '@/src/components/molecules/products/PortableTextSection';
import { ProductTemplate } from '@/src/components/templates/ProductTemplate';
import { Modal } from '@/src/components/atoms/generic/Modal';
import { useState, useMemo } from 'react';
import { PageLayout } from '@/src/components/templates/PageLayout';
import { BASE_MODAL_IMAGE_WIDTH } from '@/src/utils/constants/images';

export interface MediaProductPageProps {
    product: Artwork & { mediaData?: SpecificMediaResult };
}

export function MediaProductPage({ product }: MediaProductPageProps) {
    const [isOpen, setIsOpen] = useState(false);

    const width = product?.mediaData?.metadata?.dimensions?.width;
    const height = product?.mediaData?.metadata?.dimensions?.height;
    const modalWidth = useMemo(() => {
        return width && height ? BASE_MODAL_IMAGE_WIDTH / (height / width) : BASE_MODAL_IMAGE_WIDTH;
    }, [height, width]);

    if (!product?.defaultAttributes?.image) return <NoProductText />;

    const title = product.mediaData?.title ?? product.defaultAttributes.name;

    return (
        <PageLayout>
            <ProductTemplate defaultAttributes={product.defaultAttributes ?? undefined} updatedAt={product._updatedAt}>
                <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Image
                        image={product.defaultAttributes?.image}
                        alt={product.defaultAttributes?.name ?? product.defaultAttributes?.slug?.current ?? product._id}
                        width={modalWidth}
                        height={1080}
                        className="w-full h-full md:max-w-screen-lg md:max-h-screen-xl"
                    />
                </Modal>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <div className="flex flex-col gap-2 items-center">
                        <button onClick={() => setIsOpen(true)}>
                            <Image
                                image={product.defaultAttributes?.image}
                                alt={
                                    product.defaultAttributes?.name ??
                                    product.defaultAttributes?.slug?.current ??
                                    product._id
                                }
                                width={width ?? 300}
                                height={height ?? 300}
                                className="md:max-w-xl"
                            />
                        </button>
                        <Text className="italic" size="sm">
                            {title}
                        </Text>
                    </div>
                    <PortableTextSection title="Description" productSection={product.description} />
                </div>
            </ProductTemplate>
        </PageLayout>
    );
}
