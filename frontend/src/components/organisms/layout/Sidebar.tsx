import { runQuery } from '@/src/configs/sanityConfig';
import { documentSettingsQuery } from '@/src/groqd/queries/pages/queries';
import { DefaultAttributesType, InformationType } from '@/src/groqd/types/subqueries';
import { Image } from '@/src/components/atoms/generic/Image';
import { Text } from '@/src/components/atoms/generic/Text';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { classNames } from '@/src/utils/functions/classnames';
import { SidebarSection } from '@/src/components/molecules/layout/SidebarSection';
import { getNrOfAttributesForProduct } from '@/src/utils/functions/products';

export async function Sidebar({
    defaultAttributes,
    information,
}: {
    defaultAttributes?: DefaultAttributesType;
    information?: InformationType;
}) {
    const sidebarTexts = await runQuery(documentSettingsQuery(), ['sidebar']);
    const attributeLength = getNrOfAttributesForProduct(information);

    return (
        <div className="flex flex-col gap-2">
            <section
                className={classNames([
                    'flex flex-col gap-4 items-center',
                    attributeLength > 0 ? 'border-b-2 border-brand-primary-900 pb-2' : '',
                ])}
            >
                <section className="flex flex-col items-center">
                    {defaultAttributes?.name && <Heading size="sm">{defaultAttributes?.name}</Heading>}
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
                        <SidebarSection
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
