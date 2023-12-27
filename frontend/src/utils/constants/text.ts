import { TextSizes } from '@/src/types/generic';

export const headerSizes: Record<TextSizes, { title: string; subTitle: string }> = {
    xs: {
        title: 'text-4xl',
        subTitle: 'text-3xl',
    },
    sm: {
        title: 'text-4xl',
        subTitle: 'text-3xl',
    },
    md: {
        title: 'text-4xl',
        subTitle: 'text-3xl',
    },
    lg: {
        title: 'text-4xl',
        subTitle: 'text-3xl',
    },
    xl: {
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
};
