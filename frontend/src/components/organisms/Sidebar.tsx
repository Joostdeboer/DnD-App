import { runQuery } from '@/src/configs/sanityConfig';
import { documentSettingsQuery } from '@/src/groqd/queries/pages/queries';
import { DefaultAttributesType, InformationType } from '@/src/groqd/types/subqueries';
import { Image } from '@/src/components/atoms/generic/Image';
import { Text } from '@/src/components/atoms/generic/Text';
import { classNames } from '@/src/utils/functions/classnames';

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

export async function Sidebar({
    defaultAttributes,
    information,
}: {
    defaultAttributes?: DefaultAttributesType;
    information?: InformationType;
}) {
    const sidebarTexts = await runQuery(documentSettingsQuery(), ['sidebar']);

    // get the number of attributes that are added to the product page. If none exist, we need to hide the divider
    let attributeLength = 0;
    if (information) {
        Object.keys(information).forEach((key) => {
            attributeLength += Object.values(information[key as keyof typeof information] ?? {}).length;
        });
    }

    return (
        <div className="flex flex-col gap-2">
            <section
                className={classNames([
                    'flex flex-col gap-4 items-center',
                    attributeLength > 0 ? 'border-b-2 border-brand-primary-900 pb-2' : '',
                ])}
            >
                <section className="flex flex-col items-center">
                    {defaultAttributes?.name && <Text size="xl">{defaultAttributes?.name}</Text>}
                    {defaultAttributes?.altNames && (
                        <Text className="italic" size="sm">
                            {defaultAttributes?.altNames}
                        </Text>
                    )}
                </section>
                {defaultAttributes?.image?.asset.url && (
                    <Image
                        src={defaultAttributes?.image?.asset.url}
                        alt={defaultAttributes?.name ?? 'god'}
                        width={1000}
                        height={1000}
                        className="!w-32"
                        priority={true}
                        fetchPriority="low"
                    />
                )}
            </section>
            {/* loop over all keys to dynamically add all mapped sections */}
            {information &&
                Object.keys(information).map((k) => {
                    const key = k as keyof typeof information;
                    return (
                        <MappedSection
                            key={key}
                            section={information[key]}
                            title={sidebarTexts.informationCategories?.[key]}
                            titles={sidebarTexts.information?.[key]}
                        />
                    );
                })}
        </div>
    );
}
