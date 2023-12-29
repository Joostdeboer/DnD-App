import { ReactNode } from 'react';
import { classNames } from '@/src/utils/functions/classnames';

export function ClampedWidth({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={classNames([className, 'max-w-[1440px] w-full'])}>{children}</div>;
}
