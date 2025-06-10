import NextImage, { ImageProps } from 'next/image';
import { classNames } from '@/src/utils/functions/classnames';
import { urlFor } from '@/src/configs/image';
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '@/src/sanity/types';

export interface SanityImage {
    asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
}

export function Image({
    image,
    alt,
    width,
    height,
    className,
    ...rest
}: Omit<ImageProps, 'src'> & { image: SanityImage | string }) {
    const formattedImage = urlFor(image).auto('format');
    if (width) {
        formattedImage.width(typeof width !== 'number' ? parseInt(width) : width);
    }
    if (height) {
        formattedImage.height(typeof height !== 'number' ? parseInt(height) : height);
    }

    return (
        <NextImage
            className={classNames(['w-auto h-auto', className])}
            width={width}
            height={height}
            src={formattedImage.url()}
            alt={alt}
            {...rest}
        />
    );
}
