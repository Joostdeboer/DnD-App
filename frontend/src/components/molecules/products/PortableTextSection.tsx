import { MappedPortableText } from '@/src/components/atoms/generic/MappedPortableText';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { PortableTextBlock } from '@sanity/types';
import { Content } from '@/src/sanity/types';

export function PortableTextSection({
    title,
    productSection,
}: {
    title: string;
    productSection?: PortableTextBlock | Content;
}) {
    if (!productSection) return null;
    return (
        <section className="flex flex-col">
            <Heading size="sm" className="!text-brand-primary-500">
                {title}
            </Heading>
            <MappedPortableText value={productSection} />
        </section>
    );
}
