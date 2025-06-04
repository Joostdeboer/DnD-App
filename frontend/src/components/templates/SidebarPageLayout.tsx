import { PageLayout } from '@/src/components/templates/PageLayout';
import { ReactNode } from 'react';
import { Sidebar } from '@/src/components/organisms/layout/Sidebar';
import { DefaultAttributes, Information } from '@/src/sanity/types';

export function SidebarPageLayout({
    children,
    className,
    information,
    defaultAttributes,
}: {
    children: ReactNode;
    className?: string;
    information?: Information;
    defaultAttributes?: DefaultAttributes;
}) {
    return (
        <PageLayout className={className}>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start w-full gap-8">
                <section className="pb-8">{children}</section>
                <aside className="bg-brand-neutral-200 dark:bg-brand-neutral-800 rounded-md p-4 border-t-8 border-t-brand-primary-500 h-fit max-w-md w-full md:w-1/2">
                    <Sidebar defaultAttributes={defaultAttributes} information={information} />
                </aside>
            </div>
        </PageLayout>
    );
}
