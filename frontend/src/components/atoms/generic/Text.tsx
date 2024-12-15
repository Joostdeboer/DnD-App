import { ReactNode } from 'react';
import { TextSizes } from '@/src/types/generic';
import { classNames } from '@/src/utils/functions/classnames';
import { textSizes } from '@/src/utils/constants/text';

export function Text({
    children,
    size = 'md',
    as = 'p',
    className,
    useDarkMode = true,
    isMuted = false,
}: {
    children: ReactNode;
    size?: TextSizes;
    as?: 'p' | 'span';
    className?: string;
    useDarkMode?: boolean;
    isMuted?: boolean;
}) {
    const As = as;
    let color = 'text-black';
    if (useDarkMode) color = 'dark:text-white';
    if (isMuted) color = 'dark:text-brand-neutral-500';
    return <As className={classNames([textSizes[size], color, className])}>{children}</As>;
}
