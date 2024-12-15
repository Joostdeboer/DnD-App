import { ReactNode } from 'react';
import { DefaultAttributesType } from '@/src/groqd/types/subqueries';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { Text } from '@/src/components/atoms/generic/Text';
import { MappedPortableText } from '@/src/components/atoms/generic/MappedPortableText';
import { Divider } from '@/src/components/atoms/generic/Divider';
import { PortableTextSection } from '@/src/components/molecules/products/PortableTextSection';

export function ProductTemplate({
    children,
    defaultAttributes,
    updatedAt,
}: {
    children?: ReactNode;
    defaultAttributes?: DefaultAttributesType;
    updatedAt?: Date;
}) {
    return (
        <section className="flex flex-col">
            <section className="flex flex-col gap-2">
                <Heading size="lg">{defaultAttributes?.name}</Heading>
                <Text size="sm" className="italic" isMuted>
                    Last updated at: {updatedAt?.toLocaleString()}
                </Text>
                {defaultAttributes?.altNames && <Text>Also known by: {defaultAttributes.altNames.join(' ')}</Text>}
                {defaultAttributes?.tags && (
                    <section className="flex flex-row gap-2 items-center">
                        <Text size="sm">Tags:</Text>
                        {defaultAttributes?.tags?.map((tag) => (
                            <div key={tag} className="rounded-full bg-brand-primary-500 w-fit px-4 text-sm">
                                {tag}
                            </div>
                        ))}
                    </section>
                )}
            </section>
            {defaultAttributes?.shortDescription && (
                <>
                    <Divider />
                    <MappedPortableText value={defaultAttributes.shortDescription} />
                </>
            )}
            <Divider />
            <section className="flex flex-col gap-4">{children}</section>
            {defaultAttributes?.appendix && (
                <>
                    <Divider />
                    <PortableTextSection productSection={defaultAttributes.appendix} title="Appendix" />
                </>
            )}
        </section>
    );
}
