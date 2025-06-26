'use client';

import Link from 'next/link';
import { Image } from '@/src/components/atoms/generic/Image';
import { Text } from '@/src/components/atoms/generic/Text';
import { AllProductsOfTypeResult } from '@/src/sanity/types';
import { useBreakpoint } from '@/src/hooks/useBreakpoint';
import { splitInColumns } from '@/src/utils/functions/products';

/**
 *
 * @see https://www.june.so/blog/tailwind-css-masonry-layout for how this idea was inspired
 * @param artworks
 * @constructor
 */
export function OrganizedArtworkListing({ artworks }: { artworks: AllProductsOfTypeResult }) {
    const { isBelowMd } = useBreakpoint('md');
    const artworkCols = isBelowMd
        ? splitInColumns({ input: artworks, colsToSplit: 2 })
        : splitInColumns({ input: artworks, colsToSplit: 5 });

    return (
        <div className="columns-2 md:columns-5 w-full gap-4">
            {artworkCols.map((artworkCol, index) => (
                <MapArtworksColumn artworks={artworkCol} key={index} />
            ))}
        </div>
    );
}

function MapArtworksColumn({ artworks }: { artworks: AllProductsOfTypeResult }) {
    return artworks.map((artwork) => {
        const altName = artwork.defaultAttributes?.name ?? artwork.defaultAttributes?.slug?.current ?? artwork._id;
        const image = artwork.defaultAttributes?.image;
        return (
            image && (
                <Link
                    className="first:mt-0 mt-4 break-inside-avoid flex flex-col h-fit bg-white rounded-lg"
                    key={altName}
                    href={`/media/artworks/${artwork.defaultAttributes?.slug?.current}`}
                >
                    <Image image={image} alt={altName} width={200} height={200} className="w-full rounded-t-lg" />
                    <Text className="p-2" useDarkMode={false}>
                        {altName}
                    </Text>
                </Link>
            )
        );
    });
}
