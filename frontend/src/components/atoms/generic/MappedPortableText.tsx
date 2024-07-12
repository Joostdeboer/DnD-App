import { PortableText, PortableTextProps, PortableTextReactComponents } from '@portabletext/react';
import { PortableTextGroqd } from '@/src/groqd/helper/functions';
import { classNames } from '@/src/utils/functions/classnames';
import { LINK_CLASSES } from '@/src/components/atoms/generic/Button';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Image } from '@/src/components/atoms/generic/Image';

const PortableTextComponents = (): Partial<PortableTextReactComponents> => ({
    types: {
        image: (props) => {
            if (props.value.asset.url) {
                return (
                    <Image
                        className="w-auto h-auto"
                        width={200}
                        height={200}
                        src={props.value.asset.url}
                        alt={props.value.asset.altText}
                        priority={true}
                    />
                );
            }
            return null;
        },
    },
    block: ({ children }) => {
        return <>{children}</>;
    },
    list: {
        bullet: ({ children }) => {
            return <ul className="list-disc pl-5">{children}</ul>;
        },
        number: ({ children }) => {
            return <ol className="list-decimal pl-5">{children}</ol>;
        },
    },
    listItem: {
        bullet: ({ children }) => {
            return <li>{children}</li>;
        },
        number: ({ children }) => {
            return <li>{children}</li>;
        },
    },
    marks: {
        internalLink: ({
            children,
            value,
        }: {
            children: ReactNode;
            value?: { _key: string; _type: string; type: string; slug: string };
        }) => {
            return (
                <Link href={value?.slug ?? ''} className={classNames(['w-fit', LINK_CLASSES['primary']])}>
                    {children}
                </Link>
            );
        },
        externalLink: ({ children, value }: { children: ReactNode; value?: { url?: string; newWindow?: boolean } }) => {
            return (
                <Link
                    href={value?.url ?? ''}
                    target={value?.newWindow ? '_blank' : '_self'}
                    rel={value?.newWindow ? 'noreferrer noopener' : ''}
                    className={classNames(['w-fit', LINK_CLASSES['primary']])}
                >
                    {children}
                </Link>
            );
        },
    },
});

export function MappedPortableText({
    value,
    useDarkMode = true,
    className,
}: {
    value: PortableTextProps['value'] | PortableTextGroqd;
    className?: string;
    useDarkMode?: boolean;
}) {
    return (
        <p className={classNames([useDarkMode ? 'dark:text-white' : undefined, className, 'text-black'])}>
            <PortableText value={value} components={PortableTextComponents()} />
        </p>
    );
}
