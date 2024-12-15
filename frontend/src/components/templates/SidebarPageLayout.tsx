import { PageLayout } from '@/src/components/templates/PageLayout';
import { ReactNode } from 'react';
import { Sidebar } from '@/src/components/organisms/layout/Sidebar';
import { DefaultAttributesType, InformationType } from '@/src/groqd/types/subqueries';

export function SidebarPageLayout({
    children,
    className,
    information,
    defaultAttributes,
}: {
    children: ReactNode;
    className?: string;
    information?: InformationType;
    defaultAttributes?: DefaultAttributesType;
}) {
    return (
        <PageLayout className={className}>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start w-full gap-2">
                <section>{children}</section>
                <aside className="bg-brand-neutral-200 dark:bg-brand-neutral-800 rounded-md p-4 border-t-8 border-t-brand-primary-500 h-fit max-w-md w-full md:w-1/2">
                    <Sidebar defaultAttributes={defaultAttributes} information={information} />
                </aside>
            </div>
        </PageLayout>
    );
}
