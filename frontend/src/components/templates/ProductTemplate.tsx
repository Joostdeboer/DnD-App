import { ReactNode } from 'react';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { Text } from '@/src/components/atoms/generic/Text';
import { MappedPortableText } from '@/src/components/atoms/generic/MappedPortableText';
import { Divider } from '@/src/components/atoms/generic/Divider';
import { PortableTextSection } from '@/src/components/molecules/products/PortableTextSection';
import { DefaultAttributes } from '@/src/sanity/types';
import { formatDate } from '@/src/utils/functions/products';
import { Tag } from '@/src/components/atoms/products/Tag';

export function ProductTemplate({
    children,
    defaultAttributes,
    updatedAt,
}: {
    children?: ReactNode;
    defaultAttributes?: DefaultAttributes;
    updatedAt?: string;
}) {
    return (
        <section className="flex flex-col w-full pb-8">
            <section className="flex flex-col gap-2 items-center md:items-start">
                <Heading size="lg" id="pageTitle">
                    {defaultAttributes?.name}
                </Heading>
                {updatedAt && (
                    <Text size="sm" className="italic" isMuted>
                        Last updated at: {formatDate(new Date(updatedAt), { formatOptions: { timeStyle: 'short' } })}
                    </Text>
                )}
                {defaultAttributes?.altNames && <Text>Also known by: {defaultAttributes.altNames.join(' ')}</Text>}
                {defaultAttributes?.tags && (
                    <section className="flex flex-row gap-2 items-center">
                        <Text size="sm">Tags:</Text>
                        {defaultAttributes?.tags?.map((tag) => (
                            <Tag tag={tag} key={tag} />
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
