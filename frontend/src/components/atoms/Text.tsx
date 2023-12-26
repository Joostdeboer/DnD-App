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
}: {
    children: ReactNode;
    size?: TextSizes;
    as?: 'p' | 'span';
    className?: string;
    useDarkMode?: boolean;
}) {
    const As = as;
    return (
        <As
            className={classNames([
                textSizes[size],
                useDarkMode ? 'dark:text-white' : undefined,
                className,
                'text-black',
            ])}
        >
            {children}
        </As>
    );
}
