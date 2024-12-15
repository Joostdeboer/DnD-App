import { MappedPortableText } from '@/src/components/atoms/generic/MappedPortableText';
import { PortableTextGroqd } from '@/src/groqd/types/functions';
import { Heading } from '@/src/components/atoms/generic/Heading';

export function PortableTextSection({ title, productSection }: { title: string; productSection?: PortableTextGroqd }) {
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
