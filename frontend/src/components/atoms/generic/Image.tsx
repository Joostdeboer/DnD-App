import NextImage, { ImageProps } from 'next/image';
import { classNames } from '@/src/utils/functions/classnames';

export function Image({ src, alt, width, height, className, ...rest }: Omit<ImageProps, 'src'> & { src: string }) {
    const url = src ? new URL(src) : undefined;

    // url?.searchParams.append('fm', 'webp');
    // if (typeof height === 'number') {
    //     url?.searchParams.append('h', height.toString());
    // }
    //
    // if (typeof width === 'number') {
    //     url?.searchParams.append('w', width.toString());
    // }

    return (
        <NextImage
            className={classNames(['w-auto h-auto', className])}
            width={width}
            height={height}
            src={url?.toString() ?? ''}
            alt={alt}
            {...rest}
        />
    );
}
