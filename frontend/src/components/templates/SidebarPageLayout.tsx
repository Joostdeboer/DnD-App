import { PageLayout } from '@/src/components/templates/PageLayout';
import { ReactNode } from 'react';

export function SidebarPageLayout({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <PageLayout className={className}>
            <aside>This will be a panel to the side</aside>
            {children}
        </PageLayout>
    );
}
