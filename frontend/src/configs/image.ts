import { SanityImageSource, createImageUrlBuilder } from '@sanity/image-url';
import { SANITY_DATASET, SANITY_PROJECT_ID } from '@/src/utils/constants/config';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId: SANITY_PROJECT_ID, dataset: SANITY_DATASET });

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};
