import { classNames } from '@/src/utils/functions/classnames';
import { Text } from '@/src/components/atoms/generic/Text';

export function SidebarSection({
    section,
    title,
    titles,
}: {
    section?: Record<string, string>;
    title?: string;
    titles?: Record<string, string>;
}) {
    const sectionEntries = section ? Object.entries(section) : [];

    if (sectionEntries.length === 0) return null;

    return (
        <section className={classNames([sectionEntries.length > 0 ? 'border-b-2 border-brand-primary-900 pb-2' : ''])}>
            <Text className="text-center pb-2">{title}</Text>
            {sectionEntries.map(([k, v]) => (
                <section key={k} className="grid grid-cols-2 pl-2">
                    <Text size="sm">{titles?.[k] ?? k}</Text>
                    <Text size="sm">{v}</Text>
                </section>
            ))}
        </section>
    );
}
