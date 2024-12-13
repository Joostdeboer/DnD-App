const TEXT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'logo'] as const;
export type TextSizes = (typeof TEXT_SIZES)[number];

const HEADER_VARIANTS = ['title', 'subTitle'] as const;
export type HeaderVariants = (typeof HEADER_VARIANTS)[number];
