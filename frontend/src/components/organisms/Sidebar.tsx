import { runQuery } from '@/src/configs/sanityConfig';
import { documentSettingsQuery } from '@/src/groqd/queries/pages/queries';
import { DefaultAttributesType, InformationType } from '@/src/groqd/types/subqueries';
import { Image } from '@/src/components/atoms/generic/Image';
import { Text } from '@/src/components/atoms/generic/Text';

function MappedSection({
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
        <div>
            <Text>{title}</Text>
            {sectionEntries.map(([k, v]) => (
                <Text key={k}>
                    {titles?.[k] ?? k}: {v}
                </Text>
            ))}
        </div>
    );
}

export async function Sidebar({
    defaultAttributes,
    information,
}: {
    defaultAttributes?: DefaultAttributesType;
    information?: InformationType;
}) {
    const sidebarTexts = await runQuery(documentSettingsQuery(), ['sidebar']);

    return (
        <div className="flex flex-col gap-2">
            <section className="flex flex-col gap-2 pl-2">
                {defaultAttributes?.name && <Text>{defaultAttributes?.name}</Text>}
                {defaultAttributes?.altNames && <Text>{defaultAttributes?.altNames}</Text>}
                {defaultAttributes?.image?.asset.url && (
                    <Image
                        src={defaultAttributes?.image?.asset.url}
                        alt={defaultAttributes?.name ?? 'god'}
                        width={1000}
                        height={1000}
                        className="w-32"
                    />
                )}
            </section>
            <MappedSection
                section={information?.basics}
                title={sidebarTexts.informationCategories?.basics}
                titles={sidebarTexts.information?.basics}
            />
            <MappedSection
                section={information?.appearance}
                title={sidebarTexts.informationCategories?.appearance}
                titles={sidebarTexts.information?.appearance}
            />
            <MappedSection
                section={information?.commerce}
                title={sidebarTexts.informationCategories?.commerce}
                titles={sidebarTexts.information?.commerce}
            />
            <MappedSection
                section={information?.dates}
                title={sidebarTexts.informationCategories?.dates}
                titles={sidebarTexts.information?.dates}
            />
            <MappedSection
                section={information?.divinity}
                title={sidebarTexts.informationCategories?.divinity}
                titles={sidebarTexts.information?.divinity}
            />
            <MappedSection
                section={information?.geography}
                title={sidebarTexts.informationCategories?.geography}
                titles={sidebarTexts.information?.geography}
            />
            <MappedSection
                section={information?.history}
                title={sidebarTexts.informationCategories?.history}
                titles={sidebarTexts.information?.history}
            />
            <MappedSection
                section={information?.membership}
                title={sidebarTexts.informationCategories?.membership}
                titles={sidebarTexts.information?.membership}
            />
            <MappedSection
                section={information?.relations}
                title={sidebarTexts.informationCategories?.relations}
                titles={sidebarTexts.information?.relations}
            />
        </div>
    );
}
