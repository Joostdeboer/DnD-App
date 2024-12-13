import { ReactNode } from 'react';
import { HeaderVariants, TextSizes } from '@/src/types/generic';
import { classNames } from '@/src/utils/functions/classnames';
import { headerSizes, sizeToHeading } from '@/src/utils/constants/text';

export function Heading({
    children,
    size = 'md',
    variant = 'title',
    className,
    asSpan,
    useDarkMode = true,
}: {
    children: ReactNode;
    size?: TextSizes;
    variant?: HeaderVariants;
    className?: string;
    asSpan?: boolean;
    useDarkMode?: boolean;
}) {
    const As = asSpan ? 'span' : sizeToHeading[size];
    return (
        <As
            className={classNames([
                headerSizes[size][variant],
                useDarkMode ? 'dark:text-white' : undefined,
                className,
                'text-black',
            ])}
        >
            {children}
        </As>
    );
}
