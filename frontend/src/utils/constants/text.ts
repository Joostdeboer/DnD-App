import { HeaderVariants, TextSizes } from '@/src/types/generic';

export const sizeToHeading: Record<TextSizes, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'> = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1',
    logo: 'h1',
};

// TODO fix these values
export const headerSizes: Record<TextSizes, Record<HeaderVariants, string>> = {
    xs: {
        title: 'text-xl',
        subTitle: 'text-lg',
    },
    sm: {
        title: 'text-2xl',
        subTitle: 'text-xl',
    },
    md: {
        title: 'text-3xl',
        subTitle: 'text-2xl',
    },
    lg: {
        title: 'text-4xl',
        subTitle: 'text-3xl',
    },
    xl: {
        title: 'text-5xl',
        subTitle: 'text-4xl',
    },
    logo: {
        title: 'text-7xl',
        subTitle: 'text-6xl',
    },
};

export const textSizes: Record<TextSizes, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    logo: 'text-2xl',
};
