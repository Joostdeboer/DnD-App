import { ReactNode } from 'react';
import { classNames } from '@/src/utils/functions/classnames';

export function PageLayout({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className="flex flex-col gap-2">
            <div>Breadcrumbs/To/Home</div>
            <main className={classNames([className, 'flex flex-col gap-2'])}>{children}</main>
        </div>
    );
}
