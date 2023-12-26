import { TextSizes } from '@/src/types/generic';

export const headerSizes: Record<TextSizes, { title: string; subTitle: string }> = {
    xs: {
        title: 'text-4xl',
        subTitle: 'text-3xl pl-6',
    },
    sm: {
        title: 'text-4xl',
        subTitle: 'text-3xl pl-6',
    },
    md: {
        title: 'text-4xl',
        subTitle: 'text-3xl pl-6',
    },
    lg: {
        title: 'text-4xl',
        subTitle: 'text-3xl pl-6',
    },
    xl: {
        title: 'text-7xl',
        subTitle: 'text-6xl pl-10 tracking-wide',
    },
};

export const textSizes: Record<TextSizes, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
};
