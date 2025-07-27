import { AllProductsOfTypeResult } from '@/src/sanity/types';
import Link from 'next/link';
import { Image } from '@/src/components/atoms/generic/Image';
import { Text } from '@/src/components/atoms/generic/Text';

export function MapArtworksColumn({ artworks }: { artworks: AllProductsOfTypeResult }) {
    return artworks.map((artwork) => {
        const altName = artwork.defaultAttributes?.name ?? artwork.defaultAttributes?.slug?.current ?? artwork._id;
        const image = artwork.defaultAttributes?.image;

        return (
            image && (
                <Link
                    className="first:mt-0 mt-4 break-inside-avoid flex flex-col h-fit bg-white rounded-lg"
                    key={altName}
                    href={`/media/artworks/${artwork.defaultAttributes?.slug?.current}`}
                    prefetch={true}
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
