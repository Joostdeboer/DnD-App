const TEXT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type TextSizes = (typeof TEXT_SIZES)[number];
export const MappedTextSizes: Record<TextSizes, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
};
