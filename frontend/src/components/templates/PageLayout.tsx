import { ReactNode } from 'react';
import { classNames } from '@/src/utils/functions/classnames';
import { Breadcrumbs } from '@/src/components/molecules/layout/Breadcrumbs';

export function PageLayout({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className="flex flex-col gap-2">
            <Breadcrumbs />
            <main className={classNames([className, 'flex flex-col gap-2'])}>{children}</main>
        </div>
    );
}
