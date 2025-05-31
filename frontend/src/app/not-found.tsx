'use client';

import { usePathname } from 'next/navigation';
import { Heading } from '@/src/components/atoms/generic/Heading';
import { Text } from '@/src/components/atoms/generic/Text';

export default function NotFound() {
    const path = usePathname();

    return (
        <div className="flex flex-col items-center justify-center text-center w-full">
            <Heading size="xl">Not Found</Heading>
            <Text>
                The path &#34;{path}&#34; was not found. Try a different route, or head back to the home page using the
                header or footer menu (or sidebar menu if you&#39;re on mobile).
            </Text>
        </div>
    );
}
