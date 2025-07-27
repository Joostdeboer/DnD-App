import { ReactNode } from 'react';
import { classNames } from '@/src/utils/functions/classnames';

const COLORS = ['primary', 'secondary', 'success', 'neutral'] as const;
export type Colors = (typeof COLORS)[number];
const TEXT_COLORS = ['black', 'white'] as const;
export type TextColors = (typeof TEXT_COLORS)[number];

export const BUTTON_CLASSES: Record<Colors, string> = {
    primary: 'hover:bg-brand-primary-600 bg-brand-primary-500',
    secondary: 'hover:bg-brand-secondary-600 bg-brand-secondary-500',
    success: 'hover:bg-brand-success-600 bg-brand-success-500',
    neutral: 'hover:bg-brand-neutral-600 bg-brand-neutral-500',
};

export const LINK_CLASSES: Record<Colors, string> = {
    primary: 'hover:underline hover:text-brand-primary-600 text-brand-primary-500',
    secondary: 'hover:underline hover:text-brand-secondary-600 text-brand-secondary-500',
    success: 'hover:underline hover:text-brand-success-600 text-brand-success-500',
    neutral: 'hover:underline hover:text-brand-neutral-600 text-brand-neutral-500',
};

export const TEXT_CLASSES: Record<TextColors, string> = {
    black: 'text-black',
    white: 'text-white',
};

export const BUTTON_CLASSES_DISABLED: Record<Colors, string> = {
    primary: 'disabled:bg-brand-primary-200 disabled:cursor-not-allowed',
    secondary: 'disabled:bg-brand-secondary-200 disabled:cursor-not-allowed',
    success: 'disabled:bg-brand-success-200 disabled:cursor-not-allowed',
    neutral: 'disabled:bg-brand-neutral-200 disabled:cursor-not-allowed',
};

export const BUTTON_STYLE = 'w-fit px-14 py-2 transition-colors ease-in-out duration-100 rounded-md text-center';

// TODO: maybe make this a file from which to only export the styles for buttons?
//  Or do something similar for Links as well
export function Button({
    children,
    className,
    color = 'primary',
    textColor = 'white',
    onClick,
}: {
    children: ReactNode;
    className?: string;
    color?: Colors;
    textColor?: TextColors;
    onClick?: () => void;
}) {
    return (
        <button
            className={classNames([BUTTON_STYLE, BUTTON_CLASSES[color], TEXT_CLASSES[textColor], className])}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
